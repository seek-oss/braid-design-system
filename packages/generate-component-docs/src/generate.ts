/* eslint-disable no-console */
import fs from 'fs';
import { createRequire } from 'node:module';
import { isDeepStrictEqual } from 'node:util';
import path from 'path';

import ts, { type CompilerOptions } from 'typescript';

const require = createRequire(import.meta.url);

const MAX_DEPTH = 10;
const HOOK_MAX_DEPTH = 20;
const componentTypeOptions = { maxDepth: MAX_DEPTH, expandFunctions: false };
const hookTypeOptions = { maxDepth: HOOK_MAX_DEPTH, expandFunctions: true };
const aliasWhitelist = ['ClassValue'];
const propBlacklist = ['key'];

const tsconfigPath = require.resolve(
  path.join(import.meta.dirname, '../../braid-design-system/tsconfig.json'),
);
const componentsFile = require.resolve(
  path.join(
    import.meta.dirname,
    '../../braid-design-system/src/lib/components/index.ts',
  ),
);
const testComponentsFile = require.resolve(
  path.join(import.meta.dirname, '../../braid-design-system/src/test.ts'),
);

const stringAliases: Record<string, string> = {
  // with an explicit alias 'boolean' becomes a union of 'true' | 'false'
  boolean: 'boolean',
  Element: 'Element',
  CSSProperties: 'CSSProperties',
  Date: 'Date',
  DataAttributeMap: 'DataAttributeMap',
};

export interface NormalisedInterface {
  type: 'interface';
  props: Record<
    string,
    {
      propName: string;
      required: boolean;
      type: NormalisedPropType;
      deprecated: boolean;
      tags: Array<{ name: string; text: string }>;
      description?: string;
    }
  >;
}

export type NormalisedPropType =
  | string
  | { type: 'union'; types: NormalisedPropType[] }
  | { type: 'alias'; alias: string; params: NormalisedPropType[] }
  | {
      type: 'function';
      signatures: Array<{
        typeParams: string[];
        params: Array<{
          name: string;
          optional: boolean;
          rest: boolean;
          type: NormalisedPropType;
        }>;
        returnType: NormalisedPropType;
      }>;
    }
  | NormalisedInterface;

interface ComponentDoc {
  exportType: 'component';
  props: NormalisedInterface;
}

interface HookDoc {
  exportType: 'hook';
  params: NormalisedPropType[];
  returnType: NormalisedPropType;
}

const unionAliases = {
  ReactNode: [
    'string',
    'number',
    'bigint',
    'false',
    'true',
    'ReactElement<unknown, string | JSXElementConstructor<any>>',
    'Iterable<ReactNode>',
    'ReactPortal',
    'Promise<AwaitedReactNode>',
  ],
  ReactNodeNoStrings: [
    'false',
    'true',
    'ReactElement<unknown, string | JSXElementConstructor<any>>',
    'ReactNodeArray',
  ],
} as const;

export type ExportDoc = ComponentDoc | HookDoc;

function extractTypeInfo(file: string, compilerOptions: CompilerOptions) {
  const program = ts.createProgram([file], compilerOptions);

  const checker = program.getTypeChecker();

  function resolveDeclaration(exp: ts.Symbol) {
    if (exp.valueDeclaration) {
      return exp.valueDeclaration;
    }

    if (exp.declarations) {
      return exp.declarations[0];
    }

    throw new Error('Could not resolve declaration');
  }

  function getComponentPropsType(exp: ts.Symbol) {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      resolveDeclaration(exp),
    );

    const callSignatures = type.getCallSignatures();

    if (callSignatures.length) {
      for (const sig of callSignatures) {
        const params = sig.getParameters();
        if (params.length === 0) {
          continue;
        }

        const propsParam = params[0];
        if (propsParam.name === 'props' || params.length === 1) {
          return propsParam;
        }
      }
    }

    return null;
  }

  function normalizeInterface(
    propsType: ts.Type,
    propsObj: ts.Symbol,
    depth: number,
    extractComments?: boolean,
    options = componentTypeOptions,
  ): NormalisedInterface {
    let props = propsType.getProperties();

    if (propsType.isUnionOrIntersection()) {
      props = [
        // @ts-expect-error Not public api, yet... (requires Typescript >v3)
        // Authors are considering making public, tracked here https://github.com/microsoft/TypeScript/issues/38184
        // Used by react-docgen-typescript package, see https://github.com/styleguidist/react-docgen-typescript/blob/4bffdfbd626b2f3991ccd2f565ed05b62a59f464/src/parser.ts#L664
        ...checker.getAllPossiblePropertiesOfTypes(propsType.types),
        ...props,
      ];
    }

    return {
      type: 'interface',
      props: Object.assign(
        {},
        ...props
          .filter(
            (prop) =>
              !(
                (!options.expandFunctions &&
                  propBlacklist.includes(prop.getName())) ||
                prop.getName().startsWith('__@')
              ),
          )
          .map((prop) => {
            const propName = prop.getName();

            let description = '';
            const tags = prop
              .getJsDocTags()
              .filter(({ name }) => name !== 'see')
              .map(({ name, text }) => ({
                name,
                text:
                  Array.isArray(text) && text.length > 0 ? text[0].text : text,
              }));

            const deprecated = tags.some(({ name }) =>
              /^deprecated$/i.test(name),
            );

            if (extractComments) {
              description = prop
                .getDocumentationComment(checker)
                .map(({ text }) => text)
                .join('\n');
            }

            // Find type of prop by looking in context of the props object itself.
            const propType = checker
              .getTypeOfSymbolAtLocation(prop, resolveDeclaration(propsObj))
              .getNonNullableType();

            const isOptional =
              (prop.getFlags() & ts.SymbolFlags.Optional) !== 0;

            const propDeclaration =
              prop.valueDeclaration ?? prop.declarations?.[0];
            const typeAlias = checker.typeToString(
              propDeclaration
                ? checker.getTypeAtLocation(propDeclaration)
                : propType,
            );

            return {
              [propName]: {
                propName,
                required: !isOptional,
                type: aliasWhitelist.includes(typeAlias)
                  ? typeAlias
                  : normaliseType(propType, propsObj, depth + 1, options),
                deprecated,
                tags,
                description,
              },
            };
          }),
      ),
    };
  }

  function normaliseType(
    type: ts.Type,
    propsObj: ts.Symbol,
    depth: number,
    options = componentTypeOptions,
  ): NormalisedPropType {
    const typeString = checker.typeToString(type);

    if (stringAliases[typeString]) {
      return stringAliases[typeString];
    }

    if (depth > options.maxDepth) {
      console.warn(
        'Max depth reached normalising type. Return builtin string representation',
      );
      return typeString;
    }

    if (type.aliasSymbol) {
      const alias = type.aliasSymbol.getName();

      if (aliasWhitelist.includes(alias)) {
        return {
          params: type.aliasTypeArguments
            ? type.aliasTypeArguments.map((aliasArg) =>
                normaliseType(aliasArg, propsObj, depth + 1, options),
              )
            : [],
          alias,
          type: 'alias',
        };
      }
    }

    if (type.isUnion()) {
      const types = type.types.map((unionItem) =>
        checker.typeToString(unionItem),
      );

      if (
        isDeepStrictEqual(
          types.slice(0, unionAliases.ReactNode.length),
          unionAliases.ReactNode,
        )
      ) {
        return 'ReactNode';
      }

      if (isDeepStrictEqual(types, unionAliases.ReactNodeNoStrings)) {
        return 'ReactNodeNoStrings';
      }

      return {
        type: 'union',
        types: type.types.map((unionItem) =>
          normaliseType(unionItem, propsObj, depth + 1, options),
        ),
      };
    }

    if (
      options.expandFunctions &&
      type
        .getSymbol()
        ?.declarations?.some((declaration) =>
          program.isSourceFileFromExternalLibrary(declaration.getSourceFile()),
        )
    ) {
      return typeString;
    }

    const callSignatures = type.getCallSignatures();

    if (options.expandFunctions && callSignatures.length) {
      return {
        type: 'function',
        signatures: callSignatures.map((signature) => ({
          typeParams:
            signature.typeParameters?.map((param) =>
              checker.typeToString(param),
            ) ?? [],
          params: signature.getParameters().map((param) => {
            const declaration = resolveDeclaration(param);

            return {
              name: param.getName(),
              optional:
                ts.isParameter(declaration) &&
                Boolean(declaration.questionToken || declaration.initializer),
              rest:
                ts.isParameter(declaration) &&
                Boolean(declaration.dotDotDotToken),
              type: normaliseType(
                checker.getTypeOfSymbolAtLocation(param, declaration),
                param,
                depth + 1,
                options,
              ),
            };
          }),
          returnType: normaliseType(
            signature.getReturnType(),
            propsObj,
            depth + 1,
            options,
          ),
        })),
      };
    }

    if (
      type.isClassOrInterface() ||
      (options.expandFunctions && type.isIntersection()) ||
      (options.expandFunctions &&
        type.flags & ts.TypeFlags.Object &&
        !checker.isArrayType(type) &&
        !checker.isTupleType(type))
    ) {
      if (options.expandFunctions && !type.getProperties().length) {
        return checker.typeToString(
          type,
          undefined,
          ts.TypeFormatFlags.InTypeAlias,
        );
      }

      return normalizeInterface(type, propsObj, depth + 1, false, options);
    }

    const numericalUnions = typeString.match(/\d([0-9|\s]+)\d/g);
    if (numericalUnions !== null) {
      let sortedTypeString = typeString;
      numericalUnions.forEach((union) => {
        sortedTypeString = sortedTypeString.replace(
          union,
          union.split(' | ').sort().join(' | '),
        );
      });
      return sortedTypeString;
    }

    return typeString;
  }

  function getComponentDocs(exp: ts.Symbol) {
    const propsObj = getComponentPropsType(exp);

    if (!propsObj || !propsObj.valueDeclaration) {
      return { type: 'interface', props: {} };
    }

    const propsType = checker.getTypeOfSymbolAtLocation(
      propsObj,
      propsObj.valueDeclaration,
    );

    return {
      exportType: 'component',
      props: normalizeInterface(propsType, propsObj, 0, true),
    };
  }

  function getHookDocs(exp: ts.Symbol): HookDoc {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      resolveDeclaration(exp),
    );

    const callSignature = type.getCallSignatures()[0];

    return {
      exportType: 'hook',
      params: callSignature.getParameters().map((param) => {
        const paramType = checker.getTypeOfSymbolAtLocation(
          param,
          resolveDeclaration(exp),
        );

        return normaliseType(paramType, exp, 0, hookTypeOptions);
      }),
      returnType: normaliseType(
        callSignature.getReturnType(),
        exp,
        0,
        hookTypeOptions,
      ),
    };
  }

  for (const sourceFile of program.getSourceFiles()) {
    if (!sourceFile.isDeclarationFile && sourceFile.fileName === file) {
      const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

      if (moduleSymbol) {
        return Object.assign(
          {},
          ...checker.getExportsOfModule(moduleSymbol).map((moduleExport) => {
            try {
              const exportType = moduleExport.getName().startsWith('use')
                ? getHookDocs(moduleExport)
                : getComponentDocs(moduleExport);

              return {
                [moduleExport.escapedName as string]: exportType,
              };
            } catch (e) {
              console.log(
                'Failed to extract type from',
                moduleExport.escapedName,
              );
              console.error(e);
            }
          }),
        );
      }
    }
  }
}

export default () => {
  const basePath = path.dirname(tsconfigPath);
  const { config, error } = ts.readConfigFile(tsconfigPath, (filename) =>
    // eslint-disable-next-line no-sync
    fs.readFileSync(filename, 'utf8'),
  );

  if (error) {
    console.error(error);
    throw error;
  }

  const { options, errors } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath,
  );

  if (errors && errors.length) {
    console.error(errors[0]);
    throw errors[0];
  }

  return {
    ...extractTypeInfo(componentsFile, options),
    ...extractTypeInfo(testComponentsFile, options),
  };
};

/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import isEqual from 'lodash/isEqual';

const MAX_DEPTH = 10;
const aliasWhitelist = ['ClassValue'];
const propBlacklist = ['key'];

const tsconfigPath = path.join(__dirname, '../tsconfig.json');
const componentsFile = path.join(__dirname, '../lib/components/index.ts');

const stringAliases: Record<string, string> = {
  // with an explicit alias 'boolean' becomes a union of 'true' | 'false'
  boolean: 'boolean',
  Element: 'Element',
  CSSProperties: 'CSSProperties',
};

export interface NormalisedInterface {
  type: 'interface';
  props: {
    [propName: string]: {
      propName: string;
      required: boolean;
      type: NormalisedPropType;
      deprecated: boolean;
      tags: Array<{ name: string; text: string }>;
      description?: string;
    };
  };
}

export type NormalisedPropType =
  | string
  | { type: 'union'; types: Array<NormalisedPropType> }
  | { type: 'alias'; alias: string; params: Array<NormalisedPropType> }
  | NormalisedInterface;

export type ComponentDoc = {
  exportType: 'component';
  props: NormalisedInterface;
};

export type HookDoc = {
  exportType: 'hook';
  params: NormalisedPropType[];
  returnType: NormalisedPropType;
};

export type ExportDoc = ComponentDoc | HookDoc;

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

  const program = ts.createProgram([componentsFile], options);

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
          .filter((prop) => !propBlacklist.includes(prop.getName()))
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

            const typeAlias = checker.typeToString(
              checker.getTypeAtLocation(resolveDeclaration(prop)),
            );

            return {
              [propName]: {
                propName,
                required: !isOptional,
                type: aliasWhitelist.includes(typeAlias)
                  ? typeAlias
                  : normaliseType(propType, propsObj, depth + 1),
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
  ): NormalisedPropType {
    const typeString = checker.typeToString(type);

    if (stringAliases[typeString]) {
      return stringAliases[typeString];
    }

    if (depth > MAX_DEPTH) {
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
                normaliseType(aliasArg, propsObj, depth + 1),
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
        isEqual(types.slice(0, 6), [
          'string',
          'number',
          'false',
          'true',
          '{}',
          'ReactElement<any, string | JSXElementConstructor<any>>',
        ])
      ) {
        return 'ReactNode';
      }

      if (
        isEqual(types, [
          'false',
          'true',
          'ReactElement<any, string | JSXElementConstructor<any>>',
          'ReactNodeArray',
        ])
      ) {
        return 'ReactNodeNoStrings';
      }

      return {
        type: 'union',
        types: type.types.map((unionItem) =>
          normaliseType(unionItem, propsObj, depth + 1),
        ),
      };
    }

    if (type.isClassOrInterface()) {
      return normalizeInterface(type, propsObj, depth + 1);
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

        return normaliseType(paramType, exp, 0);
      }),
      returnType: normaliseType(callSignature.getReturnType(), exp, 0),
    };
  }

  for (const sourceFile of program.getSourceFiles()) {
    if (
      !sourceFile.isDeclarationFile &&
      sourceFile.fileName === componentsFile
    ) {
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
};

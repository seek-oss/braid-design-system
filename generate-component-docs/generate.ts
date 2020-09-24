/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import ts from 'typescript';
import isEqual from 'lodash/isEqual';

const aliasWhitelist = ['ResponsiveProp'];
const propBlacklist = ['key'];

const tsconfigPath = path.join(__dirname, '../tsconfig.json');
const componentsFile = path.join(__dirname, '../lib/components/index.ts');

const stringAliases: Record<string, string> = {
  // with an explicit alias 'boolean' becomes a union of 'true' | 'false'
  boolean: 'boolean',
  CSSProperties: 'CSSProperties',
  'string | number | boolean | ClassDictionary | ClassArray':
    'string | number | boolean | ClassDictionary | ClassArray',
};

const reactNodeTypes = [
  'string',
  'number',
  'false',
  'true',
  '{}',
  'ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>',
  'ReactNodeArray',
  'ReactPortal',
];

const reactNodeNoStringsTypes = [
  'false',
  'true',
  'ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)>',
  'ReactNodeArray',
];

export interface NormalisedInterface {
  type: 'interface';
  props: {
    [propName: string]: {
      propName: string;
      required: boolean;
      type: NormalisedPropType;
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

  function getComponentPropsType(exp: ts.Symbol) {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      exp.valueDeclaration || exp.declarations[0],
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
    extractComments?: boolean,
  ): NormalisedInterface {
    return {
      type: 'interface',
      props: Object.assign(
        {},
        ...propsType
          .getProperties()
          .filter((prop) => !propBlacklist.includes(prop.getName()))
          .map((prop) => {
            const propName = prop.getName();

            let description = '';

            if (extractComments) {
              description = prop
                .getDocumentationComment(checker)
                .map(({ text }) => text)
                .join('\n');
            }

            // Find type of prop by looking in context of the props object itself.
            const propType = checker
              .getTypeOfSymbolAtLocation(prop, propsObj.valueDeclaration)
              .getNonNullableType();

            const isOptional =
              (prop.getFlags() & ts.SymbolFlags.Optional) !== 0;

            const typeAlias = checker.typeToString(
              checker.getTypeAtLocation(prop.valueDeclaration),
            );

            return {
              [propName]: {
                propName,
                required: !isOptional,
                type: aliasWhitelist.includes(typeAlias)
                  ? typeAlias
                  : normaliseType(propType, propsObj),
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
  ): NormalisedPropType {
    const typeString = checker.typeToString(type);

    if (stringAliases[typeString]) {
      return stringAliases[typeString];
    }

    if (type.aliasSymbol) {
      const alias = type.aliasSymbol.getName();

      if (aliasWhitelist.includes(alias)) {
        return {
          params: type.aliasTypeArguments
            ? type.aliasTypeArguments.map((aliasArg) =>
                normaliseType(aliasArg, propsObj),
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

      if (isEqual(types, reactNodeTypes)) {
        return 'ReactNode';
      }

      if (isEqual(types, reactNodeNoStringsTypes)) {
        return 'ReactNodeNoStrings';
      }

      return {
        type: 'union',
        types: type.types.map((unionItem) =>
          normaliseType(unionItem, propsObj),
        ),
      };
    }

    if (type.isClassOrInterface()) {
      return normalizeInterface(type, propsObj);
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
      props: normalizeInterface(propsType, propsObj, true),
    };
  }

  function getHookDocs(exp: ts.Symbol): HookDoc {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      exp.valueDeclaration || exp.declarations[0],
    );

    const callSignature = type.getCallSignatures()[0];

    return {
      exportType: 'hook',
      params: callSignature.getParameters().map((param) => {
        const paramType = checker.getTypeOfSymbolAtLocation(
          param,
          exp.valueDeclaration,
        );

        return normaliseType(paramType, exp);
      }),
      returnType: normaliseType(callSignature.getReturnType(), exp),
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
          ...checker.getExportsOfModule(moduleSymbol).map((moduleExport) => ({
            [moduleExport.escapedName as string]: moduleExport
              .getName()
              .startsWith('use')
              ? getHookDocs(moduleExport)
              : getComponentDocs(moduleExport),
          })),
        );
      }
    }
  }
};

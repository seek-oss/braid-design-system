/* tslint:disable */
import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const aliasWhitelist = ['ResponsiveProp'];
const propBlacklist = ['key'];

const tsconfigPath = path.join(__dirname, '../tsconfig.json');
const componentsFile = path.join(__dirname, '../lib/components/index.ts');

const reactNodeType =
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, string | ... | (new (props: any) => Component<any, any, any>)> | null) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal';

const stringAliases: Record<string, string> = {
  [reactNodeType]: 'ReactNode',
  // with an explicit alias 'boolean' becomes a union of 'true' | 'false'
  boolean: 'boolean',
};

export interface PropDetails {
  propName: string;
  required: boolean;
  type: NormalisedPropType;
}

export type NormalisedPropType =
  | string
  | { type: 'union'; types: Array<NormalisedPropType> }
  | { type: 'alias'; alias: string; params: Array<NormalisedPropType> };

export default () => {
  const basePath = path.dirname(tsconfigPath);
  const { config, error } = ts.readConfigFile(tsconfigPath, filename =>
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

  const getComponentPropsType = (exp: ts.Symbol) => {
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
  };

  const normaliseType = (type: ts.Type): NormalisedPropType => {
    const typeString = checker.typeToString(type);

    if (stringAliases[typeString]) {
      return stringAliases[typeString];
    }

    if (type.aliasSymbol) {
      const alias = type.aliasSymbol.getName();

      if (aliasWhitelist.includes(alias)) {
        return {
          params: type.aliasTypeArguments
            ? type.aliasTypeArguments.map(aliasArg => normaliseType(aliasArg))
            : [],
          alias,
          type: 'alias',
        };
      }
    }

    if (type.isUnion()) {
      return {
        type: 'union',
        types: type.types.map(unionItem => normaliseType(unionItem)),
      };
    }

    return checker.typeToString(type);
  };

  const getComponentDocs = (exp: ts.Symbol) => {
    const propsObj = getComponentPropsType(exp);

    if (!propsObj || !propsObj.valueDeclaration) {
      return {};
    }
    const propsType = checker.getTypeOfSymbolAtLocation(
      propsObj,
      propsObj.valueDeclaration,
    );

    return Object.assign(
      {},
      ...propsType
        .getProperties()
        .filter(prop => !propBlacklist.includes(prop.getName()))
        .map(prop => {
          const propName = prop.getName();

          // Find type of prop by looking in context of the props object itself.
          const propType = checker
            .getTypeOfSymbolAtLocation(prop, propsObj.valueDeclaration)
            .getNonNullableType();

          const isOptional = (prop.getFlags() & ts.SymbolFlags.Optional) !== 0;

          const typeAlias = checker.typeToString(
            checker.getTypeAtLocation(prop.valueDeclaration),
          );

          return {
            [propName]: {
              propName,
              required: !isOptional,
              type: aliasWhitelist.includes(typeAlias)
                ? typeAlias
                : normaliseType(propType),
            },
          };
        }),
    );
  };

  for (const sourceFile of program.getSourceFiles()) {
    if (
      !sourceFile.isDeclarationFile &&
      sourceFile.fileName === componentsFile
    ) {
      const moduleSymbol = checker.getSymbolAtLocation(sourceFile);

      if (moduleSymbol) {
        return Object.assign(
          {},
          ...checker.getExportsOfModule(moduleSymbol).map(moduleExport => {
            return {
              [moduleExport.escapedName as string]: {
                props: getComponentDocs(moduleExport),
              },
            };
          }),
        );
      }
    }
  }
};

/* eslint-disable no-sync */
/* eslint-disable no-process-exit */
/* eslint-disable no-console */
// eslint-disable-file
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const aliasWhitelist = ['ResponsiveProp', 'ReactNode'];

(async () => {
  const tsconfigPath = path.join(__dirname, 'tsconfig.json');
  const basePath = path.dirname(tsconfigPath);
  const { config, error } = ts.readConfigFile(tsconfigPath, filename =>
    fs.readFileSync(filename, 'utf8'),
  );

  if (error) {
    console.error(error);
    process.exit(1);
  }

  const { options, errors } = ts.parseJsonConfigFileContent(
    config,
    ts.sys,
    basePath,
    {},
    tsconfigPath,
  );

  if (errors && errors.length) {
    console.error(error[0]);
    process.exit(1);
  }

  const componentsFile = 'lib/components/index.ts';

  const program = ts.createProgram([componentsFile], options);

  const checker = program.getTypeChecker();

  const getComponentPropsType = exp => {
    const type = checker.getTypeOfSymbolAtLocation(
      exp,
      exp.valueDeclaration || exp.declarations[0],
    );

    const callSignatures = type.getCallSignatures();

    if (callSignatures.length) {
      // Could be a stateless component.  Is a function, so the props object we're interested
      // in is the (only) parameter.

      for (const sig of callSignatures) {
        const params = sig.getParameters();
        if (params.length === 0) {
          continue;
        }
        // Maybe we could check return type instead,
        // but not sure if Element, ReactElement<T> are all possible values
        const propsParam = params[0];
        if (propsParam.name === 'props' || params.length === 1) {
          return propsParam;
        }
      }
    }

    return null;
  };

  const normaliseType = type => {
    const baseConstraint = checker.getBaseConstraintOfType(type);

    if (baseConstraint && baseConstraint.aliasSymbol) {
      const alias = baseConstraint.aliasSymbol.getName();

      if (aliasWhitelist.includes(alias)) {
        return {
          params: baseConstraint.aliasTypeArguments
            ? baseConstraint.aliasTypeArguments.map(aliasArg =>
                normaliseType(aliasArg),
              )
            : [],
          alias,
        };
      }
    }

    if (type.isUnion()) {
      return {
        union: true,
        types: type.types.map(unionItem => normaliseType(unionItem)),
      };
    }

    return checker.typeToString(type);
  };

  const getComponentDocs = exp => {
    const propsObj = getComponentPropsType(exp);

    if (!propsObj || !propsObj.valueDeclaration) {
      return {};
    }
    const propsType = checker.getTypeOfSymbolAtLocation(
      propsObj,
      propsObj.valueDeclaration,
    );

    return Object.assign(
      ...propsType.getProperties().map(prop => {
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
            required: !isOptional,
            type: aliasWhitelist.includes(typeAlias)
              ? typeAlias
              : normaliseType(propType, propsObj.valueDeclaration),
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

      const docs = checker
        .getExportsOfModule(moduleSymbol)
        .map(moduleExport => {
          return {
            componentName: moduleExport.escapedName,
            props: getComponentDocs(moduleExport),
          };
        });

      fs.writeFileSync(
        path.join(__dirname, 'spike.json'),
        JSON.stringify(docs, null, 2),
        'utf8',
      );
    }
  }
})();

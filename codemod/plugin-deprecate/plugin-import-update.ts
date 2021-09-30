import { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';

const packageName = 'braid-design-system';

const relocationMap = {
  BraidTestProvider: `${packageName}/test`,
};

export default function (): PluginObj<PluginPass> {
  return {
    pre() {
      // @ts-expect-error
      this.file.metadata.hasChanged = this.file.metadata.hasChanged ?? false;
    },
    visitor: {
      Program: {
        enter(path) {
          const bodyPath = path.get('body');

          for (const statement of bodyPath) {
            if (
              t.isImportDeclaration(statement.node) &&
              /braid-design-system$/.test(statement.node.source.value)
            ) {
              let matchedSpecifier: t.ImportSpecifier = null;
              const relocations = Object.keys(relocationMap);

              statement.node.specifiers = statement.node.specifiers.filter(
                (specifier) => {
                  if (
                    t.isImportSpecifier(specifier) &&
                    t.isIdentifier(specifier.imported) &&
                    relocations.includes(specifier.imported.name)
                  ) {
                    matchedSpecifier = specifier;
                    return false;
                  }
                  return true;
                },
              );

              if (
                matchedSpecifier &&
                t.isIdentifier(matchedSpecifier.imported)
              ) {
                statement.insertAfter(
                  t.importDeclaration(
                    [matchedSpecifier],
                    t.stringLiteral(
                      relocationMap[matchedSpecifier.imported.name],
                    ),
                  ),
                );
                // @ts-expect-error
                this.file.metadata.hasChanged = true;
              }

              if (statement.node.specifiers.length === 0) {
                statement.remove();
              }
            }
          }
        },
      },
    },
  };
}

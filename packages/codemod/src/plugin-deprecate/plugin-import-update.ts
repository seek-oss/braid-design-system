import { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';

const packageName = 'braid-design-system';

const relocationMap = {
  BraidTestProvider: `${packageName}/test`,
} as const;

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
              const relocations = Object.keys(relocationMap);

              statement.node.specifiers = statement.node.specifiers.filter(
                (specifier) => {
                  if (
                    t.isImportSpecifier(specifier) &&
                    t.isIdentifier(specifier.imported) &&
                    relocations.includes(specifier.imported.name)
                  ) {
                    statement.insertAfter(
                      t.importDeclaration(
                        [specifier],
                        t.stringLiteral(
                          relocationMap[
                            specifier.imported
                              .name as keyof typeof relocationMap
                          ],
                        ),
                      ),
                    );
                    // @ts-expect-error
                    this.file.metadata.hasChanged = true;

                    return false;
                  }
                  return true;
                },
              );

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

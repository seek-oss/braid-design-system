import type { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';

const packageName = 'braid-design-system';

const relocationMaps = {
  [`${packageName}$`]: {
    BraidTestProvider: `${packageName}/test`,
  },
  [`${packageName}/lib/playroom/.*`]: {
    FrameComponent: `${packageName}/playroom/FrameComponent`,
    components: `${packageName}/playroom/components`,
    snippets: `${packageName}/playroom/snippets`,
    useScope: `${packageName}/playroom/useScope`,
  },
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

          for (const [matcher, relocationMap] of Object.entries(
            relocationMaps,
          )) {
            for (const statement of bodyPath) {
              if (
                t.isImportDeclaration(statement.node) &&
                new RegExp(matcher).test(statement.node.source.value)
              ) {
                const relocations = Object.keys(relocationMap);

                statement.node.specifiers = statement.node.specifiers.filter(
                  (specifier) => {
                    const rewriteImport = (name: string) => {
                      statement.insertAfter(
                        t.importDeclaration(
                          [specifier],
                          t.stringLiteral(
                            relocationMap[name as keyof typeof relocationMap]!,
                          ),
                        ),
                      );
                      // @ts-expect-error
                      this.file.metadata.hasChanged = true;

                      return false;
                    };

                    if (
                      t.isImportSpecifier(specifier) &&
                      t.isIdentifier(specifier.imported) &&
                      relocations.includes(specifier.imported.name)
                    ) {
                      return rewriteImport(specifier.imported.name);
                    }

                    if (
                      t.isImportDefaultSpecifier(specifier) &&
                      relocations.includes(specifier.local.name)
                    ) {
                      return rewriteImport(specifier.local.name);
                    }

                    return true;
                  },
                );

                if (statement.node.specifiers.length === 0) {
                  statement.remove();
                }
              }
            }
          }
        },
      },
    },
  };
}

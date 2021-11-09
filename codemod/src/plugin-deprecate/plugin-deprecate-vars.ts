import type { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';
import { renderUntraceablePropertyWarning } from '../warning-renderer/warning';
import { deprecationMap } from './deprecationMap';

const walk = ({
  path,
  deprecations,
  code,
  filename,
  metadata,
}: {
  path: NodePath<t.Node> | null;
  deprecations: Record<string, string | Record<string, string>>;
  code: string;
  filename: string;
  metadata: { hasChanged: boolean };
}) => {
  if (path) {
    if (t.isMemberExpression(path.parent)) {
      if (t.isIdentifier(path.parent.property)) {
        const prop = deprecations[path.parent.property.name];
        if (typeof prop === 'object') {
          walk({
            path: path.parentPath,
            deprecations: prop,
            code,
            filename,
            metadata,
          });
        }

        if (typeof prop === 'string') {
          path.parent.property.name = prop;
          metadata.hasChanged = true;
        }
      }

      if (path.parent.computed) {
        if (t.isStringLiteral(path.parent.property)) {
          const prop = deprecations[path.parent.property.value];
          if (typeof prop === 'object') {
            walk({
              path: path.parentPath,
              deprecations: prop,
              code,
              filename,
              metadata,
            });
          }

          if (typeof prop === 'string') {
            path.parent.property.value = prop;
            metadata.hasChanged = true;
          }
        } else {
          renderUntraceablePropertyWarning({
            code,
            propLocation: path.parent.property.loc,
          });
        }
      }
    }
    if (t.isVariableDeclarator(path.parent)) {
      if (t.isIdentifier(path.parent.id)) {
        const binding = path.scope.getBinding(path.parent.id.name);
        if (binding) {
          for (const refPath of binding.referencePaths) {
            walk({ path: refPath, deprecations, code, filename, metadata });
          }
        }
      }
      if (t.isObjectPattern(path.parent.id)) {
        for (const property of path.parent.id.properties) {
          if (t.isObjectProperty(property)) {
            if (
              t.isIdentifier(property.value) &&
              t.isIdentifier(property.key)
            ) {
              const binding = path.scope.getBinding(property.value.name);
              const deprecationValue = deprecations[property.key.name];
              if (typeof deprecationValue === 'string') {
                renderUntraceablePropertyWarning({
                  code,
                  propLocation: property.key.loc,
                });
                throw new Error();
              }

              if (binding && deprecationValue) {
                for (const refPath of binding.referencePaths) {
                  walk({
                    path: refPath,
                    deprecations: deprecationValue,
                    code,
                    filename,
                    metadata,
                  });
                }
              }
            }
          }
          if (t.isRestElement(property)) {
            if (t.isIdentifier(property.argument)) {
              const binding = path.scope.getBinding(property.argument.name);
              if (binding) {
                for (const refPath of binding.referencePaths) {
                  walk({
                    path: refPath,
                    deprecations,
                    code,
                    filename,
                    metadata,
                  });
                }
              }
            }
          }
        }
      }
    }
  }
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
              /braid-design-system(?:\/css)?$/.test(statement.node.source.value)
            ) {
              for (const specifier of statement.node.specifiers) {
                if (
                  t.isImportSpecifier(specifier) &&
                  t.isIdentifier(specifier.imported) &&
                  specifier.imported.name === 'vars'
                ) {
                  const binding = path.scope.getBinding(specifier.local.name);
                  if (!binding) {
                    continue;
                  }

                  for (const refPath of binding.referencePaths) {
                    walk({
                      path: refPath,
                      deprecations: deprecationMap.vars,
                      code: this.file.code,
                      filename: this.filename,
                      // @ts-expect-error
                      metadata: this.file.metadata,
                    });
                  }
                }
              }
            }
          }
        },
      },
    },
  };
}

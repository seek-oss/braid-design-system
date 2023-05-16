import { isBraidImport } from './isBraidImport';
import { type PluginObj, type PluginPass, types as t } from '@babel/core';
import { type DeprecationMap, subVisitor } from './subVisitor';

interface Context extends PluginPass {
  importNames: Map<string, string>;
  namespace: string | null;
  deprecations: DeprecationMap;
}

export default function (): PluginObj<Context> {
  return {
    pre() {
      this.importNames = new Map<string, string>();
      this.namespace = null;
      // @ts-expect-error
      this.file.metadata.warnings = this.file.metadata.warnings ?? [];
      // @ts-expect-error
      this.file.metadata.hasChanged = this.file.metadata.hasChanged ?? false;

      if (!this.opts || !('deprecations' in this.opts)) {
        throw new Error('A map of deprecations must be provided.');
      }

      // @ts-expect-error
      this.deprecations = this.opts.deprecations;
    },
    visitor: {
      Program: {
        enter(path) {
          const bodyPath = path.get('body');

          for (const statement of bodyPath) {
            if (
              t.isImportDeclaration(statement.node) &&
              isBraidImport(statement.node.source.value)
            ) {
              for (const specifier of statement.node.specifiers) {
                if (
                  t.isImportSpecifier(specifier) &&
                  t.isIdentifier(specifier.imported) &&
                  Boolean(this.deprecations[specifier.imported.name])
                ) {
                  this.importNames.set(
                    specifier.local.name,
                    specifier.imported.name,
                  );
                } else if (t.isImportNamespaceSpecifier(specifier)) {
                  this.namespace = specifier.local.name;
                }
              }
            }
          }
        },
      },
      CallExpression(path) {
        if (
          t.isV8IntrinsicIdentifier(path.node.callee) ||
          !t.isIdentifier(path.node.callee)
        ) {
          return;
        }

        const callee = this.importNames.get(path.node.callee.name);
        if (callee) {
          const argumentsValue = path.get('arguments');
          for (const argPath of argumentsValue) {
            if (t.isIdentifier(argPath.node)) {
              const argBinding = path.scope.getBinding(argPath.node.name);
              if (!argBinding) {
                continue;
              }
              argBinding.path.traverse(subVisitor, {
                ...this,
                componentName: callee,
                recurses: 0,
              });
            } else if (t.isObjectExpression(argPath.node)) {
              argPath.traverse(subVisitor, {
                ...this,
                componentName: callee,
                recurses: 0,
              });
            }
          }
        }
      },
    },
  };
}

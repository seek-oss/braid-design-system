import type { PluginObj, PluginPass, Visitor } from '@babel/core';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';
import { renderRecursiveDepthWarning } from '../warning-renderer/warning';
import { deArray } from './helpers';

interface Context extends PluginPass {
  importNames: Map<string, string>;
  namespace: string | null;
  renames: Record<string, Record<string, string>>;
}

interface SubVisitorContext extends Context {
  componentName: string;
  propName?: string;
  propLocation?: t.SourceLocation | null;
  recurses: number;
}
const subVisitor: Visitor<SubVisitorContext> = {
  JSXIdentifier(p) {
    const newValue = this.renames[this.componentName]?.[p.node.name];

    if (Boolean(newValue)) {
      p.node.name = newValue;
      // @ts-expect-error
      this.file.metadata.hasChanged = true;
    }
  },
  StringLiteral(p) {
    const newValue = this.renames[this.componentName]?.[p.node.value];

    if (Boolean(newValue)) {
      if (p.node.extra) {
        Object.keys(p.node.extra).forEach((k) => {
          if (
            p.node.extra &&
            k in p.node.extra &&
            typeof p.node.extra[k] === 'string'
          ) {
            p.node.extra[k] = (p.node.extra[k] as string).replace(
              p.node.value,
              newValue,
            );
          }
        });
      }

      p.node.value = newValue;
      // @ts-expect-error
      this.file.metadata.hasChanged = true;
    }
  },
  JSXAttribute(p) {
    if (
      !(
        typeof p.node.name.name === 'string' &&
        Boolean(this.renames[this.componentName]?.[p.node.name.name])
      )
    ) {
      p.skip();
    }
  },
  Identifier(p) {
    if (this.recurses > 9) {
      // @ts-expect-error
      this.file.metadata.warnings.push(
        renderRecursiveDepthWarning({
          filePath: this.filename,
        }),
      );
      return;
    }

    if (t.isConditionalExpression(p.parent, { test: p.node })) {
      return;
    }

    const identifierName = p.node.name;
    const binding = p.scope.getBinding(identifierName);

    if (binding && t.isVariableDeclarator(binding.path.node)) {
      const initPath = deArray(
        binding.path.get('init'),
      ) as NodePath<t.Expression>;

      initPath.traverse(subVisitor, {
        ...this,
        recurses: this.recurses + 1,
      });

      return;
    }

    if (Boolean(this.renames[this.componentName]?.[p.node.name])) {
      p.node.name = this.renames[this.componentName][p.node.name];
      // @ts-expect-error
      this.file.metadata.hasChanged = true;
    }
  },
};

export default function (): PluginObj<Context> {
  return {
    pre() {
      this.importNames = new Map<string, string>();
      this.namespace = null;
      // @ts-expect-error
      this.file.metadata.warnings = this.file.metadata.warnings ?? [];
      // @ts-expect-error
      this.file.metadata.hasChanged = this.file.metadata.hasChanged ?? false;

      if (!this.opts || !('renames' in this.opts)) {
        throw new Error('A map of renames must be provided.');
      }

      // @ts-expect-error
      this.renames = this.opts.renames ?? {};
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
                  Boolean(this.renames[specifier.imported.name])
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
      JSXOpeningElement(path) {
        let elementName: string | null = null;

        if (t.isJSXMemberExpression(path.node.name)) {
          elementName =
            t.isJSXIdentifier(path.node.name.object) &&
            path.node.name.object.name === this.namespace
              ? path.node.name.property.name
              : null;
        } else if (
          typeof path.node.name.name === 'string' &&
          this.importNames.has(path.node.name.name)
        ) {
          elementName = this.importNames.get(path.node.name.name) || null;
        }

        if (elementName) {
          path.traverse(subVisitor, {
            ...this,
            componentName: elementName,
            recurses: 0,
          });
        }
      },
    },
  };
}

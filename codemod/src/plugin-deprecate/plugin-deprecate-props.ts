import type { PluginObj, PluginPass } from '@babel/core';
import { types as t } from '@babel/core';
import { isComponentDeprecated, isPropDeprecated } from './deprecationMap';
import { subVisitor } from './subVisitor';
import { deArray, StringLiteralPath, updateStringLiteral } from './helpers';

interface Context extends PluginPass {
  importNames: Map<string, string>;
  namespace: string | null;
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
                  isComponentDeprecated(specifier.imported.name)
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
          for (const attr of path.get('attributes')) {
            if (t.isJSXAttribute(attr.node)) {
              if (
                typeof attr.node.name.name !== 'string' ||
                !isPropDeprecated(elementName, attr.node.name.name)
              ) {
                continue;
              }

              const attributeValue = deArray(attr.get('value'));

              if (t.isStringLiteral(attributeValue.node)) {
                updateStringLiteral({
                  path: attributeValue as StringLiteralPath,
                  component: elementName,
                  prop: attr.node.name.name,
                  // @ts-expect-error
                  metadata: this.file.metadata,
                });
              } else {
                attributeValue.traverse(subVisitor, {
                  ...this,
                  componentName: elementName,
                  propName: attr.node.name.name,
                  propLocation: attr.node.loc,
                  recurses: 0,
                });
              }
            } else if (t.isJSXSpreadAttribute(attr.node)) {
              attr.traverse(subVisitor, {
                ...this,
                componentName: elementName,
                recurses: 0,
              });
            }
          }
        }
      },
    },
  };
}

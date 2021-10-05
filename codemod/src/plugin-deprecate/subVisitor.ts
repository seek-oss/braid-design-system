import type { PluginPass, Visitor } from '@babel/core';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';

import {
  renderRecursiveDepthWarning,
  renderUntraceableImportWarning,
  renderUntraceablePropertyWarning,
} from '../warning-renderer/warning';
import {
  getReplacement,
  isComponentDeprecated,
  isPropDeprecated,
} from './deprecationMap';
import { deArray, StringLiteralPath, updateStringLiteral } from './helpers';

interface Context extends PluginPass {
  importNames: Map<string, string>;
  namespace: string | null;
}

interface SubVisitorContext extends Context {
  componentName: string;
  propName?: string;
  propLocation?: t.SourceLocation | null;
  recurses: number;
}

export const subVisitor: Visitor<SubVisitorContext> = {
  TemplateLiteral(path) {
    if (path.node.expressions.length === 0) {
      if (isPropDeprecated(this.componentName, this.propName)) {
        const templateValue = path.node.quasis[0].value;
        const newValue = getReplacement({
          component: this.componentName,
          prop: this.propName,
          value: templateValue.raw,
        });
        if (templateValue.raw !== newValue) {
          templateValue.raw = newValue;
          templateValue.cooked = newValue;
          // @ts-expect-error
          this.file.metadata.hasChanged = true;
        }
      }
    }
  },
  StringLiteral(path) {
    updateStringLiteral({
      path,
      component: this.componentName,
      prop: this.propName,
      // @ts-expect-error
      metadata: this.file.metadata,
    });
  },
  ObjectProperty(path) {
    if (isComponentDeprecated(this.componentName)) {
      if (path.node.computed) {
        if (
          t.isStringLiteral(path.node.key) &&
          isPropDeprecated(this.componentName, path.node.key.value)
        ) {
          path.traverse(subVisitor, {
            ...this,
            propName: path.node.key.value,
            propLocation: path.node.loc,
            recurses: this.recurses + 1,
          });

          return;
        }
        const warningString = renderUntraceablePropertyWarning({
          code: this.file.code,
          componentName: this.componentName,
          propLocation: path.node.key.loc,
        });

        // @ts-expect-error
        this.file.metadata.warnings.push(warningString);
      } else if (
        t.isIdentifier(path.node.key) &&
        isPropDeprecated(this.componentName, path.node.key.name)
      ) {
        path.traverse(subVisitor, {
          ...this,
          propName: path.node.key.name,
          propLocation: path.node.loc,
          recurses: this.recurses + 1,
        });

        return;
      }
    }

    if (!this.propName) {
      path.skip();
    }
  },
  CallExpression(path) {
    path.skip();
  },
  UnaryExpression(path) {
    path.skip();
  },
  BinaryExpression(path) {
    path.skip();
  },
  LogicalExpression(path) {
    path.skip();
  },
  Identifier(path) {
    if (this.recurses > 9) {
      // @ts-expect-error
      this.file.metadata.warnings.push(
        renderRecursiveDepthWarning({
          filePath: this.filename,
        }),
      );
      return;
    }

    if (t.isConditionalExpression(path.parent, { test: path.node })) {
      return;
    }

    const identifierName = path.node.name;
    const binding = path.scope.getBinding(identifierName);

    if (!binding) {
      return;
    }

    if (t.isVariableDeclarator(binding.path.node)) {
      const initPath = deArray(
        binding.path.get('init'),
      ) as NodePath<t.Expression>;

      if (t.isStringLiteral(initPath.node)) {
        updateStringLiteral({
          path: initPath as StringLiteralPath,
          component: this.componentName,
          prop: this.propName,
          // @ts-expect-error
          metadata: this.file.metadata,
        });
      } else {
        initPath.traverse(subVisitor, {
          ...this,
          recurses: this.recurses + 1,
        });
      }
    }

    if (t.isImportSpecifier(binding.path.node)) {
      const bindingPath = binding.path as NodePath<t.ImportSpecifier>;
      const variableName = bindingPath.node.local.name;
      const importLocation = bindingPath.node.loc;
      if (t.isImportDeclaration(bindingPath.parent)) {
        const importSource = bindingPath.parent.source.value;

        const warningString = renderUntraceableImportWarning({
          code: this.file.code,
          componentName: this.componentName,
          propLocation: path.node.loc,
          propName: this.propName,
          importLocation,
          importSource,
          variableName,
        });

        // @ts-expect-error
        this.file.metadata.warnings.push(warningString);
      }
    }
  },
};

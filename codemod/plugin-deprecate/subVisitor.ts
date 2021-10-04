import type { PluginPass, Visitor } from '@babel/core';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';

import {
  renderRecursiveDepthWarning,
  renderUntraceableImportWarning,
  renderUntraceablePropertyWarning,
} from '../warning-renderer/warning';
import { deprecationMap } from './deprecationMap';
import { deArray, updateStringLiteral } from './helpers';

interface Context extends PluginPass {
  importNames: Map<string, string>;
  namespace: string | null;
}

interface SubVisitorContext extends Context {
  componentName: string;
  propName?: string;
  propLocation?: t.SourceLocation;
  recurses: number;
}

export const subVisitor: Visitor<SubVisitorContext> = {
  StringLiteral(path) {
    updateStringLiteral(
      path,
      this.componentName,
      this.propName,
      // @ts-expect-error
      this.file.metadata,
    );
  },
  ObjectProperty(path) {
    const deprecations = deprecationMap[this.componentName];
    if (deprecations) {
      if (path.node.computed) {
        if (
          t.isStringLiteral(path.node.key) &&
          deprecations[path.node.key.value]
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
        deprecations[path.node.key.name]
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
        updateStringLiteral(
          initPath as Parameters<typeof updateStringLiteral>[0],
          this.componentName,
          this.propName,
          // @ts-expect-error
          this.file.metadata,
        );
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

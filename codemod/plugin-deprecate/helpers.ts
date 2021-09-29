import { getReplacement, isDeprecated } from './deprecationMap';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';

type StringLiteralPath = NodePath<t.StringLiteral>;
export const updateStringLiteral = (
  path: StringLiteralPath,
  componentName: string,
  propName: string,
  metadata: { hasChanged: boolean },
) => {
  if (isDeprecated(componentName, propName)) {
    const oldValue = path.node.value;
    const newValue = getReplacement(componentName, propName, path.node.value);
    if (oldValue !== newValue) {
      path.node.value = newValue;
      metadata.hasChanged = true;
    }
  }
};

export const deArray = <T>(input: T | T[]) =>
  Array.isArray(input) ? input[0] : input;

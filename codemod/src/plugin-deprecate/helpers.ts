import { getReplacement, isPropDeprecated } from './deprecationMap';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';

export type StringLiteralPath = NodePath<t.StringLiteral>;
export const updateStringLiteral = ({
  path,
  component,
  prop,
  metadata,
}: {
  path: StringLiteralPath;
  component: string;
  prop?: string;
  metadata: { hasChanged: boolean };
}) => {
  if (isPropDeprecated(component, prop)) {
    const oldValue = path.node.value;
    const newValue = getReplacement({
      component,
      prop,
      value: path.node.value,
    });
    if (oldValue !== newValue) {
      path.node.value = newValue;
      metadata.hasChanged = true;
    }
  }
};

export const deArray = <T>(input: T | T[]) =>
  Array.isArray(input) ? input[0] : input;

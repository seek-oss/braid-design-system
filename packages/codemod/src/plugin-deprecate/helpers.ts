import { DeprecationMap } from './subVisitor';
import { types as t } from '@babel/core';
import type { NodePath } from '@babel/traverse';

export type StringLiteralPath = NodePath<t.StringLiteral>;
export const updateStringLiteral = ({
  deprecations,
  path,
  component,
  prop,
  metadata,
}: {
  deprecations: DeprecationMap;
  path: StringLiteralPath;
  component: string;
  prop?: string;
  metadata: { hasChanged: boolean };
}) => {
  if (prop && Boolean(deprecations?.[component]?.[prop])) {
    const oldValue = path.node.value;

    const currentValue = path.node.value;
    const newValue =
      deprecations[component][prop]?.[currentValue] ?? currentValue;

    if (oldValue !== newValue) {
      path.node.value = newValue;
      metadata.hasChanged = true;
    }
  }
};

export const deArray = <T>(input: T | T[]) =>
  Array.isArray(input) ? input[0] : input;

// Copied and modified from https://github.com/grrowl/react-keyed-flatten-children/blob/0b4fd6dad491905e73551c9d4496198f6b87eb41/index.ts
import type { ReactElement, ReactNode } from 'react';
import { Children, isValidElement, cloneElement } from 'react';
import { isFragment } from 'react-is';

export type ReactChild = ReactElement | string | number;

export default function flattenChildren(
  children: ReactNode,
  depth: number = 0,
  keys: Array<string | number> = [],
): ReactChild[] {
  return Children.toArray(children).reduce(
    (acc: ReactChild[], node, nodeIndex) => {
      if (isFragment(node)) {
        acc.push(
          ...flattenChildren(
            node.props.children,
            depth + 1,
            keys.concat(node.key || nodeIndex),
          ),
        );
      } else if (isValidElement(node)) {
        acc.push(
          cloneElement(node, {
            key: keys.concat(String(node.key)).join('.'),
          }),
        );
      } else if (typeof node === 'string' || typeof node === 'number') {
        acc.push(node);
      }
      return acc;
    },
    [],
  );
}

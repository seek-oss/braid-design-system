import type { FC } from 'react';

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type StackProps, Stack as BraidStack } from './Stack';

export const Stack: FC<StackProps> = ({ space, align, ...restProps }) => (
  <BraidStack
    space={cleanSpaceValue(space) || 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    {...restProps}
  />
);

import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';

import { type StackProps, Stack as BraidStack } from './Stack';

export const Stack = ({ space, align, ...restProps }: StackProps) => (
  <BraidStack
    space={cleanSpaceValue(space) || 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    {...restProps}
  />
);

import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import type { StackProps } from './Stack';
import { Stack as BraidStack, validStackComponents } from './Stack';

export const Stack = ({
  space,
  align,
  component,
  ...restProps
}: StackProps) => (
  <BraidStack
    space={cleanSpaceValue(space)}
    align={typeof align !== 'boolean' ? align : undefined}
    component={
      component && validStackComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);

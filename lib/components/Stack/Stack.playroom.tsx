import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import { Stack as BraidStack, StackProps, validStackComponents } from './Stack';

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

import React from 'react';
import type { StackProps } from './Stack';
import { Stack as BraidStack, validStackComponents } from './Stack';

export const Stack = ({
  space,
  align,
  component,
  ...restProps
}: StackProps) => (
  <BraidStack
    space={typeof space !== 'boolean' ? space : 'none'}
    align={typeof align !== 'boolean' ? align : undefined}
    component={
      component && validStackComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);

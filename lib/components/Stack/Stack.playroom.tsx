import React from 'react';
import { Stack as BraidStack, StackProps, validStackComponents } from './Stack';

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

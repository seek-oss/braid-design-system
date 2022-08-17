import React from 'react';
import { cleanSpaceValue } from '../../playroom/cleanSpaceValue';
import {
  Inline as BraidInline,
  InlineProps,
  validInlineComponents,
} from './Inline';

export const Inline = ({
  space,
  align,
  alignY,
  component,
  ...restProps
}: InlineProps) => (
  <BraidInline
    space={cleanSpaceValue(space)}
    align={typeof align !== 'boolean' ? align : undefined}
    alignY={typeof alignY !== 'boolean' ? alignY : undefined}
    component={
      component && validInlineComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);

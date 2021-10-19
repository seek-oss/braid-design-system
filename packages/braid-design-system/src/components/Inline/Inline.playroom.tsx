import React from 'react';
import type { InlineProps } from './Inline';
import { Inline as BraidInline, validInlineComponents } from './Inline';

export const Inline = ({
  space,
  align,
  alignY,
  component,
  ...restProps
}: InlineProps) => (
  <BraidInline
    space={typeof space !== 'boolean' ? space : 'none'}
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

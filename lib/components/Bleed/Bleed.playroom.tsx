import React from 'react';
import { Bleed as BraidBleed, BleedProps, validBleedComponents } from './Bleed';

export const Bleed = ({ component, ...restProps }: BleedProps) => (
  <BraidBleed
    component={
      component && validBleedComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);

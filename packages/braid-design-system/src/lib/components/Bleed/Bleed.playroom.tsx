import type { FC } from 'react';

import {
  type BleedProps,
  Bleed as BraidBleed,
  validBleedComponents,
} from './Bleed';

export const Bleed: FC<BleedProps> = ({ component, ...restProps }) => (
  <BraidBleed
    component={
      component && validBleedComponents.indexOf(component) > -1
        ? component
        : undefined
    }
    {...restProps}
  />
);

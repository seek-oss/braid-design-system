import { forwardRef } from 'react';

import { type Atoms, atoms } from '../../css/atoms/atoms';

import { type BoxProps, Box as BraidBox } from './Box';

import { sprinkles } from '../../css/atoms/sprinkles.css';

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const sprinklesProps: Record<string, unknown> = {};
  const otherProps: Record<string, unknown> = {};

  for (const key in props) {
    if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
      const value = props[key as keyof typeof props];
      try {
        // Try passing to atoms, if sprinkle property but value is not
        // valid, property will be left out until value is valid.
        atoms({ [key]: value });
        sprinklesProps[key] = value;
      } catch {
        if (key === 'background') {
          if (
            (typeof value === 'string' &&
              /^customDark|customLight$/.test(value)) ||
            (typeof value === 'object' && (value.darkMode || value.lightMode))
          ) {
            sprinklesProps[key] = value;
          }
        }
      }
    } else {
      otherProps[key] = props[key as keyof typeof props];
    }
  }

  return <BraidBox ref={ref} {...sprinklesProps} {...otherProps} />;
});

Box.displayName = 'Box';

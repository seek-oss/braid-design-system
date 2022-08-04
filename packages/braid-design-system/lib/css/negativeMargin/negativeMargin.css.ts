import {
  CSSProperties,
  style,
  StyleRule,
  styleVariants,
} from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { space } from '../atoms/atomicProperties';
import { responsiveStyle } from '../responsiveStyle';
import { breakpoints } from '../breakpoints';

const stylesForBreakpoint = (
  bp: keyof typeof breakpoints,
  property: keyof CSSProperties,
  mapToStyle?: (rule: StyleRule) => StyleRule,
) =>
  styleVariants(space, (value) => {
    const styleRule = {
      [property]: value ? calc.negate(value) : 0,
    };

    return responsiveStyle({
      [bp]: mapToStyle ? mapToStyle(styleRule) : styleRule,
    });
  });

const beforePseudo = (rule: StyleRule) => ({
  '::before': rule,
});
const afterPseudo = (rule: StyleRule) => ({
  '::after': rule,
});

export const preventCollapsePseudo = {
  top: style(beforePseudo({ content: '""', display: 'table' })),
  bottom: style(afterPseudo({ content: '""', display: 'table' })),
};

// Applying negative `marginBottom` to the before pseudo element to bleed up
export const top = {
  mobile: stylesForBreakpoint('mobile', 'marginBottom', beforePseudo),
  tablet: stylesForBreakpoint('tablet', 'marginBottom', beforePseudo),
  desktop: stylesForBreakpoint('desktop', 'marginBottom', beforePseudo),
  wide: stylesForBreakpoint('wide', 'marginBottom', beforePseudo),
};

// Applying negative `marginTop` to the after pseudo element to bleed down
export const bottom = {
  mobile: stylesForBreakpoint('mobile', 'marginTop', afterPseudo),
  tablet: stylesForBreakpoint('tablet', 'marginTop', afterPseudo),
  desktop: stylesForBreakpoint('desktop', 'marginTop', afterPseudo),
  wide: stylesForBreakpoint('wide', 'marginTop', afterPseudo),
};

export const left = {
  mobile: stylesForBreakpoint('mobile', 'marginLeft'),
  tablet: stylesForBreakpoint('tablet', 'marginLeft'),
  desktop: stylesForBreakpoint('desktop', 'marginLeft'),
  wide: stylesForBreakpoint('wide', 'marginLeft'),
};

export const right = {
  mobile: stylesForBreakpoint('mobile', 'marginRight'),
  tablet: stylesForBreakpoint('tablet', 'marginRight'),
  desktop: stylesForBreakpoint('desktop', 'marginRight'),
  wide: stylesForBreakpoint('wide', 'marginRight'),
};

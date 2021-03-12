import { style } from '@mattsjones/css-core';
import {
  divide,
  negate,
  responsiveStyle,
  subtract,
} from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const outer = style(
  responsiveStyle({
    mobile: { height: themeVars.typography.text.xsmall.mobile.leading },
    tablet: { height: themeVars.typography.text.xsmall.tablet.leading },
  }),
);

type TextBreakpoint = keyof typeof themeVars.typography.text.small;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { leading, capHeight } = themeVars.typography.text.small[breakpoint];
  const padding = subtract(leading, capHeight);

  return { margin: `${negate(divide(padding, 2))} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

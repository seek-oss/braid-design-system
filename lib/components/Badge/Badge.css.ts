import { style } from '@mattsjones/css-core';
import {
  divide,
  negate,
  responsiveStyle,
  subtract,
  theme,
} from '../../themes/apac/nextTheme.css';

export const outer = style(
  responsiveStyle({
    mobile: { height: theme.typography.text.xsmall.mobile.leading },
    tablet: { height: theme.typography.text.xsmall.tablet.leading },
  }),
);

type TextBreakpoint = keyof typeof theme.typography.text.small;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { leading, capHeight } = theme.typography.text.small[breakpoint];
  const padding = subtract(leading, capHeight);

  return { margin: `${negate(divide(padding, 2))} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const calculateForBreakpoint = (
  breakpoint: keyof typeof themeVars.typography.text.standard,
) => {
  const type = themeVars.typography.text.standard[breakpoint];
  const padding = calc(type.leading)
    .subtract(type.capHeight)
    .divide(2)
    .multiply('1px')
    .toString();

  return {
    paddingTop: padding,
    paddingBottom: padding,
  };
};

export const size = {
  standard: style(
    responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet'),
    }),
  ),
};

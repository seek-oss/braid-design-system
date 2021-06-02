import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { themeVars } from '../../themes/themeVars.css';

const calculateForBreakpoint = (
  breakpoint: keyof typeof themeVars.private.textSize.standard,
) => {
  const type = themeVars.private.textSize.standard[breakpoint];
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

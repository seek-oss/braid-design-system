import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from './responsiveStyle';
import { vars } from '../themes/vars.css';

const calculateForBreakpoint = (
  breakpoint: keyof typeof vars.textSize.standard,
) => {
  const type = vars.textSize.standard[breakpoint];
  const padding = calc(type.lineHeight)
    .subtract(type.capHeight)
    .divide(2)
    .toString();

  return {
    paddingTop: padding,
    paddingBottom: padding,
  };
};

export const textAlignedToIcon = {
  standard: style(
    responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet'),
    }),
  ),
};

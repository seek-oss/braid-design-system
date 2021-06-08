import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const outer = style(
  responsiveStyle({
    mobile: { height: vars.textSize.xsmall.mobile.lineHeight },
    tablet: { height: vars.textSize.xsmall.tablet.lineHeight },
  }),
);

type TextBreakpoint = keyof typeof vars.textSize.small;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { lineHeight, capHeight } = vars.textSize.small[breakpoint];
  const padding = calc.subtract(lineHeight, capHeight);

  return { margin: `${calc(padding).divide(2).negate()} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

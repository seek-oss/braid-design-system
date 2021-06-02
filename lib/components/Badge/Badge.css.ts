import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { vars } from '../../themes/vars.css';

export const outer = style(
  responsiveStyle({
    mobile: { height: vars.textSize.xsmall.mobile.leading },
    tablet: { height: vars.textSize.xsmall.tablet.leading },
  }),
);

type TextBreakpoint = keyof typeof vars.textSize.small;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { leading, capHeight } = vars.textSize.small[breakpoint];
  const padding = calc.subtract(leading, capHeight);

  return { margin: `${calc(padding).divide(2).negate().multiply('1px')} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

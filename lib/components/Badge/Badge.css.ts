import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { themeVars } from '../../themes/themeVars.css';

export const outer = style(
  responsiveStyle({
    mobile: { height: themeVars.private.textSize.xsmall.mobile.leading },
    tablet: { height: themeVars.private.textSize.xsmall.tablet.leading },
  }),
);

type TextBreakpoint = keyof typeof themeVars.private.textSize.small;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { leading, capHeight } = themeVars.private.textSize.small[breakpoint];
  const padding = calc.subtract(leading, capHeight);

  return { margin: `${calc(padding).divide(2).negate().multiply('1px')} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

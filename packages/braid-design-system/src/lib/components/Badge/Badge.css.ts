import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const constants = {
  textSize: 'xsmall',
} as const;

type TextBreakpoint = keyof typeof vars.textSize.xsmall;

const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
  const { lineHeight, capHeight } =
    vars.textSize[constants.textSize][breakpoint];
  const padding = calc.subtract(lineHeight, capHeight);

  return { margin: `${calc(padding).divide(2).negate()} 0` };
};

export const bleedY = style(
  responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  }),
);

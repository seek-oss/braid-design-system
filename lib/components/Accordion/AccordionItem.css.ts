import { responsiveStyle } from './../../css/responsiveStyle';
import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { vars } from '../../themes/vars.css';

export const button = style({});

export const focusRing = style({
  top: calc.negate(vars.space.xsmall),
  bottom: calc.negate(vars.space.xsmall),
  left: calc.negate(vars.space.xxsmall),
  right: calc.negate(vars.space.xxsmall),
  selectors: {
    [`${button}:focus ~ &`]: {
      opacity: 1,
    },
  },
});

const calculateForBreakpoint = (
  textDefinition: typeof vars.textSize[keyof typeof vars.textSize],
  breakpoint: keyof typeof vars.textSize.standard,
) => {
  const { lineHeight, capHeight } = textDefinition[breakpoint];
  const offset = calc(calc(lineHeight).subtract(capHeight))
    .divide(2)
    .negate()
    .toString();

  return {
    marginTop: offset,
    marginBottom: offset,
  };
};

export const iconContainer = styleVariants(vars.textSize, (textDefinition) =>
  responsiveStyle({
    mobile: calculateForBreakpoint(textDefinition, 'mobile'),
    tablet: calculateForBreakpoint(textDefinition, 'tablet'),
  }),
);

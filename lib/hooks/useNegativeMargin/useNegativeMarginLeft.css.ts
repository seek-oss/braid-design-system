import { styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { themeVars } from '../../themes/themeVars.css';

const { space } = themeVars;

const negativeMarginLeft = (spaceValue: string | number) => ({
  marginLeft: spaceValue ? calc.negate(spaceValue) : 0,
});

export const mobile = styleVariants({ none: 0, ...space }, (value) =>
  negativeMarginLeft(value),
);

export const tablet = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginLeft(value),
  }),
);

export const desktop = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginLeft(value),
  }),
);

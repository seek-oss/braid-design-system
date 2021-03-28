import { mapToStyles } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const { space } = themeVars;

const negativeMarginLeft = (spaceValue: string | number) => ({
  marginLeft: calc.negate(spaceValue),
});

export const mobile = mapToStyles({ none: 0, ...space }, (value) =>
  negativeMarginLeft(value),
);

export const tablet = mapToStyles({ none: 0, ...space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginLeft(value),
  }),
);

export const desktop = mapToStyles({ none: 0, ...space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginLeft(value),
  }),
);

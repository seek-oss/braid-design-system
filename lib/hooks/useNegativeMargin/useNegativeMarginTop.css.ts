import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { themeVars } from '../../themes/themeVars.css';

const { space } = themeVars;

const negativeMarginTop = (spaceValue: string | number) => ({
  ':before': {
    marginBottom: spaceValue ? calc.negate(spaceValue) : 0,
  },
});

export const base = style({
  ':before': { content: '""', display: 'table' },
});

export const mobile = styleVariants({ none: 0, ...space }, (value) =>
  negativeMarginTop(value),
);

export const tablet = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginTop(value),
  }),
);

export const desktop = styleVariants({ none: 0, ...space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginTop(value),
  }),
);

import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const preventCollapse = '1px';

const { space } = themeVars;

const negativeMarginTop = (spaceValue: string | number) => ({
  ':before': {
    marginTop: calc.subtract(calc.negate(spaceValue), preventCollapse),
  },
});

export const base = style({
  paddingTop: preventCollapse,
  ':before': { content: '""', display: 'block' },
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

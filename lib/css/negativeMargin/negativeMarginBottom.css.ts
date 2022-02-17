import { style, styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../responsiveStyle';
import { vars } from '../../themes/vars.css';

const negativeMarginBottom = (spaceValue: string | number) => ({
  ':after': {
    marginTop: spaceValue ? calc.negate(spaceValue) : 0,
  },
});

export const base = style({
  ':after': { content: '""', display: 'table' },
});

export const mobile = styleVariants({ none: 0, ...vars.space }, (value) =>
  negativeMarginBottom(value),
);

export const tablet = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginBottom(value),
  }),
);

export const desktop = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginBottom(value),
  }),
);

export const wide = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    wide: negativeMarginBottom(value),
  }),
);

import { styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../responsiveStyle';
import { vars } from '../../themes/vars.css';

const negativeMarginRight = (spaceValue: string | number) => ({
  marginRight: spaceValue ? calc.negate(spaceValue) : 0,
});

export const mobile = styleVariants({ none: 0, ...vars.space }, (value) =>
  negativeMarginRight(value),
);

export const tablet = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginRight(value),
  }),
);

export const desktop = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginRight(value),
  }),
);

export const wide = styleVariants({ none: 0, ...vars.space }, (value) =>
  responsiveStyle({
    wide: negativeMarginRight(value),
  }),
);

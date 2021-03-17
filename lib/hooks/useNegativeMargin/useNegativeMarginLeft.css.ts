import { mapToStyles } from '@mattsjones/css-core';
import { negate } from '@mattsjones/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const { space } = themeVars;

const negativeMarginLeft = (spaceValue: string | number) => ({
  marginLeft: negate(spaceValue),
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

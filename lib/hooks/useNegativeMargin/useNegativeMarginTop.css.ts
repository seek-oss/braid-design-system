import { style, mapToStyles } from '@mattsjones/css-core';
import { negate, subtract } from '@mattsjones/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const preventCollapse = '1px';

const { space } = themeVars;

const negativeMarginTop = (spaceValue: string | number) => ({
  ':before': { marginTop: subtract(negate(spaceValue), preventCollapse) },
});

export const base = style({
  paddingTop: preventCollapse,
  ':before': { content: '""', display: 'block' },
});

export const mobile = mapToStyles({ none: 0, ...space }, (value) =>
  negativeMarginTop(value),
);

export const tablet = mapToStyles({ none: 0, ...space }, (value) =>
  responsiveStyle({
    tablet: negativeMarginTop(value),
  }),
);

export const desktop = mapToStyles({ none: 0, ...space }, (value) =>
  responsiveStyle({
    desktop: negativeMarginTop(value),
  }),
);

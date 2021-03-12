import { style } from '@mattsjones/css-core';
import { mapValues } from 'lodash';

import {
  styleMap,
  subtract,
  negate,
  responsiveStyle,
} from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const preventCollapse = 1;

const { space } = themeVars;

const negativeMarginTop = (spaceValue: string | number) => ({
  ':before': { marginTop: negate(subtract(spaceValue, preventCollapse)) },
});

export const base = style({
  paddingTop: preventCollapse,
  ':before': { content: '""', display: 'block' },
});

export const mobile = styleMap(
  mapValues({ none: 0, ...space }, (value) => negativeMarginTop(value)),
);

export const tablet = styleMap(
  mapValues({ none: 0, ...space }, (value) =>
    responsiveStyle({
      tablet: negativeMarginTop(value),
    }),
  ),
);

export const desktop = styleMap(
  mapValues({ none: 0, ...space }, (value) =>
    responsiveStyle({
      desktop: negativeMarginTop(value),
    }),
  ),
);

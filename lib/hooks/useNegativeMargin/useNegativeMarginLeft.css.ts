import { mapValues } from 'lodash';

import { styleMap, negate, responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

const { space } = themeVars;

const negativeMarginLeft = (spaceValue: string | number) => ({
  marginLeft: negate(spaceValue),
});

export const mobile = styleMap(
  mapValues({ none: 0, ...space }, (value) => negativeMarginLeft(value)),
);

export const tablet = styleMap(
  mapValues({ none: 0, ...space }, (value) =>
    responsiveStyle({
      tablet: negativeMarginLeft(value),
    }),
  ),
);

export const desktop = styleMap(
  mapValues({ none: 0, ...space }, (value) =>
    responsiveStyle({
      desktop: negativeMarginLeft(value),
    }),
  ),
);

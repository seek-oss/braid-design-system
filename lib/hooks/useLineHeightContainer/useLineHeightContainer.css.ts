import { mapToStyles } from '@mattsjones/css-core';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const size = mapToStyles(
  themeVars.typography.text,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: { height: mobile.leading },
      tablet: { height: tablet.leading },
    }),
);

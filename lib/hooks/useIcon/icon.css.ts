import { style, mapToStyles } from '@mattsjones/css-core';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const size = style({
  width: '1em',
  height: '1em',
});

export const inline = style({
  verticalAlign: 'middle',
});

const uppercaseNudge = -0.105;
const lowercaseNudge = uppercaseNudge + 0.04;
const verticalCorrection = 0.06;
export const alignY = {
  uppercase: mapToStyles({
    none: { top: `${uppercaseNudge}em` },
    up: { top: `${uppercaseNudge - verticalCorrection}em` },
    down: { top: `${uppercaseNudge + verticalCorrection}em` },
  }),
  lowercase: mapToStyles({
    none: { top: `${lowercaseNudge}em` },
    up: { top: `${lowercaseNudge - verticalCorrection}em` },
    down: { top: `${lowercaseNudge + verticalCorrection}em` },
  }),
};

export const blockWidths = mapToStyles(
  themeVars.typography.text,
  ({ mobile, tablet }) =>
    responsiveStyle({
      mobile: { width: mobile.leading },
      tablet: { width: tablet.leading },
    }),
);

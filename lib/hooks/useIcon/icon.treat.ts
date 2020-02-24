import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';

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
  uppercase: styleMap({
    none: { top: `${uppercaseNudge}em` },
    up: { top: `${uppercaseNudge - verticalCorrection}em` },
    down: { top: `${uppercaseNudge + verticalCorrection}em` },
  }),
  lowercase: styleMap({
    none: { top: `${lowercaseNudge}em` },
    up: { top: `${lowercaseNudge - verticalCorrection}em` },
    down: { top: `${lowercaseNudge + verticalCorrection}em` },
  }),
};

export const blockWidths = styleMap(({ utils, grid, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: { width: grid * mobile.rows },
      tablet: { width: grid * tablet.rows },
    }),
  ),
);

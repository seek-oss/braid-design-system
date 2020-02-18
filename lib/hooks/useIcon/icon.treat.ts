import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';

export const size = style({
  width: '1em',
  height: '1em',
});

export const inline = style({
  verticalAlign: 'middle',
});

const baseNudge = -0.105;
const stepNudge = 0.06;
export const inlineNudge = styleMap({
  none: { top: `${baseNudge}em` },
  up: { top: `${baseNudge - stepNudge}em` },
  down: { top: `${baseNudge + stepNudge}em` },
});

export const inlineLowercase = style({
  transform: 'translateY(.04em)',
});

export const blockWidths = styleMap(({ utils, grid, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: { width: grid * mobile.rows },
      tablet: { width: grid * tablet.rows },
    }),
  ),
);

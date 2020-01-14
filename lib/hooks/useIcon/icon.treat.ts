import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';

export const size = style({
  width: '1em',
  height: '1em',
});

export const inline = style({
  verticalAlign: 'middle',
  top: '-0.105em', // Arbitrary magic number, to vertically align to text
});

export const blockWidths = styleMap(({ utils, grid, typography }) =>
  mapValues(typography.text, ({ mobile, tablet }) =>
    utils.responsiveStyle({
      mobile: { width: grid * mobile.rows },
      tablet: { width: grid * tablet.rows },
    }),
  ),
);

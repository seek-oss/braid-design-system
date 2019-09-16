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

const makeSizeRules = (x: number) => ({ width: x, height: x });

export const blockSizes = styleMap(({ utils, typography }) =>
  mapValues(typography.text, ({ mobile, desktop }) =>
    utils.responsiveStyles(
      makeSizeRules(utils.rows(mobile.rows)),
      makeSizeRules(utils.rows(desktop.rows)),
    ),
  ),
);

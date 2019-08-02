import { style, styleMap } from 'sku/treat';
import mapValues from 'lodash/mapValues';

export const inline = style({
  verticalAlign: 'middle',
  top: '-0.105em', // Arbitrary magic number, to vertically align to text
});

export const fullHeight = style({
  height: '100%',
});

const makeSizeRules = (size: number) => ({ width: size, height: size });

export const inlineSizes = styleMap(({ utils, typography }) =>
  mapValues(typography.text, ({ mobile, desktop }) =>
    utils.responsiveStyles(
      makeSizeRules(mobile.size),
      makeSizeRules(desktop.size),
    ),
  ),
);

export const blockSizes = styleMap(({ utils, typography }) =>
  mapValues(typography.text, ({ mobile, desktop }) =>
    utils.responsiveStyles(
      makeSizeRules(utils.rows(mobile.rows)),
      makeSizeRules(utils.rows(desktop.rows)),
    ),
  ),
);

export const currentColor = style({ fill: 'currentColor' });

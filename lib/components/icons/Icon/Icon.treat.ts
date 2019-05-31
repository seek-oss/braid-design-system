import { style, css } from 'sku/treat';

export const inline = style({
  verticalAlign: 'middle',
  position: 'relative',
  top: '-0.105em', // Arbitrary magic number, to vertically align to text
});

export const fullHeight = style({
  height: '100%',
});

const makeSizeRules = (size: number) => ({ width: size, height: size });

export const inlineSizes = css(theme => {
  const { responsiveStyles } = theme.utils;
  const { standard, large } = theme.typography.text;

  return {
    standard: responsiveStyles(
      makeSizeRules(standard.mobile.size),
      makeSizeRules(standard.desktop.size),
    ),
    large: responsiveStyles(
      makeSizeRules(large.mobile.size),
      makeSizeRules(large.desktop.size),
    ),
  };
});

export const blockSizes = css(theme => {
  const { responsiveStyles, rows } = theme.utils;
  const { standard, large } = theme.typography.text;

  return {
    standard: responsiveStyles(
      makeSizeRules(rows(standard.mobile.rows)),
      makeSizeRules(rows(standard.desktop.rows)),
    ),
    large: responsiveStyles(
      makeSizeRules(rows(large.mobile.rows)),
      makeSizeRules(rows(large.desktop.rows)),
    ),
  };
});

export const currentColor = style({ fill: 'currentColor' });

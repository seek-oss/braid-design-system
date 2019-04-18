import { style, css, Styles } from 'sku/treat';

export const inline = style({
  verticalAlign: 'middle',
  position: 'relative',
  top: '-0.105em', // Arbitrary magic number, to vertically align to text
});

export const fill = style({
  height: '100%',
});

const makeSizeRules = (
  breakpoint: number,
  mobileSize: number,
  desktopSize: number,
): Styles => ({
  width: mobileSize,
  height: mobileSize,
  ...(mobileSize === desktopSize
    ? null
    : {
        '@media': {
          [`screen and (min-width: ${breakpoint}px)`]: {
            width: desktopSize,
            height: desktopSize,
          },
        },
      }),
});

export const inlineSizes = css(({ tokens }) => ({
  standard: makeSizeRules(
    tokens.responsiveBreakpoint,
    tokens.text.standard.mobile.size,
    tokens.text.standard.desktop.size,
  ),
  large: makeSizeRules(
    tokens.responsiveBreakpoint,
    tokens.text.large.mobile.size,
    tokens.text.large.desktop.size,
  ),
}));

export const blockSizes = css(({ tokens }) => {
  const rows = (count: number) => tokens.rowHeight * count;

  return {
    standard: makeSizeRules(
      tokens.responsiveBreakpoint,
      rows(tokens.text.standard.mobile.rows),
      rows(tokens.text.standard.desktop.rows),
    ),
    large: makeSizeRules(
      tokens.responsiveBreakpoint,
      rows(tokens.text.large.mobile.rows),
      rows(tokens.text.large.desktop.rows),
    ),
  };
});

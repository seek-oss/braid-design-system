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

export const inlineSizes = css(({ tokens }) => {
  const standardMobile = tokens.text.standard.mobile.size;
  const standardDesktop = tokens.text.standard.desktop.size;

  const largeMobile = tokens.text.large.mobile.size;
  const largeDesktop = tokens.text.large.desktop.size;

  return {
    standard: makeSizeRules(
      tokens.responsiveBreakpoint,
      standardMobile,
      standardDesktop,
    ),
    large: makeSizeRules(
      tokens.responsiveBreakpoint,
      largeMobile,
      largeDesktop,
    ),
  };
});

export const blockSizes = css(({ tokens }) => {
  const rows = (count: number) => tokens.rowHeight * count;
  const standardMobile = rows(tokens.text.standard.mobile.rows);
  const standardDesktop = rows(tokens.text.standard.desktop.rows);
  const largeMobile = rows(tokens.text.large.mobile.rows);
  const largeDesktop = rows(tokens.text.large.desktop.rows);

  return {
    standard: makeSizeRules(
      tokens.responsiveBreakpoint,
      standardMobile,
      standardDesktop,
    ),
    large: makeSizeRules(
      tokens.responsiveBreakpoint,
      largeMobile,
      largeDesktop,
    ),
  };
});

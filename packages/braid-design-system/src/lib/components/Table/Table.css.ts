import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
import { colorModeStyle } from '../../css/colorModeStyle';
import { atoms } from '../../css/atoms/atoms';
import { responsiveStyle } from '../../css/responsiveStyle';

// TABLE WRAPPER
const scrollOverlayWidth = createVar();
export const tableContainer = style([
  atoms({ position: 'relative' }),
  {
    vars: {
      [scrollOverlayWidth]: '80px',
    },
    WebkitOverflowScrolling: 'touch',
    overflowX: 'auto',
    overflowY: 'hidden',
    scrollbarWidth: 'none',
    '::-webkit-scrollbar': {
      width: 0,
      height: 0,
    },
  },
]);

export const maskLeft = style({
  maskImage: `linear-gradient(90deg, rgba(0,0,0,0) 0, rgba(0,0,0,1) ${scrollOverlayWidth})`,
});

export const maskRight = style({
  maskImage: `linear-gradient(90deg, rgba(0,0,0,1) calc(100% - ${scrollOverlayWidth}), rgba(0,0,0,0) 100%)`,
});

export const maskBoth = style({
  maskImage: `linear-gradient(90deg, rgba(0,0,0,0) 0, rgba(0,0,0,1) ${scrollOverlayWidth}, rgba(0,0,0,1) calc(100% - ${scrollOverlayWidth}), rgba(0,0,0,0) 100%)`,
});

// TABLE
const borderColor = createVar();
const borderWidth = createVar();
export const table = style([
  {
    vars: {
      // [borderWidth]: '1px',
      [borderWidth]: vars.borderWidth.standard,
    },
    borderCollapse: 'separate',
    border: `${borderWidth} solid ${borderColor}`,
    fontVariantNumeric: 'tabular-nums',
    wordBreak: 'break-word',
  },
  colorModeStyle({
    lightMode: {
      vars: {
        [borderColor]: vars.borderColor.neutralLight,
      },
    },
    darkMode: {
      vars: {
        [borderColor]: vars.borderColor.neutral,
      },
    },
  }),
]);

export const fullBleed = style({});
globalStyle(
  [
    `${fullBleed} > tbody > tr > *:first-of-type`,
    `${fullBleed} > thead > tr > *:first-of-type`,
  ].join(', '),
  {
    paddingLeft: vars.space.gutter,
  },
);
globalStyle(
  [
    `${fullBleed} > tbody > tr > *:last-of-type`,
    `${fullBleed} > thead > tr > *:last-of-type`,
  ].join(', '),
  {
    paddingRight: vars.space.gutter,
  },
);

// export const noSideBorders = style({
//   borderLeftColor: 'transparent',
//   borderRightColor: 'transparent',
// });

// TABLE HEADER
export const tableHeaderRounding = style({});
// globalStyle(`${tableHeaderRounding} > tr > th:first-of-type`, {
//   borderTopLeftRadius: vars.borderRadius.large,
// });
// globalStyle(`${tableHeaderRounding} > tr > th:last-of-type`, {
//   borderTopRightRadius: vars.borderRadius.large,
// });

// TABLE CELLS
export const alignYCenter = style({
  verticalAlign: 'middle',
});

export const nowrap = style({
  whiteSpace: 'nowrap',
});

export const softWidthVar = createVar();
export const softWidth = style({
  width: softWidthVar,
});

export const minWidthVar = createVar();
export const minWidth = style({
  minWidth: minWidthVar,
});

export const maxWidthVar = createVar();
export const maxWidth = style({
  maxWidth: maxWidthVar,
});

export const borderBottom = style({
  borderBottom: `${borderWidth} solid ${borderColor}`,
});
// No border on bottom of last row (table border is used instead)
globalStyle(`${table} > tbody > tr:last-of-type > *`, {
  borderBottom: 0,
});

export const showOnTablet = style(
  responsiveStyle({ tablet: { display: 'table-cell' } }),
);
export const showOnDesktop = style(
  responsiveStyle({ desktop: { display: 'table-cell' } }),
);
export const showOnWide = style(
  responsiveStyle({ wide: { display: 'table-cell' } }),
);

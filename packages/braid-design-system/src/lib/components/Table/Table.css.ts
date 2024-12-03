import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
import { colorModeStyle } from '../../css/colorModeStyle';
import { responsiveStyle } from '../../css/responsiveStyle';

// TABLE
const borderColor = createVar();
const sectionBorderWidth = createVar();
export const table = style([
  {
    vars: {
      // [borderWidth]: '1px',
      [sectionBorderWidth]: vars.borderWidth.standard,
    },
    borderCollapse: 'separate',
    border: `${sectionBorderWidth} solid ${borderColor}`,
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

export const headerCellBorder = style({});
globalStyle(`${table} > thead > tr:last-child > ${headerCellBorder}`, {
  borderBottom: `${sectionBorderWidth} solid ${borderColor}`,
});

export const bodyCellBorder = style({});
// Apply border on bottom of all cells except last row of a table section
globalStyle(`${table} > * > tr:not(:last-child) > *`, {
  borderBottom: `1px solid ${borderColor}`,
});

export const footerCellBorder = style({});
// Apply heavier section border between footer and body sections
globalStyle(`${table} > tfoot > tr:first-child > ${footerCellBorder}`, {
  borderTop: `${sectionBorderWidth} solid ${borderColor}`,
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

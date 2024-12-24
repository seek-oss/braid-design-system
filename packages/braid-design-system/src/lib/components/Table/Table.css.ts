import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '../../themes/vars.css';
import { colorModeStyle } from '../../css/colorModeStyle';
import { responsiveStyle } from '../../css/responsiveStyle';

const borderColor = createVar();
const sectionBorder = `${vars.borderWidth.standard} solid ${borderColor}`;
const innerBorder = `1px solid ${borderColor}`;
export const table = style([
  {
    borderCollapse: 'separate',
    border: sectionBorder,
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

export const tableHeader = style({});
export const tableSection = style({});

export const row = style({});

export const cell = style({});
export const headCell = style({});
// Apply finer border between rows within a table section
globalStyle(`${row}:not(:last-child) > ${cell}`, {
  borderBottom: innerBorder,
});

// Apply fine vertical border between header cells and regular cells
globalStyle(
  `${tableSection}:not(${tableHeader}) > ${row} > ${headCell}:not(:first-child)`,
  {
    borderLeft: innerBorder,
  },
);
globalStyle(
  `${tableSection}:not(${tableHeader}) > ${row} > ${headCell}:not(:last-child)`,
  {
    borderRight: innerBorder,
  },
);

// Apply heavier border between table sections
globalStyle(
  `${tableSection}:not(:first-child) > ${row}:first-child > ${cell}`,
  {
    borderTop: sectionBorder,
  },
);

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

export const showOnTablet = style(
  responsiveStyle({ tablet: { display: 'table-cell' } }),
);
export const showOnDesktop = style(
  responsiveStyle({ desktop: { display: 'table-cell' } }),
);
export const showOnWide = style(
  responsiveStyle({ wide: { display: 'table-cell' } }),
);

import { style } from 'sku/treat';

export const chevron = style(({ touchableRows, rowHeight }) => ({
  position: 'absolute',
  pointerEvents: 'none',
  top: 0,
  right: 0,
  alignItems: 'center',
  height: touchableRows * rowHeight,
}));

export const field = style(({ spacing, columnWidth, text }) => ({
  paddingRight:
    spacing.column.small * columnWidth * 2 + text.standard.mobile.size,
}));

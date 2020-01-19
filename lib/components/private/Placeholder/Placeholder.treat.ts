import { styleMap } from 'sku/treat';

const lightTheme = {
  background: 'hsla(0, 0%, 20%, 0.08)',
  borderColor: 'hsla(0, 0%, 20%, 0.3)',
  labelColor: 'hsla(0, 0%, 20%, 0.4)',
  lineColor: 'hsla(0, 0%, 20%, 0.1)',
} as const;

const darkTheme = {
  background: 'hsla(0, 0%, 100%, 0.35)',
  borderColor: 'hsla(0, 0%, 100%, 0.8)',
  labelColor: 'hsla(0, 0%, 100%, 0.8)',
  lineColor: 'hsla(0, 0%, 100%, 0.4)',
} as const;

const borderWidth = '2px';

export const box = styleMap({
  light: {
    background: lightTheme.background,
    border: `${borderWidth} solid ${lightTheme.borderColor}`,
  },
  dark: {
    background: darkTheme.background,
    border: `${borderWidth} solid ${darkTheme.borderColor}`,
  },
});

export const label = styleMap({
  light: { color: lightTheme.labelColor },
  dark: { color: darkTheme.labelColor },
});

export const line = styleMap({
  light: { strokeWidth: borderWidth, stroke: lightTheme.lineColor },
  dark: { strokeWidth: borderWidth, stroke: darkTheme.lineColor },
});

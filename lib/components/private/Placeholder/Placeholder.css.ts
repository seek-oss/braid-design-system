import { createTheme, style } from '@vanilla-extract/css';

export const [lightTheme, themeVars] = createTheme({
  background: 'hsla(0, 0%, 20%, 0.08)',
  borderColor: 'hsla(0, 0%, 20%, 0.3)',
  labelColor: 'hsla(0, 0%, 20%, 0.4)',
  lineColor: 'hsla(0, 0%, 20%, 0.1)',
});

export const darkTheme = createTheme(themeVars, {
  background: 'hsla(0, 0%, 100%, 0.35)',
  borderColor: 'hsla(0, 0%, 100%, 0.8)',
  labelColor: 'hsla(0, 0%, 100%, 0.8)',
  lineColor: 'hsla(0, 0%, 100%, 0.4)',
});

const borderWidth = '2px';

export const box = style({
  background: themeVars.background,
  border: `${borderWidth} solid ${themeVars.borderColor}`,
});

export const label = style({ color: themeVars.labelColor });

export const line = style({
  strokeWidth: borderWidth,
  stroke: themeVars.lineColor,
});

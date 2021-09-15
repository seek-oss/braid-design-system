import { createTheme, style } from '@vanilla-extract/css';

export const [lightTheme, vars] = createTheme(
  {
    background: 'hsla(0, 0%, 20%, 0.08)',
    borderColor: 'hsla(0, 0%, 20%, 0.3)',
    labelColor: 'hsla(0, 0%, 20%, 0.4)',
    lineColor: 'hsla(0, 0%, 20%, 0.1)',
  },
  'lightTheme',
);

export const darkTheme = createTheme(vars, {
  background: 'hsla(0, 0%, 100%, 0.35)',
  borderColor: 'hsla(0, 0%, 100%, 0.8)',
  labelColor: 'hsla(0, 0%, 100%, 0.8)',
  lineColor: 'hsla(0, 0%, 100%, 0.4)',
});

const borderWidth = '2px';

export const box = style({
  background: vars.background,
  border: `${borderWidth} solid ${vars.borderColor}`,
});

export const label = style({ color: vars.labelColor });

export const line = style({
  strokeWidth: borderWidth,
  stroke: vars.lineColor,
});

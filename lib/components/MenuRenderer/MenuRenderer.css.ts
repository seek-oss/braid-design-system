import { style } from '@mattsjones/css-core';
import { multiply, negate } from '@mattsjones/css-utils';
import { themeVars } from '../../themes/themeVars.css';

export const root = style({
  padding: '0.05px',
  lineHeight: 0,
});

export const backdrop = style({
  width: '100vw',
  height: '100vh',
});

export const menuIsClosed = style({
  transform: `translateY(${multiply(negate(themeVars.grid), 2)})`,
  visibility: 'hidden',
});

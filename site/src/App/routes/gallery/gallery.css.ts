import { style } from '@mattsjones/css-core';
import { themeVars } from '../../../../../lib/themes/themeVars.css';

export const loader = style({
  color: '#f2f2f2',
  height: 300,
  width: 300,
  maxHeight: 'min(50vw, 50vh)',
  maxWidth: 'min(50vw, 50vh)',
});

const { border, typography } = themeVars;
export const divider = style({
  borderRight: `${border.width.standard}px solid ${border.color.standard}`,
  width: 1,
  height: typography.text.standard.mobile.leading,
});

export const moveCursor = style({
  cursor: 'move',
});

export const delayPanels = style({
  transitionDelay: '1000ms',
});

export const panel = style({
  boxShadow: '0 2px 10px 1px rgba(28,28,28,.1)',
  minHeight: themeVars.touchableSize,
});

export const panelBackground = style({
  backdropFilter: 'blur(4px)',
  transition: 'opacity .4s ease',
  selectors: {
    [`${panel}:not(:hover) &`]: {
      opacity: 0.85,
    },
  },
});

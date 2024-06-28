import { colorModeStyle } from 'braid-src/entries/css';
import { createVar, style } from '@vanilla-extract/css';
import tokens from 'braid-src/lib/themes/docs/tokens';

export const unthemedBorderRadius = style({
  borderRadius: tokens.border.radius.large,
});

const bgColor = createVar();
const dotColor = createVar();
const dotSize = createVar();
export const canvas = style([
  {
    vars: {
      [dotSize]: '12px',
    },
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 0)`,
    backgroundSize: `${dotSize} ${dotSize}`,
  },
]);

const darkVars = {
  [dotColor]: 'rgba(255,255,255, .1)',
  [bgColor]: tokens.color.background.bodyDark,
};
export const explicitDark = style({
  vars: darkVars,
});

export const adaptiveCanvas = style(
  colorModeStyle({
    lightMode: {
      vars: {
        [dotColor]: 'rgba(0,0,0, .1)',
        [bgColor]: tokens.color.background.body,
      },
    },
    darkMode: {
      vars: darkVars,
    },
  }),
);

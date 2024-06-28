import { palette } from 'braid-src/lib/color/palette';
import { colorModeStyle } from 'braid-src/entries/css';
import { createVar, style } from '@vanilla-extract/css';
import tokens from 'braid-src/lib/themes/docs/tokens';

export const unthemedBorderRadius = style({
  borderRadius: tokens.border.radius.large,
});

const dotColor = createVar();
const dotSize = createVar();
export const canvas = style([
  {
    vars: {
      [dotSize]: '8px',
    },
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 0)`,
    backgroundSize: `${dotSize} ${dotSize}`,
  },
]);

const darkVars = {
  [dotColor]: palette.grey[800],
};
export const explicitDark = style({
  vars: darkVars,
});

export const adaptiveCanvas = style(
  colorModeStyle({
    lightMode: {
      vars: {
        [dotColor]: palette.grey[100],
      },
    },
    darkMode: {
      vars: darkVars,
    },
  }),
);

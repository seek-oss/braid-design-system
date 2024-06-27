import { colorModeStyle } from 'braid-src/entries/css';
import { createVar, style } from '@vanilla-extract/css';
import tokens from 'braid-src/lib/themes/docs/tokens';

export const unthemedBorderRadius = style({
  borderRadius: tokens.border.radius.large,
});

const bgColor = createVar();
const cubeColor = createVar();
const cubeSize = createVar();
export const canvas = style([
  {
    vars: {
      [cubeSize]: '12px',
    },
    backgroundColor: bgColor,
    backgroundImage: [
      `linear-gradient(45deg, ${cubeColor} 25%, transparent 25%, transparent 75%, ${cubeColor} 75%, ${cubeColor})`,
      `linear-gradient(45deg, ${cubeColor} 25%, transparent 25%, transparent 75%, ${cubeColor} 75%, ${cubeColor})`,
    ].join(', '),
    backgroundSize: `calc(${cubeSize} * 2) calc(${cubeSize} * 2)`,
    backgroundPosition: `0 0, ${cubeSize} ${cubeSize}`,
  },
]);

const darkVars = {
  [cubeColor]: 'rgba(255,255,255, .08)',
  [bgColor]: tokens.color.background.bodyDark,
};
export const explicitDark = style({
  vars: darkVars,
});

export const adaptiveCanvas = style(
  colorModeStyle({
    lightMode: {
      vars: {
        [cubeColor]: 'rgba(0,0,0, .04)',
        [bgColor]: tokens.color.background.body,
      },
    },
    darkMode: {
      vars: darkVars,
    },
  }),
);

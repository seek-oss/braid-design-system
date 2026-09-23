import { createVar, style } from '@vanilla-extract/css';
import { colorModeStyle, vars } from 'braid-design-system/css';
import { palette } from 'braid-src/lib/color/palette';
import tokens from 'braid-src/lib/themes/docs/tokens';

const frameRadius = createVar();
const keylineColor = createVar();
const keylineWidth = createVar();

/**
 * Resolves the frame values against whichever theme this element sits in, so
 * they can be inherited by the example rendering in its own theme below.
 */
export const frameContext = style({
  vars: {
    [frameRadius]: vars.borderRadius.large,
    [keylineColor]: vars.borderColor.neutralLight,
    [keylineWidth]: vars.borderWidth.standard,
  },
});

export const frameShape = style({
  borderRadius: frameRadius,
});

export const frameKeyline = style({
  boxShadow: `inset 0 0 0 ${keylineWidth} ${keylineColor}`,
});

const bgColor = createVar();
const dotColor = createVar();
const dotSize = createVar();
const dotOffset = createVar();
export const canvas = style([
  {
    vars: {
      [dotSize]: `${tokens.grid * 2}px`,
      [dotOffset]: `calc((${dotSize} / 2) * -1)`,
    },
    backgroundColor: bgColor,
    backgroundImage: `radial-gradient(${dotColor} 1px, transparent 0)`,
    backgroundSize: `${dotSize} ${dotSize}`,
    backgroundPosition: `${dotOffset} ${dotOffset}`,
  },
]);

const darkVars = {
  [dotColor]: palette.grey[700],
  [bgColor]: palette.grey[800],
};
export const explicitDark = style({
  vars: darkVars,
});

export const adaptiveCanvas = style(
  colorModeStyle({
    lightMode: {
      vars: {
        [dotColor]: palette.grey[100],
        [bgColor]: 'white',
      },
    },
    darkMode: {
      vars: darkVars,
    },
  }),
);

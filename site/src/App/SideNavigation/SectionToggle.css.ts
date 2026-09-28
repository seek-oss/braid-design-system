import { createVar, style } from '@vanilla-extract/css';
import { colorModeStyle, vars } from 'braid-design-system/css';

const hoverBackground = createVar();

export const toggle = style([
  {
    selectors: {
      '&:hover': {
        background: hoverBackground,
      },
    },
  },
  colorModeStyle({
    lightMode: {
      vars: {
        [hoverBackground]: vars.backgroundColor.neutralSoft,
      },
    },
    darkMode: {
      vars: {
        [hoverBackground]: vars.backgroundColor.neutral,
      },
    },
  }),
]);

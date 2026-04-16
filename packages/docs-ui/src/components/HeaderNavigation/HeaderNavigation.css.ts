import { createVar, style } from '@vanilla-extract/css';
import { vars, colorModeStyle } from 'braid-design-system/css';

const searchBg = createVar();
export const searchButton = style([
  {
    ':hover': {
      background: searchBg,
    },
  },
  colorModeStyle({
    lightMode: {
      vars: {
        [searchBg]: vars.backgroundColor.neutralSoft,
      }
    },
    darkMode: {
      vars: {
        [searchBg]: vars.backgroundColor.neutral,
      }
    },
  })
]);
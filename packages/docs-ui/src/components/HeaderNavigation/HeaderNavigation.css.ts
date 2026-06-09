import { createVar, style } from '@vanilla-extract/css';
import { vars, colorModeStyle } from 'braid-design-system/css';

export const navLinksContainer = style({
  flexGrow: 1,
});

export const activeNavLink = style({
  textDecoration: 'underline',
});

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
      },
    },
    darkMode: {
      vars: {
        [searchBg]: vars.backgroundColor.neutral,
      },
    },
  }),
]);

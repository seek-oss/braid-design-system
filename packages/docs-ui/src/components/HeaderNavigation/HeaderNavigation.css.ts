import { createVar, style } from '@vanilla-extract/css';
import { vars, colorModeStyle } from 'braid-design-system/css';

// import { headerHeight } from '../Navigation/navigationSizes';

export const navLinksContainer = style({
  flexGrow: 1,
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

export const navLink = style({
  // height: headerHeight,
});

import { style } from '@vanilla-extract/css';
import { vars } from 'braid-design-system/css';

export const searchButton = style({
  ':hover': {
    background: vars.backgroundColor.neutralSoft,
  },
});


// import { style } from '@vanilla-extract/css';
// import { vars, colorModeStyle } from 'braid-design-system/css';

// export const searchButton = style({
//   ':hover': (
//     colorModeStyle({
//       lightMode: {
//         background: vars.backgroundColor.neutralSoft,
//       },
//       darkMode: {
//         background: vars.backgroundColor.neutralSoft,
//       },
//     })
//   )
// })

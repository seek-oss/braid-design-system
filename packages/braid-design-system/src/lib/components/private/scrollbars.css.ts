import { createVar, style } from '@vanilla-extract/css';

import { colorModeStyle } from '../../css/colorModeStyle';

const thumbColor = createVar();
const trackColor = 'transparent';

export const scrollbars = style([
  colorModeStyle({
    lightMode: {
      vars: {
        [thumbColor]: 'rgba(0 0 0 / 0.4)',
      },
    },
    darkMode: {
      vars: {
        [thumbColor]: 'rgba(255 255 255 / 0.4)',
      },
    },
  }),
  {
    '@supports': {
      '(scrollbar-color: auto)': {
        scrollbarColor: `${thumbColor} ${trackColor}`,
      },
      'selector(::-webkit-scrollbar)': {
        selectors: {
          '&::-webkit-scrollbar': {
            background: trackColor,
            width: 8,
            height: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            background: thumbColor,
          },
        },
      },
    },
  },
]);

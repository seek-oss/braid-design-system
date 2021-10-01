import { style } from '@vanilla-extract/css';
import { darkMode } from '../../css/atoms/sprinkles.css';

export const button = style({
  ':hover': {
    zIndex: 1,
  },
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const forceActive = style({});
export const darkBackgroundLightMode = style({});
export const darkBackgroundDarkMode = style({});

export const hoverOverlay = style({
  selectors: {
    [`${button}:hover &, ${button}:focus &`]: {
      opacity: 1,
    },
    [`
      html:not(${darkMode}) ${button}:hover &${darkBackgroundLightMode},
      html:not(${darkMode}) ${button}:focus &${darkBackgroundLightMode},
      html${darkMode} ${button}:hover &${darkBackgroundDarkMode},
      html${darkMode} ${button}:focus &${darkBackgroundDarkMode}
    `]: {
      opacity: 0.2,
    },
    [`${button}:active &, ${forceActive}&`]: {
      opacity: 0.8,
    },
    [`
      html:not(${darkMode}) ${button}:active &${darkBackgroundLightMode},
      html:not(${darkMode}) ${forceActive}&${darkBackgroundLightMode},
      html${darkMode} ${button}:active &${darkBackgroundDarkMode},
      html${darkMode} ${forceActive}&${darkBackgroundDarkMode}
    `]: {
      opacity: 0.075,
    },
  },
});

export const focusOverlay = style({
  selectors: {
    [`${button}:focus &`]: {
      opacity: 1,
    },
    [`${button}:focus &${darkBackgroundLightMode}`]: {
      opacity: 0.15,
    },
  },
});

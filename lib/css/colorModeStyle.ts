import { StyleRule } from '@vanilla-extract/css';
import { darkMode as darkModeClass } from './atoms/sprinkles.css';

type CSSProps = Omit<StyleRule, 'selectors' | '@media' | '@supports'>;

const selector = {
  light: `html:not(${darkModeClass}) &`,
  dark: `html${darkModeClass} &`,
};

const makeSelector = (mode: 'light' | 'dark', styles?: CSSProps) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [selector[mode]]: styles,
      };

interface ColorModeStyle {
  lightMode?: CSSProps;
  darkMode?: CSSProps;
}

export const colorModeStyle = ({
  lightMode,
  darkMode,
}: ColorModeStyle): StyleRule => ({
  ...(lightMode || darkMode
    ? {
        selectors: {
          ...makeSelector('light', lightMode),
          ...makeSelector('dark', darkMode),
        },
      }
    : {}),
});

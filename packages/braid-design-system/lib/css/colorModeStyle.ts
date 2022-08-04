import { StyleRule } from '@vanilla-extract/css';
import { colorModeSelectors } from './atoms/sprinkles.css';

type CSSProps = Omit<StyleRule, 'selectors' | '@media' | '@supports'>;

const makeSelector = (
  mode: keyof typeof colorModeSelectors,
  styles?: CSSProps,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [colorModeSelectors[mode]]: styles,
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

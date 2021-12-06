import { createContext, useContext } from 'react';
import { BoxBackgroundVariant } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import { mapColorModeValue } from '../../css/atoms/sprinkles.css';

type BackgroundContextValue = {
  lightMode: BoxBackgroundVariant;
  darkMode: BoxBackgroundVariant;
};

const backgroundContext = createContext<BackgroundContextValue>({
  lightMode: 'body',
  darkMode: 'bodyDark',
});

export const BackgroundProvider = backgroundContext.Provider;

export const useBackground = () => useContext(backgroundContext);

export const useBackgroundLightness = (
  backgroundOverride?: ReturnType<typeof useBackground>,
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useBraidTheme();
  const lightnessMap = {
    ...backgroundLightness,
    customDark: 'dark',
    customLight: 'light',
  } as const;

  return {
    lightMode: lightnessMap[background.lightMode],
    darkMode: lightnessMap[background.darkMode],
  };
};

export type ColorContrastValue<Value> =
  | { light: Value; dark: Value }
  | ((contrast: 'light' | 'dark', background: BoxBackgroundVariant) => Value);
export const useColorContrast = () => {
  const background = useBackground();
  const backgroundLightness = useBackgroundLightness();

  return <Value extends string>(map: ColorContrastValue<Value>) =>
    mapColorModeValue(backgroundLightness, (lightness, mode) =>
      typeof map === 'function'
        ? map(lightness, background[mode])
        : map[lightness],
    );
};

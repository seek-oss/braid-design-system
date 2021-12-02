import React, { createContext, useContext, ReactElement } from 'react';
import { BoxBackgroundVariant } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';
import {
  ColorModeValue,
  mapColorModeValue,
} from '../../css/atoms/sprinkles.css';

export type BackgroundContextValue = BoxBackgroundVariant;

const lightModeBackgroundContext =
  createContext<BackgroundContextValue>('body');
const darkModeBackgroundContext =
  createContext<BackgroundContextValue>('bodyDark');

export const LightBackgroundProvider = lightModeBackgroundContext.Provider;
export const DarkBackgroundProvider = darkModeBackgroundContext.Provider;

export const renderBackgroundProvider = (
  background: ColorModeValue<BoxBackgroundVariant>,
  element: ReactElement | null,
) => {
  if (typeof background === 'string') {
    return (
      <LightBackgroundProvider value={background}>
        <DarkBackgroundProvider value={background}>
          {element}
        </DarkBackgroundProvider>
      </LightBackgroundProvider>
    );
  }

  let returnEl = element;

  if (background.lightMode) {
    returnEl = (
      <LightBackgroundProvider value={background.lightMode}>
        {returnEl}
      </LightBackgroundProvider>
    );
  }

  if (background.darkMode) {
    returnEl = (
      <DarkBackgroundProvider value={background.darkMode}>
        {returnEl}
      </DarkBackgroundProvider>
    );
  }

  return returnEl;
};

export const useBackground = () => ({
  lightMode: useContext(lightModeBackgroundContext),
  darkMode: useContext(darkModeBackgroundContext),
});

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
  | ((contrast: 'light' | 'dark', background: BackgroundContextValue) => Value);
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

import React, { createContext, useContext, ReactElement } from 'react';
import { BoxBackgroundVariant } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export type BackgroundContextValue = BoxBackgroundVariant;

const backgroundContext = createContext<BackgroundContextValue>('body');

export const BackgroundProvider = backgroundContext.Provider;

export const renderBackgroundProvider = (
  background: BoxBackgroundVariant,
  element: ReactElement | null,
) => <BackgroundProvider value={background}>{element}</BackgroundProvider>;

export const useBackground = () => useContext(backgroundContext);

export const useBackgroundLightness = (
  backgroundOverride?: ReturnType<typeof useBackground>,
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useBraidTheme();

  if (background === 'customDark') {
    return 'dark';
  }

  if (background === 'customLight') {
    return 'light';
  }

  return backgroundLightness[background];
};

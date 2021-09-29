import React, { createContext, useContext, ReactElement } from 'react';
import { BoxBackgroundVariant, BoxProps } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidThemeContext';

export type BackgroundContextValue = BoxBackgroundVariant;

const backgroundContext = createContext<BackgroundContextValue>('body');

export const BackgroundProvider = backgroundContext.Provider;

export const renderBackgroundProvider = (
  background: BoxProps['background'],
  element: ReactElement | null,
) =>
  background ? (
    <BackgroundProvider value={background}>{element}</BackgroundProvider>
  ) : (
    element
  );

export const useBackground = () => useContext(backgroundContext);

export const useBackgroundLightness = (
  backgroundOverride?: ReturnType<typeof useBackground>,
) => {
  const backgroundFromContext = useBackground();
  const background = backgroundOverride || backgroundFromContext;
  const { backgroundLightness } = useBraidTheme();

  return backgroundLightness[background];
};

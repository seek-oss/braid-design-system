import React, { createContext, useContext, ReactElement } from 'react';
import { BoxProps } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidProvider';

const backgroundContext = createContext<BoxProps['background'] | null>(null);

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

export const useBackgroundLightness = () => {
  const background = useBackground();
  const { backgroundLightness } = useBraidTheme();
  const defaultLightness = backgroundLightness.body;

  return background
    ? backgroundLightness[background] || defaultLightness
    : defaultLightness;
};

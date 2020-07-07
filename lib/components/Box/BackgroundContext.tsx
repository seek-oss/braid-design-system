import React, { createContext, useContext, ReactElement } from 'react';
import { BoxProps } from './Box';
import { useBraidTheme } from '../BraidProvider/BraidProvider';

export type BackgroundVariant =
  | NonNullable<BoxProps['background']>
  | 'UNKNOWN_DARK'
  | 'UNKNOWN_LIGHT';

const backgroundContext = createContext<BackgroundVariant>('body');

export const BackgroundProvider = backgroundContext.Provider;

export const renderBackgroundProvider = (
  background: BackgroundVariant | undefined,
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
  const defaultLightness = backgroundLightness.body;

  if (background === 'UNKNOWN_DARK') {
    return 'dark';
  }

  if (background === 'UNKNOWN_LIGHT') {
    return 'light';
  }

  return background
    ? backgroundLightness[background] || defaultLightness
    : defaultLightness;
};

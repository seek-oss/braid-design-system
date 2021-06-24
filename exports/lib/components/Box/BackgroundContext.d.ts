import React, { ReactElement } from 'react';
import { BoxProps } from './Box';
export declare type BackgroundVariant =
  | NonNullable<BoxProps['background']>
  | 'UNKNOWN_DARK'
  | 'UNKNOWN_LIGHT';
export declare const BackgroundProvider: React.Provider<BackgroundVariant>;
export declare const renderBackgroundProvider: (
  background: BackgroundVariant | undefined,
  element: ReactElement | null,
) => JSX.Element | null;
export declare const useBackground: () => BackgroundVariant;
export declare const useBackgroundLightness: (
  backgroundOverride?: BackgroundVariant | undefined,
) => 'dark' | 'light';

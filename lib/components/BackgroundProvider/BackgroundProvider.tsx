import { ReactElement } from 'react';
import { renderBackgroundProvider } from '../Box/BackgroundContext';

export interface BackgroundProviderProps {
  type: 'light' | 'dark';
  children: ReactElement;
}

export const BackgroundProvider = ({
  type,
  children,
}: BackgroundProviderProps) => {
  return renderBackgroundProvider(
    type === 'dark' ? 'UNKNOWN_DARK' : 'UNKNOWN_LIGHT',
    children,
  );
};

BackgroundProvider.displayName = 'BackgroundProvider';

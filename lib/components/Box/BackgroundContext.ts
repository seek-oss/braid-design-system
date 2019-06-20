import { createContext, useContext } from 'react';
import { BoxProps } from './Box';

const backgroundContext = createContext<BoxProps['backgroundColor'] | null>(
  null,
);

export const BackgroundProvider = backgroundContext.Provider;

export const useBackground = () => useContext(backgroundContext);

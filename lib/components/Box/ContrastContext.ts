import { createContext, useContext } from 'react';
import { BoxProps } from './Box';

const contrastContext = createContext<BoxProps['backgroundColor'] | null>(null);

export const ContrastProvider = contrastContext.Provider;

export const useContrast = () => useContext(contrastContext);

import { BoxProps } from '../../hooks/useBox';
import { createContext, useContext } from 'react';

const contrastContext = createContext<BoxProps['backgroundColor'] | null>(null);

export const ContrastProvider = contrastContext.Provider;

export const useForeground = <Foreground extends string>(
  foreground: Foreground,
) => {
  const background = useContext(contrastContext);

  if (!background) {
    return foreground;
  }

  if (background === 'positiveLight' && foreground === 'positive') {
    return 'positiveContrast';
  }

  if (background === 'criticalLight' && foreground === 'critical') {
    return 'criticalContrast';
  }

  if (background === 'infoLight' && foreground === 'info') {
    return 'infoContrast';
  }

  return foreground;
};

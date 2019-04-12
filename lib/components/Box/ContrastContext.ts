import { BackgroundColor, Color, Fill } from '../../themes/theme';
import { createContext, useContext } from 'react';

const contrastContext = createContext<BackgroundColor | null>(null);

export const ContrastProvider = contrastContext.Provider;

export const useForeground = <Foreground extends Color | Fill>(
  foreground: Foreground,
) => {
  const background = useContext(contrastContext);

  if (!background) {
    return foreground;
  }

  if (background === 'positiveLight' && foreground === 'positive') {
    return 'positiveA11y';
  }

  if (background === 'criticalLight' && foreground === 'critical') {
    return 'criticalA11y';
  }

  if (background === 'infoLight' && foreground === 'info') {
    return 'infoA11y';
  }

  return foreground;
};

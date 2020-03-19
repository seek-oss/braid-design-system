import * as React from 'react';
import { createContext, useContext, ReactNode } from 'react';
import { TreatProvider } from 'sku/treat';
import { ensureResetImported } from '../../reset/resetTracker';
import { HideFocusRingsRoot } from '../private/hideFocusRings/hideFocusRings';
import { BraidTestProviderContext } from '../BraidTestProvider/BraidTestProviderContext';
import { BraidTheme } from '../../themes/BraidTheme.d';

if (process.env.NODE_ENV === 'development') {
  ensureResetImported();
}

const BraidThemeContext = createContext<BraidTheme | null>(null);
export const useBraidTheme = () => {
  const braidTheme = useContext(BraidThemeContext);

  if (braidTheme === null) {
    throw new Error('No Braid theme available on context');
  }

  return braidTheme;
};

export interface BraidProviderProps {
  theme: BraidTheme;
  styleBody?: boolean;
  children: ReactNode;
}

export const BraidProvider = ({
  theme,
  styleBody = true,
  children,
}: BraidProviderProps) => {
  const alreadyInBraidProvider = Boolean(useContext(BraidThemeContext));
  const inTestProvider = useContext(BraidTestProviderContext);

  return (
    <BraidThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        {styleBody ? (
          <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
        ) : null}
        {alreadyInBraidProvider || inTestProvider ? (
          children
        ) : (
          <HideFocusRingsRoot>{children}</HideFocusRingsRoot>
        )}
      </TreatProvider>
    </BraidThemeContext.Provider>
  );
};

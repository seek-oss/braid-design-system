import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import { TreatProvider } from 'sku/treat';
import { ensureResetImported } from '../../reset/resetTracker';
import { BraidTheme } from '../../themes/BraidTheme.d';
import { hideFocusRingsRootClass } from '../private/hideFocusRings/hideFocusRings';

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
  const alreadyInsideProvider = Boolean(useContext(BraidThemeContext));
  const [showFocusRings, setShowFocusRings] = useState(true);

  useEffect(() => {
    const show = () => setShowFocusRings(true);
    const hide = () => setShowFocusRings(false);
    window.addEventListener('keydown', show);
    window.addEventListener('mousemove', hide);

    return () => {
      window.removeEventListener('keydown', show);
      window.removeEventListener('mousemove', hide);
    };
  }, []);

  return (
    <BraidThemeContext.Provider value={theme}>
      <TreatProvider theme={theme.treatTheme}>
        {styleBody && !alreadyInsideProvider ? (
          <style type="text/css">{`body{margin:0;padding:0;background:${theme.background}}`}</style>
        ) : null}
        {alreadyInsideProvider ? (
          children
        ) : (
          <div
            className={!showFocusRings ? hideFocusRingsRootClass : undefined}
          >
            {children}
          </div>
        )}
      </TreatProvider>
    </BraidThemeContext.Provider>
  );
};

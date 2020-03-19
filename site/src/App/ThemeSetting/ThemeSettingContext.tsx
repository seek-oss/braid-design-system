import * as React from 'react';
import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useLocalStorage } from 'react-use';

import * as themes from '../../../../lib/themes';

const defaultTheme = 'seekUnifiedBeta' as const;

export type ThemeKey = keyof typeof themes;

interface ThemeSettingsContext {
  ready: boolean;
  theme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
}
const themeSettingContext = createContext<ThemeSettingsContext | undefined>(
  undefined,
);

export function useThemeSettings() {
  const themeSettings = useContext(themeSettingContext);

  if (!themeSettings) {
    throw new Error('No ThemeSettingContext available');
  }

  return themeSettings;
}

interface ThemeSettingProviderProps {
  children: ReactNode;
}
export function ThemeSettingProvider({ children }: ThemeSettingProviderProps) {
  const [ready, setReady] = useState(false);
  const [theme, setTheme] = useLocalStorage<ThemeKey>(
    'theme-preference',
    defaultTheme,
  );

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <themeSettingContext.Provider
      value={{ ready, theme: ready ? theme : defaultTheme, setTheme }}
    >
      {children}
    </themeSettingContext.Provider>
  );
}

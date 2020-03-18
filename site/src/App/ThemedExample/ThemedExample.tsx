import React, {
  ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useLocalStorage } from 'react-use';

import * as themes from '../../../../lib/themes';
import { BraidProvider, Box } from '../../../../lib/components';

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

interface ThemedExampleProps {
  children: ReactNode;
}
export function ThemedExample({ children }: ThemedExampleProps) {
  const { theme, ready } = useThemeSettings();

  return (
    <Box style={{ opacity: ready ? 1 : 0 }} transition="fast">
      <BraidProvider styleBody={false} theme={themes[theme]}>
        {children}
      </BraidProvider>
    </Box>
  );
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

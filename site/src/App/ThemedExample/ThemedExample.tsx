import React, { ReactNode, createContext, useContext } from 'react';
import { useLocalStorage } from 'react-use';

import * as themes from '../../../../lib/themes';
import { BraidProvider } from '../../../../lib/components';

type ThemeKey = keyof typeof themes;

interface ThemeSettingsContext {
  theme: ThemeKey | undefined;
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
  const { theme } = useThemeSettings();

  if (!theme) {
    return null;
  }

  return (
    <BraidProvider styleBody={false} theme={themes[theme]}>
      {children}
    </BraidProvider>
  );
}

interface ThemeSettingProviderProps {
  isServer?: boolean;
  children: ReactNode;
}
export function ThemeSettingProvider({
  isServer = false,
  children,
}: ThemeSettingProviderProps) {
  const [theme, setTheme] = useLocalStorage<ThemeKey | undefined>(
    'theme-preference',
    'seekUnifiedBeta',
  );

  return (
    <themeSettingContext.Provider
      value={{ theme: isServer ? undefined : theme, setTheme }}
    >
      {children}
    </themeSettingContext.Provider>
  );
}

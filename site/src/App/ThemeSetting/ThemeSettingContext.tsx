import * as themes from 'braid-src/lib/themes';
import type { BraidTheme } from 'braid-src/lib/themes/makeBraidTheme';
import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useLocalStorage } from 'react-use';

type ThemeKey = keyof typeof themes;

const defaultTheme = 'seekJobs' as const;

interface ThemeSettingsContext {
  ready: boolean;
  theme: BraidTheme;
  themeKey: ThemeKey;
  setThemeKey: (theme: ThemeKey) => void;
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

export const documentedThemes = Object.keys(themes) as ThemeKey[];
const useThemePreference = () => {
  const [theme, setTheme] = useLocalStorage<ThemeKey>(
    'theme-preference',
    defaultTheme,
  );

  return [
    theme !== undefined && documentedThemes.includes(theme)
      ? theme
      : defaultTheme,
    setTheme,
  ] as const;
};

interface ThemeSettingProviderProps {
  children: ReactNode;
}
export function ThemeSettingProvider({ children }: ThemeSettingProviderProps) {
  const [ready, setReady] = useState(false);
  const [themeKey, setThemeKey] = useThemePreference();
  const theme = themes[ready ? themeKey : defaultTheme] ?? themes[defaultTheme];

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <themeSettingContext.Provider
      value={{
        ready,
        theme,
        themeKey,
        setThemeKey,
      }}
    >
      {children}
    </themeSettingContext.Provider>
  );
}

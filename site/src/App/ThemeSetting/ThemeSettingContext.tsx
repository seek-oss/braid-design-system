import {
  type ReactNode,
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';
import { useLocalStorage } from 'react-use';

import { allThemes, type ThemeName } from './allThemes';

const defaultTheme = 'seekJobs' satisfies ThemeName;

type BraidTheme = (typeof allThemes)[ThemeName];

interface ThemeSettingsContext {
  ready: boolean;
  theme: BraidTheme;
  themeName: ThemeName;
  setThemeName: (theme: ThemeName) => void;
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

export const documentedThemes = Object.keys(allThemes) as ThemeName[];
const useThemePreference = () => {
  const [theme, setTheme] = useLocalStorage<ThemeName>(
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
  const [themeName, setThemeName] = useThemePreference();
  const theme =
    allThemes[ready ? themeName : defaultTheme] ?? allThemes[defaultTheme];

  useEffect(() => {
    setReady(true);
  }, []);

  return (
    <themeSettingContext.Provider
      value={{
        ready,
        theme,
        themeName,
        setThemeName,
      }}
    >
      {children}
    </themeSettingContext.Provider>
  );
}

import { createThemeVars } from '@vanilla-extract/css';

import makeNextTheme from './makeNextTheme';
import tokens from './docs/tokens';

export const themeVars = createThemeVars(makeNextTheme(tokens));

export type ThemeVars = typeof themeVars;

import { createThemeContract } from '@vanilla-extract/css';

import makeNextTheme from './makeNextTheme';
import tokens from './docs/tokens';

export const themeVars = createThemeContract(makeNextTheme(tokens));

export type ThemeVars = typeof themeVars;

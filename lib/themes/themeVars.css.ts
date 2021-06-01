import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';
import tokens from './docs/tokens';

export const themeVars = createThemeContract(makeVanillaTheme(tokens));

export type ThemeVars = typeof themeVars;

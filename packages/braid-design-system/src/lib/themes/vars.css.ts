import { createThemeContract } from '@vanilla-extract/css';

import tokens from './docs/tokens';
import { makeVanillaTheme } from './makeVanillaTheme';

export const vars = createThemeContract(makeVanillaTheme(tokens));

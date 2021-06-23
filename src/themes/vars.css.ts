import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';
import tokens from './docs/tokens';

export const vars = createThemeContract(makeVanillaTheme(tokens));

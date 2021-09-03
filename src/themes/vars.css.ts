import { createThemeContract } from '@vanilla-extract/css';

import makeVanillaTheme from './makeVanillaTheme';
import tokens from './docs/tokens';

const { resolvedTokens } = makeVanillaTheme(tokens);

export const vars = createThemeContract(resolvedTokens);

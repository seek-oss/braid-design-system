import { createTheme } from '@vanilla-extract/css';

import { vars } from './vars.css';
import { makeVanillaTheme } from './makeVanillaTheme';
import { makeRuntimeTokens } from './makeRuntimeTokens';
import type { BraidTokens } from './tokenType';

export const makeBraidTheme = (tokens: BraidTokens) => ({
  ...makeRuntimeTokens(tokens),
  vanillaTheme: createTheme(vars, makeVanillaTheme(tokens), tokens.name),
});

export type BraidTheme = ReturnType<typeof makeBraidTheme>;

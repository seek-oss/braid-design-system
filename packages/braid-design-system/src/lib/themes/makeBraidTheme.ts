import { createTheme } from '@vanilla-extract/css';

import { makeRuntimeTokens } from './makeRuntimeTokens';
import { makeVanillaTheme } from './makeVanillaTheme';
import type { BraidTokens } from './tokenType';

import { vars } from './vars.css';

export const makeBraidTheme = (tokens: BraidTokens) => ({
  ...makeRuntimeTokens(tokens),
  vanillaTheme: createTheme(vars, makeVanillaTheme(tokens), tokens.name),
});

export type BraidTheme = ReturnType<typeof makeBraidTheme>;

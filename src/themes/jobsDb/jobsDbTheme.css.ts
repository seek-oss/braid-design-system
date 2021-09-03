import { createTheme } from '@vanilla-extract/css';
import { vars } from '../vars.css';
import makeVanillaTheme from '../makeVanillaTheme';

import tokens from './tokens';

const { resolvedTokens, runtimeTokens } = makeVanillaTheme(tokens);

export default createTheme(vars, resolvedTokens);

export { runtimeTokens };

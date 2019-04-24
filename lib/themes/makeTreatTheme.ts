import { createTheme } from 'sku/treat';
import { Tokens } from './theme';
import makeUtils from './makeUtils';

const themeForTokens = (tokens: Tokens) => ({
  tokens,
  utils: makeUtils(tokens),
});

export default (tokens: Tokens) => createTheme(themeForTokens(tokens));

export type TreatTheme = ReturnType<typeof themeForTokens>;

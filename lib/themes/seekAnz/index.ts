import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'seekAnz',
  background: '#eee',
  treatTheme,
};

export default theme;

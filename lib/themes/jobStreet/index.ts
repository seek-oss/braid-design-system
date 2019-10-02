import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'jobStreet',
  background: '#e5e5e5',
  treatTheme,
};

export default theme;

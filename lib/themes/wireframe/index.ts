import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'wireframe',
  background: '#fff',
  treatTheme,
};

export default theme;

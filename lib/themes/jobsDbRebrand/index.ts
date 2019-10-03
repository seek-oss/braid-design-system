import { treatTheme, runtimeTokens } from './theme.treat';
import { Theme } from '../theme';

const theme: Theme = {
  ...runtimeTokens,
  name: 'jobsDbRebrand',
  background: '#edeff3',
  treatTheme,
};

export default theme;

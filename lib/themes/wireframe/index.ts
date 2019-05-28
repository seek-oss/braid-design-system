import '../../hooks/useReset/reset.treat';
import treatTheme from './theme.treat';
import tokens from './tokens';
import { Theme } from '../theme';

const theme: Theme = {
  name: 'wireframe',
  tokens,
  treatTheme,
};

export default theme;

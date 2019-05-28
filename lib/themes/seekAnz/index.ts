import reset from '../../reset/reset.css.js';
import treatTheme from './theme.treat';
import tokens from './tokens';
import { Theme } from '../theme';

const theme: Theme = {
  name: 'seekAnz',
  tokens,
  atoms: { reset },
  treatTheme,
};

export default theme;

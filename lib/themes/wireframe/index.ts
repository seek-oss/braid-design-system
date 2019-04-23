import reset from '../../reset/reset.css.js';
import treatTheme from './theme.treat';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';
import atoms from './atoms.css.js';

const theme: Theme = {
  name: 'wireframe',
  tokens,
  atoms: normalizeAtoms(reset, atoms),
  treatTheme,
};

export default theme;

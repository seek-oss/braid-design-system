// Import reset file for high document order
import '../../hooks/useReset/reset.treat';
import treatTheme from './theme.treat';
import atoms from './atoms.css.js';
import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';

const theme: Theme = {
  name: 'seekAnz',
  tokens,
  atoms: normalizeAtoms(atoms),
  treatTheme,
};

export default theme;

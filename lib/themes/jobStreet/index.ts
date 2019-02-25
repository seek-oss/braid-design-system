import normalizeAtoms from '../../atoms/normalizeAtoms';
import tokens from './tokens';
import { Theme } from '../theme';
import atoms from './atoms.css.js';

const theme: Theme = {
  name: 'jobStreet',
  tokens,
  atoms: normalizeAtoms(atoms)
};

export default theme;

import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const formAccent = '#2765cf';
const brandAccent = '#e60278';
const positive = '#169400';
const critical = brandAccent;
const info = '#9556b7';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical,
  info,
  positive,
  secondary: '#1c1c1ca1',
  brandAccent,
  formAccent,
  neutral: '#1c1c1c',
};

export default makeAtoms(tokens, colors);

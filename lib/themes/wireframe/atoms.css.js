import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const colors = {
  link: '#4c77bb',
  black: '#2b2b2b',
  white: 'white',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  formAccent: 'navy',
  neutral: 'black'
};

const fills = {
  formAccent: 'blue',
  formAccentDisabled: '#ccc',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  white: 'white'
};

const borderColor = {
  standard: '#777',
  formAccent: 'blue',
  critical: 'red'
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  formAccent: 'blue',
  formAccentDisabled: '#ccc',
  selection: '#eee',
  info: 'navy',
  card: '#fff',
  critical: 'pink'
};

const fontFamily = {
  fontFamily: 'Courier, monospace'
};

export default makeAtoms(
  tokens,
  colors,
  fills,
  fontFamily,
  borderColor,
  backgroundColor
);

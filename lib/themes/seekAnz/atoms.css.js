import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical: '#e60278',
  positive: 'green',
  secondary: '#1c1c1ca1',
  formAccent: '#2765cf',
  neutral: 'black'
};

const fills = {
  formAccent: '#2765cf',
  formAccentDisabled: '#ccc',
  critical: '#e60278',
  positive: 'green',
  secondary: '#1c1c1ca1',
  white: 'white'
};

const borderColor = {
  standard: '#d6d6d6',
  formAccent: '#2765cf',
  critical: '#e60278'
};

const borderRadius = {
  standard: '4px'
};

const boxShadows = {
  focusColor: '#2765cf'
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  formAccent: '#2765cf',
  formAccentDisabled: '#ccc',
  selection: '#f5f8ff',
  info: '#9556b7',
  card: '#fff',
  critical: '#fff'
};

const fontFamily = {
  fontFamily:
    'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif'
};

export default makeAtoms(
  tokens,
  colors,
  fills,
  fontFamily,
  borderColor,
  borderRadius,
  boxShadows,
  backgroundColor
);

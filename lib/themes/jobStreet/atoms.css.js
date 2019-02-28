import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const colors = {
  link: '#1c3f94',
  linkHover: '#142d69',
  black: '#333',
  white: '#fff',
  critical: 'red',
  positive: 'green',
  secondary: '#333333b3',
  formAccent: '#142d69',
  neutral: '#333',
};

const fills = {
  formAccent: '#142d69',
  formAccentDisabled: '#ccc',
  critical: 'red',
  positive: 'green',
  secondary: '#333333b3',
  white: 'white',
};

const borderColor = {
  standard: '#ccc',
  formAccent: '#142d69',
  critical: 'red',
};

const borderRadius = {
  standard: '3px',
};

const boxShadows = {
  focusColor: '#142d69',
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  formAccent: '#142d69',
  formAccentDisabled: '#ccc',
  selection: '#E8EBF4',
  info: '#142d69',
  card: '#fff',
  critical: '#FFEAEA',
};

const fontFamily = {
  fontFamily: '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 600,
};

export default makeAtoms(
  tokens,
  colors,
  fills,
  fontFamily,
  borderColor,
  borderRadius,
  boxShadows,
  fontWeights,
  backgroundColor,
);

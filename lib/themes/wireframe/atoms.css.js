import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const focusColor = 'DeepSkyBlue';
const formAccent = 'blue';

const colors = {
  link: '#4c77bb',
  black: '#2b2b2b',
  white: 'white',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  formAccent,
  neutral: '#2b2b2b',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: 'red',
  positive: 'green',
  secondary: '#777',
  white: 'white',
};

const borderRadius = {
  standard: '4px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: '#777',
  borderCritical: 'red',
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#eee',
  info: 'navy',
  card: '#fff',
  critical: 'pink',
};

const fontFamily = {
  fontFamily: 'Courier, monospace',
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
  borderRadius,
  boxShadows,
  fontWeights,
  backgroundColor,
);

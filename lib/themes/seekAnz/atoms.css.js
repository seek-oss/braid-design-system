import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba } from 'polished';

const focusColor = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical: '#e60278',
  positive: 'green',
  secondary: '#1c1c1ca1',
  formAccent,
  neutral: '#1c1c1c',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: '#e60278',
  positive: 'green',
  secondary: '#1c1c1ca1',
  white: 'white',
};

const borderRadius = {
  standard: '4px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: '#d6d6d6',
  borderCritical: '#e60278',
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: '#fff',
  inputDisabled: '#eee',
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#f5f8ff',
  info: '#9556b7',
  card: '#fff',
  critical: '#fff',
};

const fontFamily = {
  fontFamily:
    'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
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

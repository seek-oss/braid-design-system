import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba } from 'polished';

const focusColor = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';
const brandAccent = '#e60278';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical: brandAccent,
  positive: 'green',
  secondary: '#1c1c1ca1',
  brandAccent,
  formAccent,
  neutral: '#1c1c1c',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: brandAccent,
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
  borderCritical: brandAccent,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: '#fff',
  inputDisabled: '#eee',
  brandAccent,
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

const transforms = {
  touchable: 'scale(0.95)',
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
  transforms,
);

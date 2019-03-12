import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba } from 'polished';

const focusColor = rgba('#428bca', 0.7);
const formAccent = '#142d69';
const brandAccent = '#fff200';

const colors = {
  link: '#1c3f94',
  linkHover: '#142d69',
  black: '#333',
  white: '#fff',
  critical: 'red',
  positive: 'green',
  secondary: '#333333b3',
  brandAccent,
  formAccent,
  neutral: '#333',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: 'red',
  positive: 'green',
  secondary: '#333333b3',
  white: 'white',
};

const borderRadius = {
  standard: '3px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: '#ccc',
  borderCritical: 'red',
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  brandAccent,
  formAccent,
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

const transforms = {
  touchable: 'scale(0.98)',
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

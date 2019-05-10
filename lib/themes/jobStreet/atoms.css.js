import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba } from 'polished';

const focusColor = rgba('#428bca', 0.7);
const formAccent = '#142d69';
const brandAccent = '#fff200';
const critical = '#eb0000';
const info = '#142d69';
const positive = 'green';

const colors = {
  link: '#1c3f94',
  linkHover: '#142d69',
  black: '#333',
  white: '#fff',
  critical,
  info,
  positive,
  secondary: '#333333b3',
  brandAccent,
  formAccent,
  neutral: '#333',
};

const borderRadius = {
  standard: '3px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: '#ccc',
  borderCritical: critical,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: 'white',
  inputDisabled: '#eee',
  brandAccent,
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#E8EBF4',
  card: '#fff',
  critical,
  info,
  positive,
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
  fontFamily,
  borderRadius,
  boxShadows,
  fontWeights,
  backgroundColor,
  transforms,
);

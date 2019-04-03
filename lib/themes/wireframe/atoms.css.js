import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const focusColor = 'DeepSkyBlue';
const formAccent = 'black';
const brandAccent = 'DarkOrange';

const colors = {
  link: '#4c77bb',
  black: '#2b2b2b',
  white: 'white',
  critical: 'red',
  criticalDark: 'red',
  positive: 'green',
  positiveDark: 'green',
  secondary: '#777',
  info: 'navy',
  infoDark: 'navy',
  brandAccent,
  formAccent,
  neutral: '#2b2b2b',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical: 'red',
  criticalDark: 'red',
  info: 'navy',
  infoDark: 'navy',
  positive: 'green',
  positiveDark: 'green',
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
  brandAccent,
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#eee',
  info: 'navy',
  infoLight: 'aliceblue',
  card: '#fff',
  critical: 'red',
  criticalLight: 'pink',
  positive: 'green',
  positiveLight: 'honeydew',
};

const fontFamily = {
  fontFamily: 'Courier, monospace',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 600,
};

const transforms = {
  touchable: 'scale(0.97)',
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

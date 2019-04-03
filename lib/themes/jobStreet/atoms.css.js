import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba, lighten } from 'polished';

const focusColor = rgba('#428bca', 0.7);
const formAccent = '#142d69';
const brandAccent = '#fff200';
const critical = '#ff4b4b';

const colors = {
  link: '#1c3f94',
  linkHover: '#142d69',
  black: '#333',
  white: '#fff',
  critical,
  criticalDark: critical,
  positive: 'green',
  positiveDark: '#028616',
  secondary: '#333333b3',
  info: '#142d69',
  infoDark: '#1C3F94',
  brandAccent,
  formAccent,
  neutral: '#333',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical,
  criticalDark: critical,
  info: '#142d69',
  infoDark: '#1C3F94',
  positive: 'green',
  positiveDark: '#028616',
  secondary: '#333333b3',
  white: 'white',
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
  info: '#142d69',
  infoLight: lighten(0.72, '#142d69'),
  card: '#fff',
  critical: '#ff4b4b',
  criticalLight: '#FFEAEA',
  positive: 'green',
  positiveLight: '#EBF6ED',
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

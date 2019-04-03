import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba, lighten } from 'polished';

const focusColor = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';
const brandAccent = '#e60278';
const positive = '#169400';
const positiveLight = '#f3f9f2';
const critical = brandAccent;
const criticalLight = lighten(0.52, critical);
const info = '#9556b7';
const infoLight = '#f9f6fb';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical,
  criticalDark: critical,
  positive,
  positiveDark: positive,
  secondary: '#1c1c1ca1',
  info,
  infoDark: info,
  brandAccent,
  formAccent,
  neutral: '#1c1c1c',
};

const fills = {
  formAccent,
  formAccentDisabled: '#ccc',
  critical,
  criticalDark: critical,
  info,
  infoDark: info,
  positive,
  positiveDark: positive,
  secondary: '#1c1c1ca1',
  white: 'white',
};

const borderRadius = {
  standard: '4px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: '#d6d6d6',
  borderCritical: critical,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: '#fff',
  inputDisabled: '#eee',
  brandAccent,
  formAccent,
  formAccentDisabled: '#ccc',
  selection: '#f5f8ff',
  info,
  infoLight,
  card: '#fff',
  critical,
  criticalLight,
  positive,
  positiveLight,
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

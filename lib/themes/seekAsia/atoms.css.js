import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const blue3 = '#94C9E0';
const blue5 = '#EEF8FC';
const alert = '#ff4b4b';
const completion = '#63b209';
const grey1 = '#333';
const grey2 = '#666';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color

const focusColor = blue3;
const formAccent = blue2;
const brandAccent = '#0d3880';

const colors = {
  link: blue2,
  black,
  white,
  critical: alert,
  criticalDark: '#ff4b4b',
  positive: completion,
  positiveDark: '#028616',
  secondary: grey2,
  info: candidate,
  infoDark: '#1C3F94',
  brandAccent,
  formAccent,
  neutral: grey1,
};

const fills = {
  formAccent,
  formAccentDisabled: grey4,
  critical: alert,
  criticalDark: '#ff4b4b',
  info: candidate,
  infoDark: '#1C3F94',
  positive: completion,
  positiveDark: '#028616',
  secondary: grey1,
  white,
};

const borderRadius = {
  standard: '4px',
};

const boxShadows = {
  outlineFocus: focusColor,
  borderStandard: grey4,
  borderCritical: alert,
  borderFormAccent: formAccent,
};

const backgroundColor = {
  input: white,
  inputDisabled: grey4,
  brandAccent,
  formAccent,
  formAccentDisabled: grey4,
  selection: blue5,
  info: candidate,
  infoLight: '#DDF1FA',
  card: white,
  critical: alert,
  criticalLight: '#FFF1F1',
  positive: completion,
  positiveLight: '#EBF6ED',
};

const fontFamily = {
  fontFamily:
    'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
};

const fontWeights = {
  regular: 400,
  medium: 500,
  strong: 700,
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

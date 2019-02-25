import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const blue3 = '#94C9E0';
const blue5 = '#EEF8FC';
const alert = '#ff4b4b';
const alertBackground = 'rgba(255,75,75, 0.15)'; // transparent seekAsia alert color
const completion = '#63b209';
const grey1 = '#333';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color

const colors = {
  link: blue2,
  black,
  white,
  critical: alert,
  positive: completion,
  secondary: grey1,
  formAccent: blue2,
  neutral: black
};

const fills = {
  formAccent: blue2,
  formAccentDisabled: grey4,
  critical: alert,
  positive: completion,
  secondary: grey1,
  white
};

const borderColor = {
  standard: grey4,
  formAccent: blue3,
  critical: alert
};

const backgroundColor = {
  input: white,
  inputDisabled: grey4,
  formAccent: completion,
  formAccentDisabled: grey4,
  selection: blue5,
  info: candidate,
  card: white,
  critical: alertBackground
};

const fontFamily = {
  fontFamily:
    'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif'
};

export default makeAtoms(
  tokens,
  colors,
  fills,
  fontFamily,
  borderColor,
  backgroundColor
);

import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const alert = '#eb0000';
const grey1 = '#333';
const grey2 = '#666';
const candidate = '#0c4b85'; // SEEK Asia name for this color
const info = candidate;
const positive = '#498307';
const critical = alert;

const formAccent = blue2;
const brandAccent = '#0d3880';

const colors = {
  link: blue2,
  black,
  white,
  critical,
  info,
  positive,
  secondary: grey2,
  brandAccent,
  formAccent,
  neutral: grey1,
};

export default makeAtoms(tokens, colors);

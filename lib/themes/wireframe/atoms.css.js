import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

const formAccent = 'black';
const brandAccent = 'DarkOrange';
const critical = 'red';
const positive = 'green';
const info = 'navy';

const colors = {
  link: '#4c77bb',
  black: '#2b2b2b',
  white: 'white',
  critical,
  info,
  positive,
  secondary: '#777',
  brandAccent,
  formAccent,
  neutral: '#2b2b2b',
};

export default makeAtoms(tokens, colors);

import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';

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

export default makeAtoms(tokens, colors);

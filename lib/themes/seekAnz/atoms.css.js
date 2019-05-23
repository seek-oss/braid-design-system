import tokens from './tokens';
import makeAtoms from '../../atoms/makeAtoms';
import { rgba } from 'polished';

const focusColor = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';
const brandAccent = '#e60278';
const positive = '#169400';
const critical = brandAccent;
const info = '#9556b7';

const colors = {
  link: '#2765cf',
  black: '#1c1c1c',
  white: '#fff',
  critical,
  info,
  positive,
  secondary: '#1c1c1ca1',
  brandAccent,
  formAccent,
  neutral: '#1c1c1c',
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
  card: '#fff',
  critical,
  info,
  positive,
};

export default makeAtoms(tokens, colors, boxShadows, backgroundColor);

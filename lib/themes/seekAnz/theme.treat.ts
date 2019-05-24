import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';
import { rgba } from 'polished';

const focus = rgba('#1e90ff', 0.7);
const formAccent = '#2765cf';
const brandAccent = '#e60278';
const positive = '#169400';
const critical = brandAccent;
const info = '#9556b7';
const black = '#1c1c1c';
const link = '#2765cf';

export default makeTreatTheme({
  ...tokens,
  name: 'seekAnz',
  typography: {
    fontFamily:
      'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700,
    },
  },
  transforms: {
    touchable: 'scale(0.95)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '4px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#d6d6d6',
      focus,
      critical,
      formAccent,
    },
  },
  color: {
    foreground: {
      link,
      linkHover: link,
      black,
      neutral: black,
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#1c1c1ca1',
      white: 'white',
    },
    background: {
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
    },
  },
});

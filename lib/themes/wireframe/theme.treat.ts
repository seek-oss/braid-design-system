import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = 'black';
const critical = 'red';
const positive = 'green';
const info = 'navy';
const brandAccent = 'DarkOrange';
const focus = 'DeepSkyBlue';
const black = '#2b2b2b';
const white = '#fff';
const link = '#4c77bb';

export default makeTreatTheme({
  ...tokens,
  name: 'wireframe',
  typography: {
    fontFamily: 'Courier, monospace',
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 600,
    },
  },
  transforms: {
    touchable: 'scale(0.97)',
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
      standard: '#777',
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
      secondary: '#777',
      white,
    },
    background: {
      input: white,
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#eee',
      card: white,
      critical,
      info,
      positive,
    },
  },
});

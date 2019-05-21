import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = '#2765cf';
const brandAccent = '#e60278';
const positive = '#169400';
const critical = brandAccent;
const info = '#9556b7';

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
  color: {
    foreground: {
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#1c1c1ca1',
      white: 'white',
    },
  },
});

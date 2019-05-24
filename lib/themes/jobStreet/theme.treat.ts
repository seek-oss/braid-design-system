import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';
import { rgba } from 'polished';

const focus = rgba('#428bca', 0.7);
const formAccent = '#142d69';
const critical = '#eb0000';
const info = '#142d69';
const positive = 'green';
const brandAccent = '#fff200';
const black = '#333';

export default makeTreatTheme({
  ...tokens,
  name: 'jobStreet',
  typography: {
    fontFamily: '"Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 600,
    },
  },
  transforms: {
    touchable: 'scale(0.98)',
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
  },
  border: {
    radius: {
      standard: '3px',
    },
    width: {
      standard: 1,
      large: 2,
    },
    color: {
      standard: '#ccc',
      focus,
      critical,
      formAccent,
    },
  },
  color: {
    foreground: {
      link: '#1c3f94',
      linkHover: '#142d69',
      black,
      neutral: black,
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#333333b3',
      white: 'white',
    },
    background: {
      input: 'white',
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#E8EBF4',
      card: '#fff',
      critical,
      info,
      positive,
    },
  },
});

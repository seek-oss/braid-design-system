import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = '#142d69';
const critical = '#eb0000';
const info = '#142d69';
const positive = 'green';

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
  color: {
    foreground: {
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#333333b3',
      white: 'white',
    },
  },
});

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

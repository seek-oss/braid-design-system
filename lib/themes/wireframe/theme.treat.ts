import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = 'black';
const critical = 'red';
const positive = 'green';
const info = 'navy';

export default makeTreatTheme({
  ...tokens,
  name: 'wireframe',
  typography: {
    fontFamily: 'Courier, monospace',
  },
  color: {
    foreground: {
      formAccent,
      formAccentDisabled: '#ccc',
      critical,
      info,
      positive,
      secondary: '#777',
      white: 'white',
    },
  },
});

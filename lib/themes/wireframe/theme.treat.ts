import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = 'black';
const critical = 'red';
const positive = 'green';
const info = 'navy';
const brandAccent = 'DarkOrange';

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
    background: {
      input: 'white',
      inputDisabled: '#eee',
      brandAccent,
      formAccent,
      formAccentDisabled: '#ccc',
      selection: '#eee',
      card: '#fff',
      critical,
      info,
      positive,
    },
  },
});

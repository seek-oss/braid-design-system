import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const white = '#fff';
const blue2 = '#298EB9';
const alert = '#eb0000';
const grey1 = '#333';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color
const info = candidate;
const positive = '#498307';
const critical = alert;

const formAccent = blue2;

export default makeTreatTheme({
  ...tokens,
  name: 'seekAsia',
  typography: {
    fontFamily:
      'Muli, -apple-system, system-ui, "Segoe UI", Roboto, "Noto Sans", Ubuntu, "Droid Sans", "Helvetica Neue", Arial, sans-serif',
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700,
    },
  },
  color: {
    foreground: {
      formAccent,
      formAccentDisabled: grey4,
      critical,
      info,
      positive,
      secondary: grey1,
      white,
    },
  },
});

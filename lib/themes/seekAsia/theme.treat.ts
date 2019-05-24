import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const white = '#fff';
const black = '#000';
const blue2 = '#298EB9';
const blue3 = '#94C9E0';
const blue5 = '#EEF8FC';
const alert = '#eb0000';
const grey1 = '#333';
const grey2 = '#666';
const grey4 = '#ccc';
const candidate = '#0c4b85'; // SEEK Asia name for this color
const info = candidate;
const positive = '#498307';
const critical = alert;

const formAccent = blue2;
const brandAccent = '#0d3880';
const focus = blue3;
const link = blue2;

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
  transforms: {
    touchable: 'scale(0.98)',
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
      standard: grey4,
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
      neutral: grey1,
      brandAccent,
      formAccent,
      formAccentDisabled: grey4,
      critical,
      info,
      positive,
      secondary: grey2,
      white,
    },
    background: {
      input: white,
      inputDisabled: grey4,
      brandAccent,
      formAccent,
      formAccentDisabled: grey4,
      selection: blue5,
      card: white,
      critical,
      info,
      positive,
    },
  },
});

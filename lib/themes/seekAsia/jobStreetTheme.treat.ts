import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = '#1c3f94';
const brandAccent = '#fff200';

const jobStreetTokens = {
  ...tokens,
  name: 'jobStreet',
  border: {
    ...tokens.border,
    color: {
      ...tokens.border.color,
      formAccent,
    },
  },
  color: {
    ...tokens.color,
    foreground: {
      ...tokens.color.foreground,
      formAccent,
      brandAccent,
    },
    background: {
      ...tokens.color.background,
      formAccent,
      brandAccent,
    },
  },
};

export default makeTreatTheme(jobStreetTokens);

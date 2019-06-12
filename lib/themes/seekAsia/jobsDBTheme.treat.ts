import makeTreatTheme from '../makeTreatTheme';
import tokens from './tokens';

const formAccent = '#0f2C55';
const brandAccent = '#ff9000';

const jobsDBTokens = {
  ...tokens,
  name: 'jobsDB',
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

export default makeTreatTheme(jobsDBTokens);

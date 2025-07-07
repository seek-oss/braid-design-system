import { makeModes } from './utils/makeModes';

export const braidThemes = [
  'apac',
  'apacDark',
  'seekJobs',
  'seekJobsDark',
  'seekBusiness',
  'wireframe',
] as const;

const braidViewports = {
  xsmall: 320,
  small: 768,
  medium: 992,
  large: 1200,
};

export const makeBraidModes = makeModes(braidThemes, braidViewports, {
  defaultThemes: [
    'apac',
    'apacDark',
    'seekJobs',
    'seekJobsDark',
    'seekBusiness',
  ],
});

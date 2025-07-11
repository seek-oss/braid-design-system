import { makeChromaticModes } from './utils/makeChromaticModes';

export const braidThemes = [
  'apac',
  'seekJobs',
  'seekJobsDark',
  'wireframe',
] as const;

const braidViewports = {
  mobile: 320,
  tablet: 768,
  desktop: 992,
  wide: 1200,
};

export const makeBraidModes = makeChromaticModes(braidThemes, braidViewports, {
  defaultThemes: ['apac', 'seekJobs', 'seekJobsDark'],
});

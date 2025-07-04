export const themeNames = [
  'apac',
  'apacDark',
  'seekJobs',
  'seekJobsDark',
  'seekBusiness',
] as const;

const XSMALL_WIDTH = 320;
const SMALL_WIDTH = 768;
const MEDIUM_WIDTH = 992;
const LARGE_WIDTH = 1200;

const makeModeForEachTheme = (
  modeName: string,
  parameters: Record<string, unknown>,
): Record<string, Record<any, unknown>> =>
  themeNames.reduce(
    (acc, themeName) => ({
      ...acc,
      [`${themeName} ${modeName}`]: {
        theme: themeName,
        ...parameters,
      },
    }),
    {},
  );

export const xsModes = makeModeForEachTheme('xsmall', {
  viewport: XSMALL_WIDTH,
});

export const smModes = makeModeForEachTheme('small', {
  viewport: SMALL_WIDTH,
});

export const mdModes = makeModeForEachTheme('medium', {
  viewport: MEDIUM_WIDTH,
});

export const lgModes = makeModeForEachTheme('large', {
  viewport: LARGE_WIDTH,
});

export const wireframeModes = {
  xsmall: {
    theme: 'wireframe',
    viewport: XSMALL_WIDTH,
  },
  small: {
    theme: 'wireframe',
    viewport: SMALL_WIDTH,
  },
  medium: {
    theme: 'wireframe',
    viewport: MEDIUM_WIDTH,
  },
  large: {
    theme: 'wireframe',
    viewport: LARGE_WIDTH,
  },
};

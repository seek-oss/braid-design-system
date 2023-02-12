import type { StyleRule } from '@vanilla-extract/css';
import omit from 'lodash/omit';
import type { Breakpoint } from '../css/breakpoints';

type RequiredTokens = { breakpoint: Record<Breakpoint, number> };
type StyleWithoutMediaQueries = Exclude<StyleRule['@media'], undefined>[string];

export const makeThemeUtils = (tokens: RequiredTokens) => {
  const makeMediaQuery =
    (breakpoint: Breakpoint) => (styles: StyleWithoutMediaQueries) =>
      !styles || Object.keys(styles).length === 0
        ? {}
        : {
            [`screen and (min-width: ${tokens.breakpoint[breakpoint]}px)`]:
              styles,
          };

  const mediaQuery = {
    tablet: makeMediaQuery('tablet'),
    desktop: makeMediaQuery('desktop'),
    wide: makeMediaQuery('wide'),
  };

  interface ResponsiveStyle {
    mobile?: StyleWithoutMediaQueries;
    tablet?: StyleWithoutMediaQueries;
    desktop?: StyleWithoutMediaQueries;
    wide?: StyleWithoutMediaQueries;
  }

  const responsiveStyle = ({
    mobile,
    tablet,
    desktop,
    wide,
  }: ResponsiveStyle): StyleRule => ({
    ...omit(mobile, '@media'),
    ...(tablet || desktop || wide
      ? {
          '@media': {
            ...mediaQuery.tablet(tablet ?? {}),
            ...mediaQuery.desktop(desktop ?? {}),
            ...mediaQuery.wide(wide ?? {}),
          },
        }
      : {}),
  });

  return { responsiveStyle };
};

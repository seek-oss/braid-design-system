import isEqual from 'lodash/isEqual';
import { Style } from 'sku/treat';
import omit from 'lodash/omit';
import { TreatTokens } from './makeBraidTheme';

type RequiredTokens = Pick<TreatTokens, 'breakpoint'>;
type StyleWithoutMediaQueries = Exclude<Style['@media'], undefined>[string];

export const makeThemeUtils = (tokens: RequiredTokens) => {
  const makeMediaQuery = (breakpoint: keyof RequiredTokens['breakpoint']) => (
    styles: StyleWithoutMediaQueries,
  ) =>
    !styles || Object.keys(styles).length === 0
      ? {}
      : {
          [`screen and (min-width: ${tokens.breakpoint[breakpoint]}px)`]: styles,
        };

  const mediaQuery = {
    tablet: makeMediaQuery('tablet'),
    desktop: makeMediaQuery('desktop'),
  };

  interface ResponsiveStyle {
    mobile?: StyleWithoutMediaQueries;
    tablet?: StyleWithoutMediaQueries;
    desktop?: StyleWithoutMediaQueries;
  }

  const responsiveStyle = ({
    mobile,
    tablet,
    desktop,
  }: ResponsiveStyle): Style => {
    const mobileStyles = omit(mobile, '@media');

    const tabletStyles =
      !tablet || isEqual(tablet, mobileStyles) ? null : tablet;

    const stylesBelowDesktop = tabletStyles || mobileStyles;
    const desktopStyles =
      !desktop || isEqual(desktop, stylesBelowDesktop) ? null : desktop;

    const hasMediaQueries = tabletStyles || desktopStyles;

    return {
      ...mobileStyles,
      ...(hasMediaQueries
        ? {
            '@media': {
              ...(tabletStyles ? mediaQuery.tablet(tabletStyles) : {}),
              ...(desktopStyles ? mediaQuery.desktop(desktopStyles) : {}),
            },
          }
        : {}),
    };
  };

  return { responsiveStyle };
};

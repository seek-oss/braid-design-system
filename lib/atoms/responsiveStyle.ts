import { isEqual, omit } from 'lodash';
import { StyleRule } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

const makeMediaQuery = (breakpoint: keyof typeof breakpoints) => (
  styles: CSSProps,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
};

interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
}

export const responsiveStyle = ({
  mobile,
  tablet,
  desktop,
}: ResponsiveStyle): StyleRule => {
  const mobileStyles = omit(mobile, '@media');

  const tabletStyles = !tablet || isEqual(tablet, mobileStyles) ? null : tablet;

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

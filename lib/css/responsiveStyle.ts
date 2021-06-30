import omit from 'lodash/omit';
import { StyleRule } from '@vanilla-extract/css';
import { breakpoints } from './breakpoints';

type CSSProps = Omit<StyleRule, '@media' | '@supports'>;

const makeMediaQuery = (breakpoint: keyof typeof breakpoints) => (
  styles?: CSSProps,
) =>
  !styles || Object.keys(styles).length === 0
    ? {}
    : {
        [`screen and (min-width: ${breakpoints[breakpoint]}px)`]: styles,
      };

const mediaQuery = {
  tablet: makeMediaQuery('tablet'),
  desktop: makeMediaQuery('desktop'),
  wide: makeMediaQuery('wide'),
};

interface ResponsiveStyle {
  mobile?: CSSProps;
  tablet?: CSSProps;
  desktop?: CSSProps;
  wide?: CSSProps;
}

export const responsiveStyle = ({
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

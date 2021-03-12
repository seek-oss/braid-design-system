import { isEqual, omit, mapValues } from 'lodash';
import { StyleRule, style } from '@mattsjones/css-core';

export const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
};

const makeMediaQuery = (breakpoint: keyof typeof breakpoints) => (
  styles: StyleWithoutMediaQueries,
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

type StyleWithoutMediaQueries = Omit<
  StyleRule,
  '@media' | 'selectors' | '@supports'
>;

interface ResponsiveStyle {
  mobile?: StyleWithoutMediaQueries;
  tablet?: StyleWithoutMediaQueries;
  desktop?: StyleWithoutMediaQueries;
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

export function styleMap<Key extends string | number>(
  styles: Record<Key, StyleRule>,
) {
  return mapValues(styles, (s) => style(s));
}

const subCalc = (calc: string | number) =>
  typeof calc === 'number' ? calc : calc.replace(/calc/g, '');

export const subtract = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} - ${subCalc(b)})`;

export const add = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} + ${subCalc(b)})`;

export const multiply = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} * ${subCalc(b)})`;

export const negate = (v: string | number) => multiply(v, -1);

export const divide = (a: string | number, b: string | number) =>
  `calc(${subCalc(a)} / ${subCalc(b)})`;

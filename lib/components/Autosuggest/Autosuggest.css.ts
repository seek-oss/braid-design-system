import { style } from '@mattsjones/css-core';
import { calc } from '@mattsjones/css-utils';
import { responsiveStyle } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
  background: 'black',
});

export const backdropVisible = style({
  opacity: 0.4,
});

const calcMenuHeight = (numSuggestions: number) =>
  calc(themeVars.touchableSize)
    .multiply(numSuggestions)
    .add(themeVars.space.xxsmall)
    .toString();

export const menu = style(
  responsiveStyle({
    mobile: {
      maxHeight: calcMenuHeight(6),
      overflowY: 'auto',
    },
    tablet: {
      maxHeight: calcMenuHeight(8),
    },
  }),
);

export const groupHeading = style({
  textTransform: 'uppercase',
});

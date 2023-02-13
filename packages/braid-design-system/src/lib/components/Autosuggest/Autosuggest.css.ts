import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const backdrop = style({
  width: '100vw',
  height: '100vh',
  background: 'black',
});

export const backdropVisible = style({
  opacity: 0.4,
});

const calcMenuHeight = (numSuggestions: number) =>
  calc(vars.touchableSize)
    .multiply(numSuggestions)
    .add(vars.space.xxsmall)
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

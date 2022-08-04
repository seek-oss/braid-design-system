import { style } from '@vanilla-extract/css';
import { colorModeStyle } from '../../css/colorModeStyle';
import { vars } from '../../themes/vars.css';

export const lightModeStarColor = style(
  colorModeStyle({
    lightMode: {
      color: vars.foregroundColor.rating,
    },
  }),
);

export const darkModeStarColor = style(
  colorModeStyle({
    darkMode: {
      color: vars.foregroundColor.rating,
    },
  }),
);

export const starSpacing = style({
  paddingRight: '1px',
});

export const textSpacing = style({
  paddingLeft: '0.4em',
});

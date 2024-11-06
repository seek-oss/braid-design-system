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

export const inlineFlex = style({
  display: 'inline-flex',
  gap: '1px',
});

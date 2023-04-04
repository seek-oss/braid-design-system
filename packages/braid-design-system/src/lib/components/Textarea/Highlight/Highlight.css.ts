import { style } from '@vanilla-extract/css';
import { colorModeStyle } from '../../../css/colorModeStyle';
import { vars } from '../../../themes/vars.css';

const space = 2;
const lineThickness = 2;

export const root = style({
  padding: space,
  margin: -space,
  textDecoration: 'underline',
  textDecorationStyle: 'wavy',
  textDecorationSkipInk: 'none',
  textDecorationThickness: lineThickness,
  textUnderlineOffset: 2,
  paddingBottom: lineThickness / 2,
  marginBottom: -(lineThickness / 2),
});

export const critical = style(
  colorModeStyle({
    lightMode: {
      textDecorationColor: vars.borderColor.critical,
    },
    darkMode: {
      textDecorationColor: vars.borderColor.criticalLight,
    },
  }),
);

export const caution = style({
  textDecorationColor: vars.borderColor.caution,
});

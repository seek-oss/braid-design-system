import { createVar, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

const checkboxFieldSize = vars.inlineFieldSize.small;
const menuItemCapHeight = createVar();
const crop = createVar();

export const checkboxSize = style([
  responsiveStyle({
    mobile: {
      vars: {
        [menuItemCapHeight]: vars.textSize.standard.mobile.capHeight,
        [crop]: calc(checkboxFieldSize)
          .subtract(menuItemCapHeight)
          .divide(2)
          .negate()
          .toString(),
      },
    },
    tablet: {
      vars: {
        [menuItemCapHeight]: vars.textSize.standard.tablet.capHeight,
      },
    },
  }),
  {
    height: checkboxFieldSize,
    width: checkboxFieldSize,
    marginTop: crop,
    marginBottom: crop,
  },
]);

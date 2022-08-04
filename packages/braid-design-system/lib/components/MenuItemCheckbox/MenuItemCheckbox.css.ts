import { style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const checkboxPadding = style({ padding: 2 });

const standardText = vars.textSize.standard;

const calculateSize = (capHeight: string) => calc.multiply(capHeight, 1.8);

const mobileSize = calculateSize(standardText.mobile.capHeight);
const tabletSize = calculateSize(standardText.tablet.capHeight);

export const checkboxBorder = style(
  responsiveStyle({
    mobile: {
      width: mobileSize,
      height: mobileSize,
    },
    tablet: {
      width: tabletSize,
      height: tabletSize,
    },
  }),
);

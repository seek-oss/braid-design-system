import { styleVariants } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';
import { responsiveStyle } from '../../themes/vanillaUtils';
import { vars } from '../../themes/vars.css';

export const size = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { height: calc.multiply(mobile.leading, '1px') },
    tablet: { height: calc.multiply(tablet.leading, '1px') },
  }),
);

import { styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from '../../atoms/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const size = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { height: mobile.lineHeight },
    tablet: { height: tablet.lineHeight },
  }),
);

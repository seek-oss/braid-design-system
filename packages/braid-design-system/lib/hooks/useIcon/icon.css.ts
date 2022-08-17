import { style, styleVariants } from '@vanilla-extract/css';
import { responsiveStyle } from '../../css/responsiveStyle';
import { vars } from '../../themes/vars.css';

export const size = style({
  width: '1em',
  height: '1em',
});

export const inline = style({
  verticalAlign: 'middle',
});

const uppercaseNudge = -0.105;
const lowercaseNudge = uppercaseNudge + 0.04;
const verticalCorrection = 0.06;
export const alignY = {
  uppercase: styleVariants({
    none: { top: `${uppercaseNudge}em` },
    up: { top: `${uppercaseNudge - verticalCorrection}em` },
    down: { top: `${uppercaseNudge + verticalCorrection}em` },
  }),
  lowercase: styleVariants({
    none: { top: `${lowercaseNudge}em` },
    up: { top: `${lowercaseNudge - verticalCorrection}em` },
    down: { top: `${lowercaseNudge + verticalCorrection}em` },
  }),
};

export const blockWidths = styleVariants(vars.textSize, ({ mobile, tablet }) =>
  responsiveStyle({
    mobile: { width: mobile.lineHeight },
    tablet: { width: tablet.lineHeight },
  }),
);

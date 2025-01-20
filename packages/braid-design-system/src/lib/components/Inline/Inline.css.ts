import { globalStyle, style } from '@vanilla-extract/css';

import { responsiveStyle } from '../../css/responsiveStyle';

export const fitContentMobile = style({});
export const fitContentTablet = style({});
export const fitContentDesktop = style({});
export const fitContentWide = style({});

const fitContentStyleRule = {
  flexBasis: 'auto',
  width: 'auto',
  minWidth: 0,
};

globalStyle(`${fitContentMobile} > *`, fitContentStyleRule);
globalStyle(
  `${fitContentTablet} > *`,
  responsiveStyle({ tablet: fitContentStyleRule }),
);
globalStyle(
  `${fitContentDesktop} > *`,
  responsiveStyle({ desktop: fitContentStyleRule }),
);
globalStyle(
  `${fitContentWide} > *`,
  responsiveStyle({ wide: fitContentStyleRule }),
);

import { style } from 'sku/treat';

export const outer = style(({ utils, grid, typography }) =>
  utils.responsiveStyle({
    mobile: { height: grid * typography.text.xsmall.mobile.rows },
    tablet: { height: grid * typography.text.xsmall.tablet.rows },
  }),
);

export const inner = style({
  overflow: 'hidden',
});

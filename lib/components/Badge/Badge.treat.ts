import { style } from 'sku/treat';

export const outer = style(({ utils, grid, typography }) =>
  utils.responsiveStyle({
    mobile: { height: grid * typography.text.xsmall.mobile.rows },
    tablet: { height: grid * typography.text.xsmall.tablet.rows },
  }),
);

export const bleedY = style((theme) => {
  type TextBreakpoint = keyof typeof theme.typography.text.small;
  const stylesForBreakpoint = (breakpoint: TextBreakpoint) => {
    const { rows, capHeight } = theme.typography.text.small[breakpoint];
    const lineHeight = rows * theme.grid;
    const padding = lineHeight - capHeight;

    return { margin: `${-(padding / 2)}px 0` };
  };

  return theme.utils.responsiveStyle({
    mobile: stylesForBreakpoint('mobile'),
    tablet: stylesForBreakpoint('tablet'),
  });
});

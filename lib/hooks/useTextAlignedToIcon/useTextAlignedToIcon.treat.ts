import { style } from 'sku/treat';

export const size = {
  standard: style((theme) => {
    const calculateForBreakpoint = (
      breakpoint: keyof typeof theme.typography.text.standard,
    ) => {
      const type = theme.typography.text.standard[breakpoint];
      const capHeight =
        type.size *
        (theme.typography.fontMetrics.capHeight /
          theme.typography.fontMetrics.unitsPerEm);

      const lineHeight = type.rows * theme.grid;
      const lineCrop = lineHeight - capHeight;
      const padding = lineCrop / 2;

      return {
        paddingTop: padding,
        paddingBottom: padding,
      };
    };

    return theme.utils.responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet'),
    });
  }),
};

import { style } from 'sku/treat';

export const size = {
  standard: style((theme) => {
    const calculateForBreakpoint = (
      breakpoint: keyof typeof theme.typography.text.standard,
    ) => {
      const type = theme.typography.text.standard[breakpoint];
      const lineHeight = type.rows * theme.grid;

      if ('capHeight' in type) {
        const lineCrop = lineHeight - type.capHeight;
        const padding = lineCrop / 2;

        return {
          paddingTop: padding,
          paddingBottom: padding,
        };
      }

      if ('fontSize' in type) {
        const capHeightScale =
          theme.typography.fontMetrics.capHeight /
          theme.typography.fontMetrics.unitsPerEm;
        const capHeight = type.fontSize * capHeightScale;
        const lineCrop = lineHeight - capHeight;
        const padding = (lineCrop - (lineCrop % theme.grid)) / 2;
        const nudge = -0.55; // Emulate line height centring rounding upwards

        return {
          paddingTop: padding + nudge,
          paddingBottom: padding - nudge,
        };
      }

      throw new Error('Neither `capHeight` or `fontSize` are available.');
    };

    return theme.utils.responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet'),
    });
  }),
};

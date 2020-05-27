import { style } from 'sku/treat';

export const size = {
  standard: style((theme) => {
    const calculateForBreakpoint = (
      breakpoint: keyof typeof theme.typography.text.standard,
    ) => {
      const type = theme.typography.text.standard[breakpoint];
      const capHeight = type.size * theme.typography.capHeightScale;
      const lineHeight = type.rows * theme.grid;
      const lineCrop = lineHeight - capHeight;
      const padding = (lineCrop - (lineCrop % theme.grid)) / 2;
      const nudge = -0.55; // Emulate line height centring rounding upwards

      return {
        paddingTop: padding + nudge,
        paddingBottom: padding - nudge,
      };
    };

    return theme.utils.responsiveStyle({
      mobile: calculateForBreakpoint('mobile'),
      tablet: calculateForBreakpoint('tablet'),
    });
  }),
};

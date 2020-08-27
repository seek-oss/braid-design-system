import { style } from 'sku/treat';

export const checkboxBorder = style((theme) => {
  const standardText = theme.typography.text.standard;

  const calculateSize = (capHeight: number) => {
    const scaled = capHeight * 1.8;
    return scaled - (scaled % 2);
  };

  const mobileSize = calculateSize(standardText.mobile.capHeight);
  const tabletSize = calculateSize(standardText.tablet.capHeight);

  return theme.utils.responsiveStyle({
    mobile: {
      width: mobileSize,
      height: mobileSize,
    },
    tablet: {
      width: tabletSize,
      height: tabletSize,
    },
  });
});

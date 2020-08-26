import { style } from 'sku/treat';

export const menuItem = style({
  whiteSpace: 'nowrap',
  selectors: {
    [`&::-moz-focus-inner`]: {
      border: 0,
    },
  },
});

export const checkboxRoot = style((theme) => {
  const standardText = theme.typography.text.standard;

  return theme.utils.responsiveStyle({
    mobile: { height: standardText.mobile.rows * theme.grid },
    tablet: { height: standardText.tablet.rows * theme.grid },
  });
});

export const checkboxBorder = style((theme) => {
  const standardText = theme.typography.text.standard;

  const mobileSize = Math.round(standardText.mobile.capHeight * 1.8);
  const tabletSize = Math.round(standardText.tablet.capHeight * 1.8);

  // const mobileSize = standardText.mobile.rows * theme.grid;
  // const tabletSize = standardText.tablet.rows * theme.grid;

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

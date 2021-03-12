import { style } from '@mattsjones/css-core';
import { Properties } from 'csstype';

import { responsiveStyle, styleMap } from '../../themes/nextThemeUtils';
import { themeVars } from '../../themes/themeVars.css';
import { mapToStyleProperty } from '../../utils';

const breakpoints = {
  mobile: 0,
  tablet: 740,
  desktop: 992,
};

const spaceMapToCss = (
  cssPropertyName: keyof Properties<string | number>,
  breakpoint: keyof typeof breakpoints,
) => {
  const spaceWithNone = {
    ...themeVars.space,
    none: 0,
  };

  return mapToStyleProperty(
    spaceWithNone,
    cssPropertyName,
    (value, propertyName) => {
      const styles = {
        [propertyName]: value,
      };

      const minWidth = breakpoints[breakpoint];

      return minWidth === 0
        ? styles
        : {
            '@media': {
              [`screen and (min-width: ${minWidth}px)`]: styles,
            },
          };
    },
  );
};

export const margin = {
  top: styleMap(spaceMapToCss('marginTop', 'mobile')),
  bottom: styleMap(spaceMapToCss('marginBottom', 'mobile')),
  left: styleMap(spaceMapToCss('marginLeft', 'mobile')),
  right: styleMap(spaceMapToCss('marginRight', 'mobile')),
};
export const marginTablet = {
  top: styleMap(spaceMapToCss('marginTop', 'tablet')),
  bottom: styleMap(spaceMapToCss('marginBottom', 'tablet')),
  left: styleMap(spaceMapToCss('marginLeft', 'tablet')),
  right: styleMap(spaceMapToCss('marginRight', 'tablet')),
};
export const marginDesktop = {
  top: styleMap(spaceMapToCss('marginTop', 'desktop')),
  bottom: styleMap(spaceMapToCss('marginBottom', 'desktop')),
  left: styleMap(spaceMapToCss('marginLeft', 'desktop')),
  right: styleMap(spaceMapToCss('marginRight', 'desktop')),
};

export const padding = {
  top: styleMap(spaceMapToCss('paddingTop', 'mobile')),
  bottom: styleMap(spaceMapToCss('paddingBottom', 'mobile')),
  left: styleMap(spaceMapToCss('paddingLeft', 'mobile')),
  right: styleMap(spaceMapToCss('paddingRight', 'mobile')),
};
export const paddingTablet = {
  top: styleMap(spaceMapToCss('paddingTop', 'tablet')),
  bottom: styleMap(spaceMapToCss('paddingBottom', 'tablet')),
  left: styleMap(spaceMapToCss('paddingLeft', 'tablet')),
  right: styleMap(spaceMapToCss('paddingRight', 'tablet')),
};
export const paddingDesktop = {
  top: styleMap(spaceMapToCss('paddingTop', 'desktop')),
  bottom: styleMap(spaceMapToCss('paddingBottom', 'desktop')),
  left: styleMap(spaceMapToCss('paddingLeft', 'desktop')),
  right: styleMap(spaceMapToCss('paddingRight', 'desktop')),
};

export const transform = {
  touchable: style({
    ':active': { transform: themeVars.transforms.touchable },
  }),
};

export const transition = styleMap(
  mapToStyleProperty(themeVars.transitions, 'transition'),
);

const borderRadiusRules = {
  none: '0px',
  full: '50%',
  ...themeVars.border.radius,
};
export const borderRadius = styleMap(
  mapToStyleProperty(borderRadiusRules, 'borderRadius'),
);
export const borderRadiusTablet = styleMap(
  mapToStyleProperty(borderRadiusRules, 'borderRadius', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const borderRadiusDesktop = styleMap(
  mapToStyleProperty(borderRadiusRules, 'borderRadius', (value, propertyName) =>
    responsiveStyle({
      desktop: { [propertyName]: value },
    }),
  ),
);

const widthRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
};
export const width = styleMap(mapToStyleProperty(widthRules, 'width'));

const heightRules = {
  full: '100%',
  touchable: themeVars.touchableSize,
};
export const height = styleMap(mapToStyleProperty(heightRules, 'height'));

const positionRules = {
  absolute: 'absolute',
  relative: 'relative',
  fixed: 'fixed',
};
export const position = styleMap(mapToStyleProperty(positionRules, 'position'));

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
};
export const display = styleMap(mapToStyleProperty(displayRules, 'display'));
export const displayTablet = styleMap(
  mapToStyleProperty(displayRules, 'display', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const displayDesktop = styleMap(
  mapToStyleProperty(displayRules, 'display', (value, propertyName) =>
    responsiveStyle({
      desktop: { [propertyName]: value },
    }),
  ),
);

const alignItemsRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
};
export const alignItems = styleMap(
  mapToStyleProperty(alignItemsRules, 'alignItems'),
);
export const alignItemsTablet = styleMap(
  mapToStyleProperty(alignItemsRules, 'alignItems', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const alignItemsDesktop = styleMap(
  mapToStyleProperty(alignItemsRules, 'alignItems', (value, propertyName) =>
    responsiveStyle({
      desktop: { [propertyName]: value },
    }),
  ),
);

const justifyContentRules = {
  flexStart: 'flex-start',
  center: 'center',
  flexEnd: 'flex-end',
  spaceBetween: 'space-between',
};
export const justifyContent = styleMap(
  mapToStyleProperty(justifyContentRules, 'justifyContent'),
);
export const justifyContentTablet = styleMap(
  mapToStyleProperty(
    justifyContentRules,
    'justifyContent',
    (value, propertyName) =>
      responsiveStyle({
        tablet: { [propertyName]: value },
      }),
  ),
);
export const justifyContentDesktop = styleMap(
  mapToStyleProperty(
    justifyContentRules,
    'justifyContent',
    (value, propertyName) =>
      responsiveStyle({
        desktop: { [propertyName]: value },
      }),
  ),
);

const flexDirectionRules = {
  row: 'row',
  rowReverse: 'row-reverse',
  column: 'column',
  columnReverse: 'column-reverse',
};
export const flexDirection = styleMap(
  mapToStyleProperty(flexDirectionRules, 'flexDirection'),
);
export const flexDirectionTablet = styleMap(
  mapToStyleProperty(
    flexDirectionRules,
    'flexDirection',
    (value, propertyName) =>
      responsiveStyle({
        tablet: { [propertyName]: value },
      }),
  ),
);
export const flexDirectionDesktop = styleMap(
  mapToStyleProperty(
    flexDirectionRules,
    'flexDirection',
    (value, propertyName) =>
      responsiveStyle({
        desktop: { [propertyName]: value },
      }),
  ),
);

const flexWrapRules = {
  wrap: 'wrap',
  nowrap: 'nowrap',
};
export const flexWrap = styleMap(mapToStyleProperty(flexWrapRules, 'flexWrap'));

const flexShrinkRules = {
  0: 0,
};
export const flexShrink = styleMap(
  mapToStyleProperty(flexShrinkRules, 'flexShrink'),
);

const flexGrowRules = {
  0: 0,
  1: 1,
};
export const flexGrow = styleMap(mapToStyleProperty(flexGrowRules, 'flexGrow'));

export const background = styleMap(
  mapToStyleProperty(themeVars.color.background, 'background'),
);

const { width: borderWidth, color } = themeVars.border;
export const boxShadow = styleMap({
  ...mapToStyleProperty(themeVars.shadows, 'boxShadow'),
  outlineFocus: {
    boxShadow: `0 0 0 ${borderWidth.large} ${color.focus}`,
  },
  borderField: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.field}`,
  },
  borderStandard: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.standard}`,
  },
  borderStandardInverted: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.standardInverted}`,
  },
  borderCritical: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.critical}`,
  },
  borderCriticalLarge: {
    boxShadow: `inset 0 0 0 ${borderWidth.large} ${color.critical}`,
  },
  borderCaution: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.caution}`,
  },
  borderPositive: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.positive}`,
  },
  borderInfo: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.info}`,
  },
  borderPromote: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.promote}`,
  },
  borderFormHover: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.formHover}`,
  },
  borderFormAccent: {
    boxShadow: `inset 0 0 0 ${borderWidth.standard} ${color.formAccent}`,
  },
  borderFormAccentLarge: {
    boxShadow: `inset 0 0 0 ${borderWidth.large} ${color.formAccent}`,
  },
  borderBrandAccentLarge: {
    boxShadow: `inset 0 0 0 ${borderWidth.large} ${color.brandAccent}`,
  },
  borderStandardInvertedLarge: {
    boxShadow: `inset 0 0 0 ${borderWidth.large} ${color.standardInverted}`,
  },
});

export const cursor = styleMap({
  default: { cursor: 'default' },
  pointer: { cursor: 'pointer' },
});

export const pointerEvents = styleMap({
  none: { pointerEvents: 'none' },
});

const textAlignRules = {
  left: 'left',
  center: 'center',
  right: 'right',
};

export const textAlign = styleMap(
  mapToStyleProperty(textAlignRules, 'textAlign'),
);
export const textAlignTablet = styleMap(
  mapToStyleProperty(textAlignRules, 'textAlign', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const textAlignDesktop = styleMap(
  mapToStyleProperty(textAlignRules, 'textAlign', (value, propertyName) =>
    responsiveStyle({
      desktop: { [propertyName]: value },
    }),
  ),
);

const overflowRules = {
  hidden: 'hidden',
  scroll: 'scroll',
  visible: 'visible',
  auto: 'auto',
};
export const overflow = styleMap(mapToStyleProperty(overflowRules, 'overflow'));

const minWidthRules = {
  0: '0%', // We use a percentage here so it supports IE11: https://css-tricks.com/flexbox-truncated-text/#comment-1611744
};
export const minWidth = styleMap(mapToStyleProperty(minWidthRules, 'minWidth'));

export const maxWidth = styleMap(
  mapToStyleProperty(themeVars.contentWidth, 'maxWidth'),
);

const relativePositionRules = {
  0: 0,
};

export const top = styleMap(mapToStyleProperty(relativePositionRules, 'top'));
export const bottom = styleMap(
  mapToStyleProperty(relativePositionRules, 'bottom'),
);
export const left = styleMap(mapToStyleProperty(relativePositionRules, 'left'));
export const right = styleMap(
  mapToStyleProperty(relativePositionRules, 'right'),
);

export const userSelect = styleMap({
  none: { userSelect: 'none' },
});

export const outline = styleMap({
  none: { outline: 'none' },
});

export const opacity = styleMap({
  0: { opacity: 0 },
});

const zIndexRules = {
  0: 0,
  1: 1,
  2: 2,
  dropdownBackdrop: 90,
  dropdown: 100,
  sticky: 200,
  modalBackdrop: 290,
  modal: 300,
  notification: 400,
} as const;
export const zIndex = styleMap(mapToStyleProperty(zIndexRules, 'zIndex'));

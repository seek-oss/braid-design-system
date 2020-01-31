import { style, styleMap } from 'sku/treat';
import { Properties } from 'csstype';
import omit from 'lodash/omit';
import { mapToStyleProperty } from '../../utils';
import { Theme } from 'treat/theme';

const spaceMapToCss = (
  theme: Theme,
  cssPropertyName: keyof Properties,
  breakpoint: keyof Theme['breakpoint'],
) => {
  const spaceWithNone = {
    ...theme.space,
    none: 0,
  };

  return mapToStyleProperty(
    spaceWithNone,
    cssPropertyName,
    (value, propertyName) => {
      const styles = {
        [propertyName]: value * theme.grid,
      };

      const minWidth = theme.breakpoint[breakpoint];

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
  top: styleMap(theme => spaceMapToCss(theme, 'marginTop', 'mobile')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'marginBottom', 'mobile')),
  left: styleMap(theme => spaceMapToCss(theme, 'marginLeft', 'mobile')),
  right: styleMap(theme => spaceMapToCss(theme, 'marginRight', 'mobile')),
};
export const marginTablet = {
  top: styleMap(theme => spaceMapToCss(theme, 'marginTop', 'tablet')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'marginBottom', 'tablet')),
  left: styleMap(theme => spaceMapToCss(theme, 'marginLeft', 'tablet')),
  right: styleMap(theme => spaceMapToCss(theme, 'marginRight', 'tablet')),
};
export const marginDesktop = {
  top: styleMap(theme => spaceMapToCss(theme, 'marginTop', 'desktop')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'marginBottom', 'desktop')),
  left: styleMap(theme => spaceMapToCss(theme, 'marginLeft', 'desktop')),
  right: styleMap(theme => spaceMapToCss(theme, 'marginRight', 'desktop')),
};

export const padding = {
  top: styleMap(theme => spaceMapToCss(theme, 'paddingTop', 'mobile')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'paddingBottom', 'mobile')),
  left: styleMap(theme => spaceMapToCss(theme, 'paddingLeft', 'mobile')),
  right: styleMap(theme => spaceMapToCss(theme, 'paddingRight', 'mobile')),
};
export const paddingTablet = {
  top: styleMap(theme => spaceMapToCss(theme, 'paddingTop', 'tablet')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'paddingBottom', 'tablet')),
  left: styleMap(theme => spaceMapToCss(theme, 'paddingLeft', 'tablet')),
  right: styleMap(theme => spaceMapToCss(theme, 'paddingRight', 'tablet')),
};
export const paddingDesktop = {
  top: styleMap(theme => spaceMapToCss(theme, 'paddingTop', 'desktop')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'paddingBottom', 'desktop')),
  left: styleMap(theme => spaceMapToCss(theme, 'paddingLeft', 'desktop')),
  right: styleMap(theme => spaceMapToCss(theme, 'paddingRight', 'desktop')),
};

export const transform = {
  touchable: style(({ transforms }) => ({
    ':active': { transform: transforms.touchable },
  })),
};

export const transition = styleMap(({ transitions }) =>
  mapToStyleProperty(transitions, 'transition'),
);

const borderRadiusRules = {
  full: '50%',
};
export const borderRadius = {
  ...styleMap(
    mapToStyleProperty(borderRadiusRules, 'borderRadius'),
    'borderRadius',
  ),
  ...styleMap(
    ({ border }) => mapToStyleProperty(border.radius, 'borderRadius'),
    'borderRadius',
  ),
};

const widthRules = {
  full: '100%',
};
export const width = {
  ...styleMap(mapToStyleProperty(widthRules, 'width'), 'width'),
  ...styleMap(
    theme => ({
      touchable: { width: theme.grid * theme.touchableSize },
    }),
    'width',
  ),
};

const heightRules = {
  full: '100%',
};
export const height = {
  ...styleMap(mapToStyleProperty(heightRules, 'height'), 'height'),
  ...styleMap(
    theme => ({
      touchable: { height: theme.grid * theme.touchableSize },
    }),
    'height',
  ),
};

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
export const displayTablet = styleMap(({ utils: { responsiveStyle } }) =>
  mapToStyleProperty(displayRules, 'display', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const displayDesktop = styleMap(({ utils: { responsiveStyle } }) =>
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
export const alignItemsTablet = styleMap(({ utils: { responsiveStyle } }) =>
  mapToStyleProperty(alignItemsRules, 'alignItems', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const alignItemsDesktop = styleMap(({ utils: { responsiveStyle } }) =>
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
export const justifyContentTablet = styleMap(({ utils: { responsiveStyle } }) =>
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
  ({ utils: { responsiveStyle } }) =>
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
export const flexDirectionTablet = styleMap(({ utils: { responsiveStyle } }) =>
  mapToStyleProperty(
    flexDirectionRules,
    'flexDirection',
    (value, propertyName) =>
      responsiveStyle({
        tablet: { [propertyName]: value },
      }),
  ),
);
export const flexDirectionDesktop = styleMap(({ utils: { responsiveStyle } }) =>
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
) as Record<keyof typeof flexShrinkRules, string>; // Remove this when 'styleMap' supports numbers as keys and it's been released to sku consumers

export const background = styleMap(({ color }) =>
  mapToStyleProperty(omit(color.background, 'body'), 'background'),
);

export const boxShadow = styleMap(
  ({ border: { width: borderWidth, color }, shadows }) => ({
    ...mapToStyleProperty(shadows, 'boxShadow'),
    outlineFocus: {
      boxShadow: `0 0 0 ${borderWidth.large}px ${color.focus}`,
    },
    borderStandard: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.standard}`,
    },
    borderStandardInverted: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.standardInverted}`,
    },
    borderCritical: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.critical}`,
    },
    borderFormHover: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.formHover}`,
    },
    borderFormAccent: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.formAccent}`,
    },
    borderFormAccentLarge: {
      boxShadow: `inset 0 0 0 ${borderWidth.large}px ${color.formAccent}`,
    },
    borderStandardInvertedLarge: {
      boxShadow: `inset 0 0 0 ${borderWidth.large}px ${color.standardInverted}`,
    },
  }),
);

export const cursor = styleMap({
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
export const textAlignTablet = styleMap(({ utils: { responsiveStyle } }) =>
  mapToStyleProperty(textAlignRules, 'textAlign', (value, propertyName) =>
    responsiveStyle({
      tablet: { [propertyName]: value },
    }),
  ),
);
export const textAlignDesktop = styleMap(({ utils: { responsiveStyle } }) =>
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
export const minWidth = styleMap(
  mapToStyleProperty(minWidthRules, 'minWidth'),
) as Record<keyof typeof minWidthRules, string>; // Remove this when 'styleMap' supports numbers as keys and it's been released to sku consumers

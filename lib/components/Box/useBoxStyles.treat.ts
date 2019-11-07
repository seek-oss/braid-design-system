import { style, styleMap } from 'sku/treat';
import { Properties } from 'csstype';
import { darken, lighten } from 'polished';
import { getLightVariant, isLight, mapToStyleProperty } from '../../utils';
import { Theme } from 'treat/theme';

const spaceMapToCss = (
  theme: Theme,
  cssPropertyName: keyof Properties,
  generateDesktopOnlyRules: boolean = false,
) => {
  const spaceWithNone = {
    ...theme.space,
    none: 0,
  };

  return mapToStyleProperty(
    spaceWithNone,
    cssPropertyName,
    (value, propertyName) =>
      generateDesktopOnlyRules
        ? theme.utils.desktopStyles({
            [propertyName]: value * theme.grid,
          })
        : {
            [propertyName]: value * theme.grid,
          },
  );
};

const spaceMapToDesktopCss = (
  theme: Theme,
  cssPropertyName: keyof Properties,
) => spaceMapToCss(theme, cssPropertyName, true);

export const margin = {
  top: styleMap(theme => spaceMapToCss(theme, 'marginTop')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'marginBottom')),
  left: styleMap(theme => spaceMapToCss(theme, 'marginLeft')),
  right: styleMap(theme => spaceMapToCss(theme, 'marginRight')),
};

export const marginDesktop = {
  top: styleMap(theme => spaceMapToDesktopCss(theme, 'marginTop')),
  bottom: styleMap(theme => spaceMapToDesktopCss(theme, 'marginBottom')),
  left: styleMap(theme => spaceMapToDesktopCss(theme, 'marginLeft')),
  right: styleMap(theme => spaceMapToDesktopCss(theme, 'marginRight')),
};

export const padding = {
  top: styleMap(theme => spaceMapToCss(theme, 'paddingTop')),
  bottom: styleMap(theme => spaceMapToCss(theme, 'paddingBottom')),
  left: styleMap(theme => spaceMapToCss(theme, 'paddingLeft')),
  right: styleMap(theme => spaceMapToCss(theme, 'paddingRight')),
};

export const paddingDesktop = {
  top: styleMap(theme => spaceMapToDesktopCss(theme, 'paddingTop')),
  bottom: styleMap(theme => spaceMapToDesktopCss(theme, 'paddingBottom')),
  left: styleMap(theme => spaceMapToDesktopCss(theme, 'paddingLeft')),
  right: styleMap(theme => spaceMapToDesktopCss(theme, 'paddingRight')),
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
  full: '100%',
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
export const displayDesktop = styleMap(({ utils: { desktopStyles } }) =>
  mapToStyleProperty(displayRules, 'display', (value, propertyName) =>
    desktopStyles({
      [propertyName]: value,
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
export const alignItemsDesktop = styleMap(({ utils: { desktopStyles } }) =>
  mapToStyleProperty(alignItemsRules, 'alignItems', (value, propertyName) =>
    desktopStyles({
      [propertyName]: value,
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
export const justifyContentDesktop = styleMap(({ utils: { desktopStyles } }) =>
  mapToStyleProperty(
    justifyContentRules,
    'justifyContent',
    (value, propertyName) =>
      desktopStyles({
        [propertyName]: value,
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
export const flexDirectionDesktop = styleMap(({ utils: { desktopStyles } }) =>
  mapToStyleProperty(
    flexDirectionRules,
    'flexDirection',
    (value, propertyName) =>
      desktopStyles({
        [propertyName]: value,
      }),
  ),
);

const getActiveColor = (color: string) =>
  isLight(color) ? darken(0.1, color) : darken(0.05, color);

const getHoverColor = (color: string) =>
  isLight(color) ? darken(0.05, color) : lighten(0.05, color);

export const background = styleMap(({ color }) => ({
  ...mapToStyleProperty(color.background, 'background'),
  formAccentActive: { background: getActiveColor(color.background.formAccent) },
  formAccentHover: { background: getHoverColor(color.background.formAccent) },
  brandAccentActive: {
    background: getActiveColor(color.background.brandAccent),
  },
  brandAccentHover: { background: getHoverColor(color.background.brandAccent) },
  infoLight: { background: getLightVariant(color.background.info) },
  promoteLight: { background: getLightVariant(color.background.promote) },
  criticalLight: { background: getLightVariant(color.background.critical) },
  positiveLight: { background: getLightVariant(color.background.positive) },
  neutralLight: { background: getLightVariant(color.background.neutral) },
}));

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

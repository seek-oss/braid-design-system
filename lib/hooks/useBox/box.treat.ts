import { style, styleMap, Style } from 'sku/treat';
import { Properties } from 'csstype';
import { darken, lighten } from 'polished';
import { getLightVariant, isLight, mapToStyleProperty } from '../../utils';

const spaceMapToCss = <Map extends string>(
  spaceMap: Record<Map, number>,
  scale: number,
  cssPropertyName: keyof Properties,
  desktopStyles?: (value: Style) => Style,
) => {
  const spaceMapWithNone = {
    ...spaceMap,
    none: 0,
  };

  return mapToStyleProperty(
    spaceMapWithNone,
    cssPropertyName,
    (value: number, propertyName) =>
      desktopStyles
        ? desktopStyles({
            [propertyName]: value * scale,
          })
        : {
            [propertyName]: value * scale,
          },
  );
};

export const margin = {
  top: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.row, grid.row, 'marginTop'),
  ),
  bottom: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.row, grid.row, 'marginBottom'),
  ),
  left: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.column, grid.column, 'marginLeft'),
  ),
  right: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.column, grid.column, 'marginRight'),
  ),
};

export const marginDesktop = {
  top: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.row, grid.row, 'marginTop', desktopStyles),
  ),
  bottom: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.row, grid.row, 'marginBottom', desktopStyles),
  ),
  left: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.column, grid.column, 'marginLeft', desktopStyles),
  ),
  right: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.column, grid.column, 'marginRight', desktopStyles),
  ),
};

export const padding = {
  top: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.row, grid.row, 'paddingTop'),
  ),
  bottom: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.row, grid.row, 'paddingBottom'),
  ),
  left: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.column, grid.column, 'paddingLeft'),
  ),
  right: styleMap(({ spacing, grid }) =>
    spaceMapToCss(spacing.column, grid.column, 'paddingRight'),
  ),
};

export const paddingDesktop = {
  top: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.row, grid.row, 'paddingTop', desktopStyles),
  ),
  bottom: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.row, grid.row, 'paddingBottom', desktopStyles),
  ),
  left: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.column, grid.column, 'paddingLeft', desktopStyles),
  ),
  right: styleMap(({ spacing, grid, utils: { desktopStyles } }) =>
    spaceMapToCss(spacing.column, grid.column, 'paddingRight', desktopStyles),
  ),
};

export const transform = {
  touchable: style(({ transforms }) => ({
    ':active': { transform: transforms.touchable },
  })),
};

export const transition = styleMap(({ transitions }) =>
  mapToStyleProperty(transitions, 'transition'),
);

export const borderRadius = styleMap(({ border }) =>
  mapToStyleProperty(border.radius, 'borderRadius'),
);

const widthRules = {
  full: '100%',
};
export const width = styleMap(mapToStyleProperty(widthRules, 'width'));

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

const flexDirectionRules = {
  row: 'row',
  column: 'column',
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
  criticalLight: { background: getLightVariant(color.background.critical) },
  positiveLight: { background: getLightVariant(color.background.positive) },
}));

export const boxShadow = styleMap(
  ({ border: { width: borderWidth, color } }) => ({
    outlineFocus: {
      boxShadow: `0 0 0 ${borderWidth.large}px ${color.focus}`,
    },
    borderStandard: {
      boxShadow: `inset 0 0 0 ${borderWidth.standard}px ${color.standard}`,
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
  }),
);

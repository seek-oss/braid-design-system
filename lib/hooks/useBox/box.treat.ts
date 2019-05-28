import { css, Styles, style } from 'sku/treat';
import { Properties } from 'csstype';
import { darken, lighten } from 'polished';
import { getLightVariant } from '../../utils/a11y';
import isLight from '../../utils/isLight';
import { px } from '../../utils/toUnit';
import mapToStyleProperty from '../../utils/mapToStyleProperty';

const spaceMapToCss = <Map extends string>(
  spaceMap: Record<Map, number>,
  scale: number,
  cssPropertyName: keyof Properties,
  desktopStyles?: (value: Styles) => Styles,
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
            [propertyName]: px(value * scale),
          })
        : {
            [propertyName]: px(value * scale),
          },
  );
};

export const margin = {
  top: css(({ rowSpacing, rowHeight }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'marginTop'),
  ),
  bottom: css(({ rowSpacing, rowHeight }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'marginBottom'),
  ),
  left: css(({ columnSpacing, columnWidth }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'marginLeft'),
  ),
  right: css(({ columnSpacing, columnWidth }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'marginRight'),
  ),
};

export const marginDesktop = {
  top: css(({ rowSpacing, rowHeight, utils: { desktopStyles } }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'marginTop', desktopStyles),
  ),
  bottom: css(({ rowSpacing, rowHeight, utils: { desktopStyles } }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'marginBottom', desktopStyles),
  ),
  left: css(({ columnSpacing, columnWidth, utils: { desktopStyles } }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'marginLeft', desktopStyles),
  ),
  right: css(({ columnSpacing, columnWidth, utils: { desktopStyles } }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'marginRight', desktopStyles),
  ),
};

export const padding = {
  top: css(({ rowSpacing, rowHeight }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'paddingTop'),
  ),
  bottom: css(({ rowSpacing, rowHeight }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'paddingBottom'),
  ),
  left: css(({ columnSpacing, columnWidth }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'paddingLeft'),
  ),
  right: css(({ columnSpacing, columnWidth }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'paddingRight'),
  ),
};

export const paddingDesktop = {
  top: css(({ rowSpacing, rowHeight, utils: { desktopStyles } }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'paddingTop', desktopStyles),
  ),
  bottom: css(({ rowSpacing, rowHeight, utils: { desktopStyles } }) =>
    spaceMapToCss(rowSpacing, rowHeight, 'paddingBottom', desktopStyles),
  ),
  left: css(({ columnSpacing, columnWidth, utils: { desktopStyles } }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'paddingLeft', desktopStyles),
  ),
  right: css(({ columnSpacing, columnWidth, utils: { desktopStyles } }) =>
    spaceMapToCss(columnSpacing, columnWidth, 'paddingRight', desktopStyles),
  ),
};

export const transform = {
  touchable: style(({ transforms }) => ({
    ':active': { transform: transforms.touchable },
  })),
};

export const transition = css(({ transitions }) =>
  mapToStyleProperty(transitions, 'transition'),
);

export const borderRadius = css(({ border }) =>
  mapToStyleProperty(border.radius, 'borderRadius'),
);

const widthRules = {
  full: '100%',
};
export const width = css(mapToStyleProperty(widthRules, 'width'));

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
};
export const display = css(mapToStyleProperty(displayRules, 'display'));
export const displayDesktop = css(({ utils: { desktopStyles } }) =>
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
export const flexDirection = css(
  mapToStyleProperty(flexDirectionRules, 'flexDirection'),
);
export const flexDirectionDesktop = css(({ utils: { desktopStyles } }) =>
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

export const backgroundColor = css(({ color: { background } }) => ({
  ...mapToStyleProperty(background, 'backgroundColor'),
  formAccentActive: { backgroundColor: getActiveColor(background.formAccent) },
  formAccentHover: { backgroundColor: getHoverColor(background.formAccent) },
  brandAccentActive: {
    backgroundColor: getActiveColor(background.brandAccent),
  },
  brandAccentHover: { backgroundColor: getHoverColor(background.brandAccent) },
  infoLight: { backgroundColor: getLightVariant(background.info) },
  criticalLight: { backgroundColor: getLightVariant(background.critical) },
  positiveLight: { backgroundColor: getLightVariant(background.positive) },
}));

export const boxShadow = css(({ border: { width: borderWidth, color } }) => ({
  outlineFocus: {
    boxShadow: `0 0 0 ${px(borderWidth.large)} ${color.focus}`,
  },
  borderStandard: {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${color.standard}`,
  },
  borderCritical: {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${color.critical}`,
  },
  borderFormAccent: {
    boxShadow: `inset 0 0 0 ${px(borderWidth.standard)} ${color.formAccent}`,
  },
  borderFormAccentLarge: {
    boxShadow: `inset 0 0 0 ${px(borderWidth.large)} ${color.formAccent}`,
  },
}));

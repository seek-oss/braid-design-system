import mapValues from 'lodash/mapValues';
import { css, Styles, style } from 'sku/treat';
import { Properties } from 'csstype';
import { darken, lighten } from 'polished';
import { getLightVariant } from '../../atoms/utils/a11y';
import isLight from '../../atoms/utils/isLight';
import { px } from '../../atoms/utils/toUnit';

const mapToCssRule = <Map extends string, Value extends string | number>(
  map: Record<Map, Value>,
  propertyName: keyof Properties,
  mapper?: (value: Value, propertyName: keyof Properties) => Styles,
) => {
  type MappedStyles = Record<Map, Styles>;

  return mapValues(map, (value: Value) =>
    mapper ? mapper(value, propertyName) : { [propertyName]: value },
  ) as MappedStyles;
};

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

  return mapToCssRule(
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

export const transform = {
  touchable: style(({ transforms }) => ({
    ':active': { transform: transforms.touchable },
  })),
};

export const transition = css(({ transitions }) =>
  mapToCssRule(transitions, 'transition'),
);

export const borderRadius = css(({ border }) =>
  mapToCssRule(border.radius, 'borderRadius'),
);

const widthRules = {
  full: '100%',
};
export const width = css(mapToCssRule(widthRules, 'width'));

const displayRules = {
  block: 'block',
  inline: 'inline',
  none: 'none',
  inlineBlock: 'inline-block',
  flex: 'flex',
};
export const display = css(mapToCssRule(displayRules, 'display'));
export const displayDesktop = css(({ utils: { desktopStyles } }) =>
  mapToCssRule(displayRules, 'display', (value, propertyName) =>
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
  mapToCssRule(flexDirectionRules, 'flexDirection'),
);
export const flexDirectionDesktop = css(({ utils: { desktopStyles } }) =>
  mapToCssRule(flexDirectionRules, 'flexDirection', (value, propertyName) =>
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
  ...mapToCssRule(background, 'backgroundColor'),
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

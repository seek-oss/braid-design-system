import mapValues from 'lodash/mapValues';
import { css, Styles } from 'sku/treat';
import { px } from '../../atoms/utils/toUnit';

const spacingForCssRule = <SpaceVariant extends string, Value extends number>(
  spaceMap: Record<SpaceVariant, Value>,
  mapper: (value: Value) => Styles,
) => {
  const spaceMapWithNone = {
    ...spaceMap,
    none: 0,
  };
  type MappedStyles = Record<keyof typeof spaceMapWithNone, Styles>;

  return mapValues(spaceMapWithNone, mapper) as MappedStyles;
};

export const marginTop = css(({ rowSpacing, rowHeight }) =>
  spacingForCssRule(rowSpacing, value => ({
    marginTop: px(value * rowHeight),
  })),
);
export const marginTopDesktop = css(({ rowSpacing, rowHeight, utils }) =>
  spacingForCssRule(rowSpacing, value =>
    utils.desktopStyles({
      marginTop: px(value * rowHeight),
    }),
  ),
);

export const marginBottom = css(({ rowSpacing, rowHeight }) =>
  spacingForCssRule(rowSpacing, value => ({
    marginBottom: px(value * rowHeight),
  })),
);
export const marginBottomDesktop = css(({ rowSpacing, rowHeight, utils }) =>
  spacingForCssRule(rowSpacing, value =>
    utils.desktopStyles({
      marginBottom: px(value * rowHeight),
    }),
  ),
);

export const marginLeft = css(({ columnSpacing, columnWidth }) =>
  spacingForCssRule(columnSpacing, value => ({
    marginLeft: px(value * columnWidth),
  })),
);
export const marginLeftDesktop = css(({ columnSpacing, columnWidth, utils }) =>
  spacingForCssRule(columnSpacing, value =>
    utils.desktopStyles({
      marginLeft: px(value * columnWidth),
    }),
  ),
);

export const marginRight = css(({ columnSpacing, columnWidth }) =>
  spacingForCssRule(columnSpacing, value => ({
    marginRight: px(value * columnWidth),
  })),
);
export const marginRightDesktop = css(({ columnSpacing, columnWidth, utils }) =>
  spacingForCssRule(columnSpacing, value =>
    utils.desktopStyles({
      marginRight: px(value * columnWidth),
    }),
  ),
);

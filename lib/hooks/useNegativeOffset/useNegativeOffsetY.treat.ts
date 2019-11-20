import { style, styleMap, CSSProperties } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

const beforeFirstChild = (cssProperties: CSSProperties) => ({
  selectors: {
    '&:first-child:before': cssProperties,
  },
});

export const preventCollapse = 1;
export const base = style({
  paddingTop: preventCollapse,
  ...beforeFirstChild({ content: '""', display: 'block' }),
});

export const mobile = styleMap(({ space, grid }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) =>
    beforeFirstChild({ [propertyName]: -(x * grid) - preventCollapse }),
  ),
);

export const tablet = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) =>
    utils.responsiveStyle({
      tablet: beforeFirstChild({
        [propertyName]: -(x * grid) - preventCollapse,
      }),
    }),
  ),
);

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) =>
    utils.responsiveStyle({
      desktop: beforeFirstChild({
        [propertyName]: -(x * grid) - preventCollapse,
      }),
    }),
  ),
);

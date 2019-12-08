import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const preventCollapse = 1;
export const base = style({
  paddingTop: preventCollapse,
  ...{
    ':before': { content: '""', display: 'block' },
  },
});

export const mobile = styleMap(({ space, grid }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) => ({
    ':before': {
      [propertyName]: -(x * grid) - preventCollapse,
    },
  })),
);

export const tablet = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) =>
    utils.responsiveStyle({
      tablet: {
        ':before': { [propertyName]: -(x * grid) - preventCollapse },
      },
    }),
  ),
);

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', (x, propertyName) =>
    utils.responsiveStyle({
      desktop: {
        ':before': { [propertyName]: -(x * grid) - preventCollapse },
      },
    }),
  ),
);

import { styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

const negativeMarginLeft = (grid: number, rows: number) => ({
  marginLeft: -(grid * rows),
});

export const mobile = styleMap(({ space, grid }) => ({
  none: {},
  ...mapToStyleProperty(space, 'marginLeft', (rows) =>
    negativeMarginLeft(grid, rows),
  ),
}));

export const tablet = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginLeft', (rows) =>
    utils.responsiveStyle({ tablet: negativeMarginLeft(grid, rows) }),
  ),
);

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginLeft', (rows) =>
    utils.responsiveStyle({ desktop: negativeMarginLeft(grid, rows) }),
  ),
);

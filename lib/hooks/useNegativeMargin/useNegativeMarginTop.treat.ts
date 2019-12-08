import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

const negativeMarginTop = (grid: number, rows: number) => ({
  ':before': { marginTop: -(grid * rows) },
});

export const base = style({
  paddingTop: 0.05, // Prevent margin collapse
  ':before': { content: '""', display: 'block' },
});

export const mobile = styleMap(({ space, grid }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', rows =>
    negativeMarginTop(grid, rows),
  ),
);

export const tablet = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', rows =>
    utils.responsiveStyle({ tablet: negativeMarginTop(grid, rows) }),
  ),
);

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginTop', rows =>
    utils.responsiveStyle({ desktop: negativeMarginTop(grid, rows) }),
  ),
);

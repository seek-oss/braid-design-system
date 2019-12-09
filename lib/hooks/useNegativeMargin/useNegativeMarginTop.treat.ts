import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

const preventCollapse = 1;

const negativeMarginTop = (grid: number, rows: number) => ({
  ':before': { marginTop: -(grid * rows) - preventCollapse },
});

export const base = style({
  paddingTop: preventCollapse,
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

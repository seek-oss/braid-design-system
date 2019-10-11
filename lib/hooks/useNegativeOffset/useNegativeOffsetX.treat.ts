import { styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const mobile = styleMap(({ space, grid }) => ({
  none: {},
  ...mapToStyleProperty(space, 'marginLeft', (x, propertyName) => ({
    [propertyName]: -(x * grid),
  })),
}));

export const desktop = styleMap(({ space, grid, utils }) =>
  mapToStyleProperty({ none: 0, ...space }, 'marginLeft', (x, propertyName) =>
    utils.desktopStyles({
      [propertyName]: -(x * grid),
    }),
  ),
);

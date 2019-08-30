import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const gutterOffset = styleMap(theme =>
  mapToStyleProperty(
    theme.spacing.column,
    'marginLeft',
    (space: number, propertyName) => ({
      [propertyName]: -(space * theme.grid.column),
    }),
  ),
);

export const collapse = style(({ responsiveBreakpoint }) => ({
  '@media': {
    [`screen and (max-width: ${responsiveBreakpoint - 1}px)`]: {
      marginLeft: 0,
    },
  },
}));

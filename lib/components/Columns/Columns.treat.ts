import { style, styleMap } from 'sku/treat';
import { mapToStyleProperty } from '../../utils';

export const gutterOffset = styleMap(theme =>
  mapToStyleProperty(
    theme.space,
    'marginLeft',
    (space: number, propertyName) => ({
      [propertyName]: -(space * theme.grid),
    }),
  ),
);

export const gutterOffsetDesktop = styleMap(theme => ({
  none: theme.utils.desktopStyles({ marginLeft: 0 }),
  ...mapToStyleProperty(
    theme.space,
    'marginLeft',
    (space: number, propertyName) =>
      theme.utils.desktopStyles({
        [propertyName]: -(space * theme.grid),
      }),
  ),
}));

export const collapse = style(({ responsiveBreakpoint }) => ({
  '@media': {
    [`screen and (max-width: ${responsiveBreakpoint - 1}px)`]: {
      marginLeft: 0,
    },
  },
}));

import { style, styleMap } from 'sku/treat';
import { externalGutter } from './ModalExternalGutter';

export const backdrop = style({
  background: 'rgba(0, 0, 0, .4)',
});

export const entrance = styleMap({
  center: {
    '@media': {
      'not screen and (prefers-reduced-motion)': {
        transform: 'scale(.8)',
      },
    },
  },
  right: {
    '@media': {
      'not screen and (prefers-reduced-motion)': {
        transform: 'translateX(50px)',
      },
    },
  },
});

export const modalContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const pointerEventsAll = style({
  pointerEvents: 'all',
});

export const maxSize = styleMap(({ utils, space, grid }) => ({
  center: utils.responsiveStyle({
    mobile: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[0]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[0]] * 2}px)`,
    },
    tablet: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[1]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[1]] * 2}px)`,
    },
    desktop: {
      maxHeight: `calc(100vh - ${grid * space[externalGutter[2]] * 2}px)`,
      maxWidth: `calc(100vw - ${grid * space[externalGutter[2]] * 2}px)`,
    },
  }),
  right: {
    maxHeight: '100vh',
  },
}));

export const heading = style({
  selectors: {
    ':focus &': {
      opacity: 1,
    },
  },
});

const CLOSE_ICON_SIZE = 9;
export const closePlaceholder = style({
  width: CLOSE_ICON_SIZE,
});

export const closeOffset = style((theme) => {
  const iconSize = theme.grid * theme.typography.text.standard.mobile.rows;
  const offset = (iconSize - CLOSE_ICON_SIZE) / 2;

  return {
    marginTop: -offset,
    marginRight: -offset,
  };
});

import { style } from 'sku/treat';
import { externalGutter } from './DrawerExternalGutter';

export const backdrop = style({
  background: 'rgba(0, 0, 0, .4)',
});

export const entrance = style({
  '@media': {
    'not screen and (prefers-reduced-motion)': {
      transform: 'translateX(100px)',
    },
  },
});

export const dialogContainer = style({
  maxHeight: '100vh',
  maxWidth: '100vw',
});

export const dialogContent = [
  style({
    pointerEvents: 'all',
  }),
  // style(({ utils, space, grid }) =>
  //   utils.responsiveStyle({
  //     mobile: {
  //       maxHeight: `calc(100vh - ${grid * space[externalGutter[0]] * 2}px)`,
  //       maxWidth: `calc(100vw - ${grid * space[externalGutter[0]] * 2}px)`,
  //     },
  //     tablet: {
  //       maxHeight: `calc(100vh - ${grid * space[externalGutter[1]] * 2}px)`,
  //       maxWidth: `calc(100vw - ${grid * space[externalGutter[1]] * 2}px)`,
  //     },
  //     desktop: {
  //       maxHeight: `calc(100vh - ${grid * space[externalGutter[2]] * 2}px)`,
  //       maxWidth: `calc(100vw - ${grid * space[externalGutter[2]] * 2}px)`,
  //     },
  //   }),
  // ),
];

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

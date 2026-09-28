import { style } from '@vanilla-extract/css';
import { breakpoints, vars } from 'braid-design-system/css';

export const boxGrid = style({
  display: 'grid',
  gap: vars.space.small,
  width: '100%',
  gridTemplateColumns: '1fr',
  '@media': {
    [`screen and (min-width: ${breakpoints.tablet}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [`screen and (min-width: ${breakpoints.desktop}px)`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [`screen and (min-width: ${breakpoints.wide}px)`]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    'screen and (min-width: 1600px)': {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
    'screen and (min-width: 2000px)': {
      gridTemplateColumns: 'repeat(6, 1fr)',
    },
  },
});

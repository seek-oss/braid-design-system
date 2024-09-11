import { style } from '@vanilla-extract/css';

export const virtualTouchable = style({
  position: 'relative',
  '::after': {
    content: '""',
    position: 'absolute',
    minHeight: '44px',
    minWidth: '44px',
    height: '100%',
    width: '100%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
  },
  selectors: {
    [`[data-braid-debug] &::after`]: {
      background: 'red',
      opacity: 0.2,
    },
  },
});

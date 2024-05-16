import { atoms } from 'braid-design-system/css';
import { style } from '@vanilla-extract/css';

export const isOpen = style({});

const virtualTouchable = style([
  atoms({ position: 'relative' }),
  {
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
  },
]);

export const root = style([
  {
    width: '18px',
    height: '14px',
  },
  virtualTouchable,
]);

export const bar = style({
  height: '2px',
  borderRadius: '4px',
  background: 'currentColor',
  transformOrigin: '50% 50%',
});

export const bar1 = style({
  selectors: {
    [`${isOpen} &`]: {
      transform: 'translateY(6px) rotate(45deg)',
    },
  },
});

export const bar2 = style({
  top: '6px',
});

export const bar3 = style({
  top: '12px',
  selectors: {
    [`${isOpen} &`]: {
      transform: 'translateY(-6px) rotate(-45deg)',
    },
  },
});

import { style } from '@vanilla-extract/css';

export const isOpen = style({});

export const root = style({
  width: '18px',
  height: '14px',
});

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

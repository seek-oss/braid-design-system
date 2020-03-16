import { style } from 'sku/treat';

export const isOpen = style({});
export const isHidden = style({});

export const root = style({
  width: '18px',
  height: '14px',
  border: 0,
  background: 'none',
  transition: 'all .1s ease',
  selectors: {
    [`&${isHidden}`]: {
      opacity: 0,
      pointerEvents: 'none',
    },
  },
});

export const bar = style({
  left: 0,
  right: 0,
  height: '2px',
  borderRadius: '4px',
  background: 'currentColor',
  transition: 'all .1s ease',
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
  selectors: {
    [`${isOpen} &`]: {
      opacity: 0,
    },
  },
});

export const bar3 = style({
  top: '12px',
  selectors: {
    [`${isOpen} &`]: {
      transform: 'translateY(-6px) rotate(-45deg)',
    },
  },
});

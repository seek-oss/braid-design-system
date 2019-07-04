import { style } from 'sku/treat';

export const isOpen = style({});
export const isHidden = style({});

export const root = style({
  cursor: 'pointer',
  width: '31px',
  height: '27px',
  border: 0,
  background: 'none',
  transition: 'all .1s ease',
  selectors: {
    [`&${isHidden}`]: {
      opacity: 0,
      pointerEvents: 'none',
    },
  },
  '@media': {
    'screen and (min-width: 740px)': {
      display: 'none',
    },
  },
});

export const bar = style({
  left: 0,
  right: 0,
  height: '5px',
  borderRadius: '5px',
  background: 'black',
  transition: 'all .1s ease',
  transformOrigin: '50% 50%',
});

export const bar1 = style({
  top: 0,
  selectors: {
    [`${isOpen} &`]: {
      transform: 'translateY(11px) rotate(45deg)',
    },
  },
});

export const bar2 = style({
  top: '11px',
  selectors: {
    [`${isOpen} &`]: {
      opacity: 0,
    },
  },
});

export const bar3 = style({
  top: '22px',
  selectors: {
    [`${isOpen} &`]: {
      transform: 'translateY(-11px) rotate(-45deg)',
    },
  },
});

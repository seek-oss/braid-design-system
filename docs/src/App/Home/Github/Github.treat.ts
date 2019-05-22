import { style } from 'sku/treat';

const wave = {
  '0%, 100%': {
    transform: 'rotate(0)',
  },
  '20%, 60%': {
    transform: 'rotate(-25deg)',
  },
  '40%, 80%': {
    transform: 'rotate(10deg)',
  },
};

export const root = style({});

export const octoArm = style({
  transformOrigin: '130px 106px',
  selectors: {
    [`${root}:hover &`]: {
      '@keyframes': wave,
      animationDuration: '560ms',
      animationTimingFunction: 'ease-in-out',
    },
  },
});

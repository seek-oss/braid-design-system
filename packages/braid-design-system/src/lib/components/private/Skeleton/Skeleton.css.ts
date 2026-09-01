import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '../../../themes/vars.css';

const shimmer = keyframes({
  '0%': { backgroundPosition: '240% 0' },
  '100%': { backgroundPosition: '40% 0' },
});

export const shimmerAnimation = style({
  animation: `${shimmer} 2s infinite`,
  background: `linear-gradient(90deg, ${vars.backgroundColor.neutralLight} 0%, ${vars.backgroundColor.neutralSoftHover} 28%, ${vars.backgroundColor.neutralLight} 56%)`,
  backgroundSize: '200% 100%',
  '@media': {
    'screen and (prefers-reduced-motion)': {
      animation: 'none',
    },
  },
});

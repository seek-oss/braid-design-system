import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '../../../themes/vars.css';

const bone = vars.backgroundColor.neutralLight;
const sheen = vars.backgroundColor.surface;

const shimmer = keyframes({
  '0%': { backgroundPosition: '140% 0' },
  '100%': { backgroundPosition: '-130% 0' },
});

export const shimmerAnimation = style({
  backgroundColor: bone,
  backgroundImage: `linear-gradient(90deg, ${bone} 0%, ${sheen} 28%, ${bone} 56%)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '200% 100%',
  animation: `${shimmer} 2s linear infinite`,
  '@media': {
    'screen and (prefers-reduced-motion)': {
      animation: 'none',
      backgroundImage: 'none',
    },
  },
});

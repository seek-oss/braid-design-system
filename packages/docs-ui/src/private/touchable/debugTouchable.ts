import type { StyleRule } from '@vanilla-extract/css';

export const debugTouchable = ({ after = false } = {}): StyleRule =>
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        selectors: {
          [`[data-braid-debug] &${after ? ':after' : ''}`]: {
            background: 'red',
            opacity: 0.2,
          },
        },
      };

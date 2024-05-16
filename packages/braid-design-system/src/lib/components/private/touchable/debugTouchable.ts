import type { StyleRule } from '@vanilla-extract/css';

export const debugTouchableAttrForDataProp = 'braid-debug';

export const debugTouchable = ({ after = false } = {}): StyleRule =>
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        selectors: {
          [`[data-${debugTouchableAttrForDataProp}] &${
            after ? '::after' : ''
          }`]: {
            background: 'red',
            opacity: 0.2,
          },
        },
      };

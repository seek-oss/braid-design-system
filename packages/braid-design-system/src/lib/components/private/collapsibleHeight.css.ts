import { globalStyle, style } from '@vanilla-extract/css';

import { atoms } from '../../css/atoms/atoms';

export const content = style([
  atoms({
    overflow: 'hidden',
  }),
  {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition: 'grid-template-rows 200ms ease',
    '@media': {
      'screen and (prefers-reduced-motion: reduce)': {
        transition: 'none',
      },
    },
  },
]);

export const contentOpen = style([
  atoms({ overflow: 'visible' }),
  {
    gridTemplateRows: '1fr',
    transition: 'none',
  },
]);

/**
 * Lets `0fr` collapse the row by clipping. Do not put padding on this
 * box — padding will not shrink and the close animation will jump.
 */
export const contentInner = style([
  atoms({ overflow: 'hidden' }),
  {
    minHeight: 0,
  },
]);

globalStyle(`${contentOpen} > ${contentInner}`, {
  overflow: 'visible',
});

export const contentClosed = style({
  visibility: 'hidden',
  height: 0,
});

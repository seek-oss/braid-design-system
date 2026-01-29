import { createVar, style } from '@vanilla-extract/css';

import { atoms } from '../../../../css';

/*
Fixes a bug when using -webkit-box, where the descender on the last line
of text could be cropped based on the combination of line height and
font size.
*/
const descenderCropFixOffset = '0.1em';
const negateDescenderCropFixOffset = `-${descenderCropFixOffset}`;
export const descenderCropFixForWebkitBox = style({
  marginBottom: negateDescenderCropFixOffset,
});

export const base = style([
  atoms({
    display: 'block',
    overflow: 'hidden',
    minWidth: 0,
  }),
  {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflowWrap: 'break-word',
    selectors: {
      [`${descenderCropFixForWebkitBox} &`]: {
        paddingBottom: descenderCropFixOffset,
      },
    },
  },
]);

export const lineLimit = createVar();
const lineClampSupportsQuery =
  '(display: -webkit-box) and (-webkit-line-clamp: 1)';
export const multiLine = style({
  // Can drop supports query when Edge 16 is removed from browser support policy
  '@supports': {
    [lineClampSupportsQuery]: {
      whiteSpace: 'initial',
      display: '-webkit-box',
      WebkitLineClamp: lineLimit,
      WebkitBoxOrient: 'vertical',
    },
  },
});

import { createVar, style } from '@vanilla-extract/css';
import { atoms } from '../../../../entries/css';

export const base = style([
  atoms({
    display: 'block',
    overflow: 'hidden',
    minWidth: 0,
  }),
  {
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
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
      paddingBottom: '0.1em',
    },
  },
});

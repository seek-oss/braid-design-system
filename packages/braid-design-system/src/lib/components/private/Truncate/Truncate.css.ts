import { style } from '@vanilla-extract/css';
import { atoms } from '../../../../entries/css';

export const truncate = style([
  atoms({
    display: 'block',
    overflow: 'hidden',
    minWidth: 0,
  }),
  {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
]);

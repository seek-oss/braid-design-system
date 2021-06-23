import { style } from '@vanilla-extract/css';

export const truncate = style({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
});

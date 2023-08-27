import { style, globalStyle } from '@vanilla-extract/css';

export const leftAlignedAnchors = style({});

globalStyle(`${leftAlignedAnchors} a span`, {
  textAlign: 'left',
});

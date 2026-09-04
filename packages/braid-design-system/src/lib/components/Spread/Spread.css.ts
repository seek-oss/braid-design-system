import { globalStyle, style } from '@vanilla-extract/css';

export const noFlexShrink = style({});
globalStyle(`${noFlexShrink} > *`, {
  flexShrink: 0,
});

export const fitContent = style({});
globalStyle(`${fitContent} > *`, {
  flexBasis: 'auto',
  width: 'auto',
});

export const maxWidth = style({});
globalStyle(`${maxWidth} > *`, {
  maxWidth: '100%',
});

import { globalStyle, style } from '@vanilla-extract/css';

export const fitContent = style({});

globalStyle(`${fitContent} > *`, {
  flexBasis: 'fit-content',
});

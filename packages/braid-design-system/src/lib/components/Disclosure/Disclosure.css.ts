import { globalStyle, style } from '@vanilla-extract/css';

import {
  content,
  contentClosed,
  contentInner,
  contentOpen,
} from '../private/collapsibleHeight.css';

export { content, contentClosed, contentInner, contentOpen };

// Marker class so `display: none` cannot target Accordion, which shares
// `content` + `contentClosed`. Combined with `content` to beat `display: grid`.
export const hideWhenClosed = style({});

globalStyle(`${content}${hideWhenClosed}`, {
  display: 'none',
});

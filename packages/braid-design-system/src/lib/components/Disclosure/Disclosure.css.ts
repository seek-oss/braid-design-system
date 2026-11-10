import { globalStyle, style } from '@vanilla-extract/css';

import {
  content,
  contentInner,
  contentOpen,
} from '../private/collapsibleHeight.css';

export { content, contentInner, contentOpen };

export const contentClosed = style({
  visibility: 'hidden',
  height: 0,
});

// Must beat `.content { display: grid }` (same specificity, later file is
// not enough when `display: none` is an atom).
globalStyle(`${content}${contentClosed}`, {
  display: 'none',
});

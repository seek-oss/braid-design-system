import { globalStyle } from '@vanilla-extract/css';

import {
  content,
  contentClosed,
  contentInner,
  contentOpen,
} from '../private/collapsibleHeight.css';

export { content, contentClosed, contentInner, contentOpen };

// Must beat `.content { display: grid }` (same specificity, later file is
// not enough when `display: none` is an atom).
globalStyle(`${content}${contentClosed}`, {
  display: 'none',
});

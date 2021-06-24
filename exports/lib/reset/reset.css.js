import _defineProperty from "@babel/runtime/helpers/defineProperty";
import * as __vanilla_filescope__ from '@vanilla-extract/css/fileScope';

__vanilla_filescope__.setFileScope("lib/reset/reset.css.ts", "braid-design-system");

import { style, composeStyles } from '@vanilla-extract/css';
import { hideFocusRingsDataAttribute } from '../components/private/hideFocusRings/hideFocusRingsDataAttribute';
export var base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  WebkitTapHighlightColor: 'transparent',
  selectors: _defineProperty({}, "[".concat(hideFocusRingsDataAttribute, "] &"), {
    outline: 'none'
  })
}, "base"); // HTML5 display-role reset for older browsers

const block = style({
  display: 'block'
}, "block");
const body = style({
  lineHeight: 1
}, "body");
const list = style({
  listStyle: 'none'
}, "list");
const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''"
    }
  }
}, "quote");
const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0
}, "table");
const appearance = style({
  appearance: 'none'
}, "appearance");
const field = composeStyles(block, appearance); // Custom reset rules

const mark = style({
  backgroundColor: 'transparent',
  color: 'inherit'
}, "mark");
const select = composeStyles(field, style({
  selectors: {
    '&::-ms-expand': {
      display: 'none'
    }
  }
}));
const input = composeStyles(field, style({
  selectors: {
    '&::-ms-clear': {
      display: 'none'
    },
    '&::-webkit-search-cancel-button': {
      WebkitAppearance: 'none'
    }
  }
}));
const button = style({
  background: 'none'
}, "button");
const a = style({
  textDecoration: 'none',
  color: 'inherit'
}, "a");
export var element = {
  article: block,
  aside: block,
  details: block,
  figcaption: block,
  figure: block,
  footer: block,
  header: block,
  hgroup: block,
  menu: block,
  nav: block,
  section: block,
  ul: list,
  ol: list,
  blockquote: quote,
  q: quote,
  body,
  a,
  table,
  mark,
  select,
  button,
  textarea: field,
  input
};

__vanilla_filescope__.endFileScope();
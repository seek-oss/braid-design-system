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

var block = style({
  display: 'block'
}, "block");
var body = style({
  lineHeight: 1
}, "body");
var list = style({
  listStyle: 'none'
}, "list");
var quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''"
    }
  }
}, "quote");
var table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0
}, "table");
var appearance = style({
  appearance: 'none'
}, "appearance");
var field = composeStyles(block, appearance); // Custom reset rules

var mark = style({
  backgroundColor: 'transparent',
  color: 'inherit'
}, "mark");
var select = composeStyles(field, style({
  selectors: {
    '&::-ms-expand': {
      display: 'none'
    }
  }
}));
var input = composeStyles(field, style({
  selectors: {
    '&::-ms-clear': {
      display: 'none'
    },
    '&::-webkit-search-cancel-button': {
      WebkitAppearance: 'none'
    }
  }
}));
var button = style({
  background: 'none'
}, "button");
var a = style({
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
  body: body,
  a: a,
  table: table,
  mark: mark,
  select: select,
  button: button,
  textarea: field,
  input: input
};

__vanilla_filescope__.endFileScope();
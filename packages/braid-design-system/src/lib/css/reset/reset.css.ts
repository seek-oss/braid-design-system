import { style } from '@vanilla-extract/css';

import { atomicOutlineStyleRule } from '../outlineStyle';

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
  WebkitTapHighlightColor: 'transparent',
});

// HTML5 display-role reset for older browsers
const block = style({
  display: 'block',
});

const body = style({
  lineHeight: 1,
});

const list = style({
  listStyle: 'none',
});

const quote = style({
  quotes: 'none',
  selectors: {
    '&:before, &:after': {
      content: "''",
    },
  },
});

const table = style({
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

const appearance = style({
  appearance: 'none',
});

const transparent = style({
  backgroundColor: 'transparent',
});

const focusVisible = style(atomicOutlineStyleRule());

const field = style([block, appearance, transparent, focusVisible]);

// Custom reset rules
const mark = style([
  transparent,
  {
    color: 'inherit',
  },
]);

const select = style([
  field,
  style({
    ':disabled': {
      opacity: 1,
    },
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  }),
]);

const input = style([
  field,
  style({
    selectors: {
      ['&[type="number"]']: {
        MozAppearance: 'textfield',
      },
      [[
        '&[type="number"]::-webkit-inner-spin-button',
        '&[type="number"]::-webkit-outer-spin-button',
      ].join(',')]: {
        WebkitAppearance: 'none',
        margin: 0,
      },
      '&::-ms-clear': {
        display: 'none',
      },
      '&::-webkit-search-cancel-button': {
        WebkitAppearance: 'none',
      },
    },
  }),
]);

const button = style([transparent, focusVisible]);

const a = style([
  focusVisible,
  {
    textDecoration: 'none',
    color: 'inherit',
  },
]);

export const element = {
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
  input,
};

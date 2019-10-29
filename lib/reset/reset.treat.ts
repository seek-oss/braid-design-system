import { style } from 'sku/treat';

export const base = style({
  margin: 0,
  padding: 0,
  border: 0,
  boxSizing: 'border-box',
  fontSize: '100%',
  font: 'inherit',
  verticalAlign: 'baseline',
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

const field = [block, appearance];

// Custom reset rules
const mark = style({
  backgroundColor: 'transparent',
  color: 'inherit',
});

const select = [
  ...field,
  style({
    selectors: {
      '&::-ms-expand': {
        display: 'none',
      },
    },
  }),
];

const button = style({
  background: 'none',
});

const a = style({
  textDecoration: 'none',
  color: 'inherit',
});

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
  input: field,
};

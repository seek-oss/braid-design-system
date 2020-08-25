const tag = '#99cfff';
const attribute = '#d1eaff';
const value = '#ffcfe2';
const punctuation = '#d1eaff';
const plainText = '#7b93b7';
const meta = '#aaa';
const other = '#ffdbed';
const inserted = '#96ecc9';
const deleted = '#ff99ab';

export default {
  'code[class*="language-"]': {
    whiteSpace: 'pre',
    color: plainText,
  },
  'pre[class*="language-"]': {
    whiteSpace: 'pre',
    margin: 0,
  },
  comment: {
    color: meta,
  },
  prolog: {
    color: meta,
  },
  doctype: {
    color: meta,
  },
  cdata: {
    color: meta,
  },
  punctuation: {
    color: punctuation,
  },
  property: {
    color: attribute,
  },
  tag: {
    color: tag,
  },
  boolean: {
    color: value,
  },
  number: {
    color: value,
  },
  constant: {
    color: value,
  },
  symbol: {
    color: value,
  },
  selector: {
    color: value,
  },
  'attr-name': {
    color: attribute,
  },
  string: {
    color: value,
  },
  char: {
    color: value,
  },
  builtin: {
    color: other,
  },
  operator: {
    color: other,
  },
  entity: {
    color: other,
    cursor: 'help',
  },
  url: {
    color: other,
  },
  'attr-value': {
    color: value,
  },
  keyword: {
    color: value,
  },
  regex: {
    color: other,
  },
  important: {
    color: other,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  'inserted-sign': {
    color: inserted,
  },
  'deleted-sign': {
    color: deleted,
  },
};

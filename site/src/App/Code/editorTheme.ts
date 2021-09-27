import { palette } from '../../../../lib/color/palette';

const tag = palette.blue['300'];
const attribute = palette.blue['200'];
const value = palette.crimson['200'];
const punctuation = palette.blue['200'];
const plainText = palette.seekBlue['300'];
const meta = palette.grey['400'];
const other = palette.crimson['200'];
const inserted = palette.mint['300'];
const deleted = palette.red['300'];

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

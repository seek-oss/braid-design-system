import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { flatten } from 'lodash';

const req = require.context('../components', true, /\.snippets\.tsx?$/);

export default flatten(req.keys().map(function (filename) {
  const matches = filename.match(/([a-zA-Z]+)\.snippets\.tsx?$/);

  if (!matches) {
    return [];
  }

  const snippets = req(filename).snippets;
  return snippets.map(function (snippet) {
    return _objectSpread(_objectSpread({}, snippet), {}, {
      group: snippet.group || matches[1],
      code: snippet.code.code
    });
  });
}));
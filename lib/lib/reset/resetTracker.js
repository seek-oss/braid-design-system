import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";

var _templateObject;

import dedent from 'dedent';
var resetImported = false;
export var markResetImported = function markResetImported() {
  resetImported = true;
};
export var ensureResetImported = function ensureResetImported() {
  if (!resetImported) {
    throw new Error(dedent(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      Braid components imported before reset.\n\n      Make sure to import the Braid reset module before importing any components. \n      This ensures the CSS reset does not override the component styles. \n    \n      e.g.\n\n      import 'braid-design-system/reset'; // <-- Must be first\n      import { BraidProvider, Box } from 'braid-design-system';\n    "]))));
  }
};
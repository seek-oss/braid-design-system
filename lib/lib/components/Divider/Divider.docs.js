import _jsx from "@babel/runtime/helpers/jsx";

var _Card;

import React from 'react';
import { Divider, Card, Stack, Text, Strong } from '../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Layout',
  Example: function Example() {
    return source(_Card || (_Card = /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Stack, {
      space: "xlarge"
    }, void 0, /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      tone: "secondary"
    }, void 0, "Regular weight"), /*#__PURE__*/_jsx(Divider, {})), /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      tone: "secondary"
    }, void 0, "Strong weight"), /*#__PURE__*/_jsx(Divider, {
      weight: "strong"
    }))))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Renders a semantic ", /*#__PURE__*/_jsx(Strong, {}, void 0, "hr"), " element."),
  alternatives: [{
    name: 'Stack',
    description: 'Supports rendering dividers between every stack item.'
  }]
};
export default docs;
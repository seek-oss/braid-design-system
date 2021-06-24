import _jsx from "@babel/runtime/helpers/jsx";

var _Text;

import React from 'react';
import source from '../../utils/source.macro';
import { HiddenVisually } from './HiddenVisually';
import { Text } from '../Text/Text';
var docs = {
  category: 'Layout',
  Example: function Example() {
    return source(_Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "The next sentence is only available to screen readers.", /*#__PURE__*/_jsx(HiddenVisually, {}, void 0, " Hello world."))));
  },
  alternatives: [{
    name: 'Hidden',
    description: 'For hiding content responsively.'
  }],
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Provides content to assistive technologies while hiding it from the screen.")
};
export default docs;
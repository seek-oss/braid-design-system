import _jsx from "@babel/runtime/helpers/jsx";

var _Text;

import React from 'react';
import { HiddenVisually } from './HiddenVisually';
import { Text } from '../Text/Text';
export var screenshots = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [{
    label: 'Inside Text',
    Example: function Example() {
      return _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "The next sentence is only available to screen readers.", /*#__PURE__*/_jsx(HiddenVisually, {}, void 0, " Hello world.")));
    }
  }]
};
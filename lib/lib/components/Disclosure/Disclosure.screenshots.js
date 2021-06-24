import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _Text2, _Text3;

import React, { useState } from 'react';
import { Disclosure, Text } from '..';
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Collapsed Disclosure',
    Example: function Example(_ref) {
      var id = _ref.id;
      return /*#__PURE__*/_jsx(Disclosure, {
        id: id,
        expandLabel: "Show content",
        collapseLabel: "Hide content"
      }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "Content")));
    }
  }, {
    label: 'Expanded Disclosure',
    Example: function Example(_ref2) {
      var id = _ref2.id;

      var _useState = useState(true),
          _useState2 = _slicedToArray(_useState, 2),
          expanded = _useState2[0],
          setExpanded = _useState2[1];

      return /*#__PURE__*/_jsx(Disclosure, {
        id: id,
        expandLabel: "Show content",
        collapseLabel: "Hide content",
        expanded: expanded,
        onToggle: setExpanded
      }, void 0, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "Content")));
    }
  }, {
    label: 'Expanded Disclosure with custom space',
    Example: function Example(_ref3) {
      var id = _ref3.id;

      var _useState3 = useState(true),
          _useState4 = _slicedToArray(_useState3, 2),
          expanded = _useState4[0],
          setExpanded = _useState4[1];

      return /*#__PURE__*/_jsx(Disclosure, {
        id: id,
        expandLabel: "Show content",
        collapseLabel: "Hide content",
        space: "small",
        expanded: expanded,
        onToggle: setExpanded
      }, void 0, _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {}, void 0, "Content")));
    }
  }]
};
import _jsx from "@babel/runtime/helpers/jsx";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

var _Text, _Text2, _Tiles;

import React, { Fragment } from 'react';
import { Tiles, Box, Text } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
var exampleRows = 3;
export var screenshots = {
  screenshotWidths: [320, 768],
  screenshotOnlyInWireframe: true,
  examples: [].concat(_toConsumableArray([1, 2, 3, 4, 5, 6].map(function (columns) {
    return {
      label: "".concat(columns, " column").concat(columns === 1 ? '' : 's'),
      Example: function Example() {
        return /*#__PURE__*/_jsx(Tiles, {
          space: "small",
          columns: columns
        }, void 0, _toConsumableArray(new Array(columns * exampleRows)).map(function (_, i) {
          return /*#__PURE__*/_jsx(Placeholder, {
            height: 40
          }, i);
        }));
      }
    };
  })), [{
    label: 'Responsive columns (e.g. 1 on mobile, 4 from tablet upwards',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Tiles, {
        space: "xsmall",
        columns: [1, 4]
      }, void 0, _toConsumableArray(new Array(4 * exampleRows)).map(function (_, i) {
        return /*#__PURE__*/_jsx(Placeholder, {
          height: 40
        }, i);
      }));
    }
  }, {
    label: 'Dividers (when in a single column)',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Tiles, {
        space: ['none', 'small'],
        columns: [1, 2],
        dividers: true
      }, void 0, _toConsumableArray(new Array(2 * exampleRows)).map(function (_, i) {
        return /*#__PURE__*/_jsx(Box, {
          background: "card",
          padding: "gutter"
        }, i, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "Tile")));
      }));
    }
  }, {
    label: 'Strong dividers (when in a single column)',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Tiles, {
        space: ['none', 'small'],
        columns: [1, 2],
        dividers: "strong"
      }, void 0, _toConsumableArray(new Array(2 * exampleRows)).map(function (_, i) {
        return /*#__PURE__*/_jsx(Box, {
          background: "card",
          padding: "gutter"
        }, i, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "Tile")));
      }));
    }
  }, {
    label: 'Test - Should flatten fragments (6 tiles should be evenly spaced)',
    Example: function Example() {
      return _Tiles || (_Tiles = /*#__PURE__*/_jsx(Tiles, {
        space: "small",
        columns: 3
      }, void 0, /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })), /*#__PURE__*/_jsx(Placeholder, {
        height: 40
      })));
    }
  }])
};
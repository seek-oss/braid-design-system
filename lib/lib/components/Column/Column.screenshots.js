import _jsx from "@babel/runtime/helpers/jsx";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";

var _Columns, _Column, _Fragment;

import React, { Fragment } from 'react';
import { Columns, Column, Box, Stack } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { width as columnWidths } from './Column.css';
var widths = ['content'].concat(_toConsumableArray(Object.keys(columnWidths)));
export var screenshots = {
  screenshotWidths: [320],
  screenshotOnlyInWireframe: true,
  examples: [{
    label: 'Standard Columns',
    Example: function Example() {
      return _Columns || (_Columns = /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60
      })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60
      })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60
      }))));
    }
  }, {
    label: 'Available widths',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Stack, {
        space: "medium"
      }, void 0, widths.map(function (width) {
        return /*#__PURE__*/_jsx(Columns, {
          space: "small"
        }, width, /*#__PURE__*/_jsx(Column, {
          width: width
        }, void 0, /*#__PURE__*/_jsx(Placeholder, {
          height: 60,
          label: width
        })), _Column || (_Column = /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
          height: 60,
          label: "Fluid"
        }))));
      }));
    }
  }, {
    label: 'Gutter align',
    Example: function Example() {
      return _Fragment || (_Fragment = /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Fluid"
      })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Fluid"
      })))), /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {
        width: "1/2"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBD"
      })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Fluid"
      })))), /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {
        width: "1/2"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBD"
      })), /*#__PURE__*/_jsx(Column, {
        width: "1/2"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBD"
      })))), /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {
        width: "1/4"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBC"
      })), /*#__PURE__*/_jsx(Column, {
        width: "1/4"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBC"
      })), /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Fluid"
      })))), /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Column, {
        width: "1/3"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\u2153"
      })), /*#__PURE__*/_jsx(Column, {
        width: "1/4"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBC"
      })), /*#__PURE__*/_jsx(Column, {
        width: "content"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Content"
      })))), /*#__PURE__*/_jsx(Box, {
        marginBottom: "medium"
      }, void 0, /*#__PURE__*/_jsx(Columns, {
        space: "small",
        reverse: true
      }, void 0, /*#__PURE__*/_jsx(Column, {
        width: "1/3"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\u2153"
      })), /*#__PURE__*/_jsx(Column, {
        width: "1/4"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "\xBC"
      })), /*#__PURE__*/_jsx(Column, {
        width: "content"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 60,
        label: "Content"
      }))))));
    }
  }]
};
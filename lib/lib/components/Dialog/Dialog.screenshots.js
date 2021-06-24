import _jsx from "@babel/runtime/helpers/jsx";

var _Placeholder, _Placeholder2, _Stack, _Placeholder3, _Placeholder4, _Placeholder5, _Placeholder6, _Placeholder7, _Placeholder8, _Placeholder9;

import React from 'react';
import { Inline, Stack, Box } from '../';
import { Placeholder } from '../../playroom/components';
import { DialogContent } from './Dialog';
export var screenshots = {
  screenshotWidths: [320, 1200],
  examples: [{
    label: 'Default layout',
    Example: function Example(_ref) {
      var id = _ref.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Default test",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })));
    }
  }, {
    label: 'Illustration layout',
    Example: function Example(_ref2) {
      var id = _ref2.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Illustration test",
        illustration: _Placeholder2 || (_Placeholder2 = /*#__PURE__*/_jsx(Placeholder, {
          height: 150,
          width: 150,
          shape: "round",
          label: "Illustration"
        })),
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
        space: "xlarge",
        align: "center"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        width: "100%",
        height: 100
      }), /*#__PURE__*/_jsx(Inline, {
        space: "small"
      }, void 0, /*#__PURE__*/_jsx(Placeholder, {
        height: 44,
        width: 80,
        label: "OK"
      }), /*#__PURE__*/_jsx(Placeholder, {
        height: 44,
        width: 80,
        label: "Cancel"
      })))));
    }
  }, {
    label: 'Layout with a description',
    Example: function Example(_ref3) {
      var id = _ref3.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Description test",
        description: _Placeholder3 || (_Placeholder3 = /*#__PURE__*/_jsx(Placeholder, {
          height: "auto",
          width: "100%",
          label: "Description"
        })),
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder4 || (_Placeholder4 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%"
      })));
    }
  }, {
    label: 'Layout: Content width',
    Example: function Example(_ref4) {
      var id = _ref4.id;
      return /*#__PURE__*/_jsx(Box, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, void 0, /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Content-sized",
        width: "content",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder5 || (_Placeholder5 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: 200,
        label: "200px wide"
      }))));
    }
  }, {
    label: 'Layout: Xsmall width',
    Example: function Example(_ref5) {
      var id = _ref5.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Xsmall",
        width: "xsmall",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder6 || (_Placeholder6 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%",
        label: "Xsmall Dialog"
      })));
    }
  }, {
    label: 'Layout: Small width',
    Example: function Example(_ref6) {
      var id = _ref6.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Small",
        width: "small",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder7 || (_Placeholder7 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%",
        label: "Small Dialog"
      })));
    }
  }, {
    label: 'Layout: Medium width',
    Example: function Example(_ref7) {
      var id = _ref7.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Medium",
        width: "medium",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder8 || (_Placeholder8 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%",
        label: "Medium Dialog"
      })));
    }
  }, {
    label: 'Layout:: Large width',
    Example: function Example(_ref8) {
      var id = _ref8.id;
      return /*#__PURE__*/_jsx(DialogContent, {
        id: id,
        title: "Large",
        width: "large",
        onClose: function onClose() {},
        scrollLock: false
      }, void 0, _Placeholder9 || (_Placeholder9 = /*#__PURE__*/_jsx(Placeholder, {
        height: 100,
        width: "100%",
        label: "Large Dialog"
      })));
    }
  }]
};
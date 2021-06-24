import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var _Badge, _Badge2, _Text, _Text2;

import React, { useState } from 'react';
import { Badge, Radio, Text } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Standard Radio Button',
    Example: function Example(_ref) {
      var id = _ref.id;

      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: state,
        onChange: function onChange() {
          return setState(!state);
        },
        label: "Label"
      });
    }
  }, {
    label: 'Checked Radio Button',
    Example: function Example(_ref2) {
      var id = _ref2.id,
          handler = _ref2.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: true,
        onChange: handler,
        label: "Label"
      });
    }
  }, {
    label: 'Disabled Radio Button',
    background: 'card',
    Example: function Example(_ref3) {
      var id = _ref3.id,
          handler = _ref3.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        disabled: true,
        checked: false,
        onChange: handler,
        label: "Label"
      });
    }
  }, {
    label: 'Critical Radio Button',
    Example: function Example(_ref4) {
      var id = _ref4.id,
          handler = _ref4.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: false,
        onChange: handler,
        label: "Label",
        tone: "critical"
      });
    }
  }, {
    label: 'Radio Button with description',
    Example: function Example(_ref5) {
      var id = _ref5.id,
          handler = _ref5.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: false,
        onChange: handler,
        label: "Label",
        description: "Extra information about the field"
      });
    }
  }, {
    label: 'Radio Button with a Badge',
    Example: function Example(_ref6) {
      var id = _ref6.id,
          handler = _ref6.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: false,
        onChange: handler,
        label: "Label",
        badge: _Badge || (_Badge = /*#__PURE__*/_jsx(Badge, {
          tone: "positive",
          weight: "strong"
        }, void 0, "New"))
      });
    }
  }, {
    label: 'Radio Button with a Badge and description',
    Example: function Example(_ref7) {
      var id = _ref7.id,
          handler = _ref7.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: false,
        onChange: handler,
        label: "Label",
        badge: _Badge2 || (_Badge2 = /*#__PURE__*/_jsx(Badge, {
          tone: "positive",
          weight: "strong"
        }, void 0, "New")),
        description: "Extra information about the field"
      });
    }
  }, {
    label: 'Radio Button with nested content visible only when checked',
    Example: function Example(_ref8) {
      var id = _ref8.id;

      var _useState3 = useState(true),
          _useState4 = _slicedToArray(_useState3, 2),
          state = _useState4[0],
          setState = _useState4[1];

      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: state,
        onChange: function onChange() {
          return setState(!state);
        },
        label: "Label"
      }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "This text is visible when the radio button is checked.")));
    }
  }, {
    label: 'Radio Button with nested content and description',
    Example: function Example(_ref9) {
      var id = _ref9.id,
          handler = _ref9.handler;
      return /*#__PURE__*/_jsx(Radio, {
        id: id,
        checked: true,
        onChange: handler,
        label: "Label",
        description: "Extra information about the field"
      }, void 0, _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {}, void 0, "This text is visible when the radio button is checked.")));
    }
  }]
};
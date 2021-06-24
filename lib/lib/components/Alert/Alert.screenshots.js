import _jsx from "@babel/runtime/helpers/jsx";

var _Alert, _Alert2, _Text, _Alert3, _Alert4, _Alert5, _Alert6, _Alert7, _Alert8, _Alert9, _Alert10, _Alert11;

import React from 'react';
import { Alert, Text, Stack, TextLink, List } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Info Alert',
    Example: function Example() {
      return _Alert || (_Alert = /*#__PURE__*/_jsx(Alert, {
        tone: "info"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an important piece of information.")));
    }
  }, {
    label: 'Info Alert Inside Card',
    background: 'card',
    Example: function Example() {
      return _Alert2 || (_Alert2 = /*#__PURE__*/_jsx(Alert, {
        tone: "info"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an important piece of information.")));
    }
  }, {
    label: 'Dismissible alert',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Alert, {
        tone: "info",
        onClose: function onClose() {},
        closeLabel: "Close info alert"
      }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {}, void 0, "This is an important piece of information.")));
    }
  }, {
    label: 'Alert with rich content',
    Example: function Example() {
      return _Alert3 || (_Alert3 = /*#__PURE__*/_jsx(Alert, {
        tone: "info"
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an important piece of information with a", ' ', /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "TextLink.")), /*#__PURE__*/_jsx(List, {
        space: "medium"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 1"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 2"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 3")))));
    }
  }, {
    label: 'Promote Alert',
    Example: function Example() {
      return _Alert4 || (_Alert4 = /*#__PURE__*/_jsx(Alert, {
        tone: "promote"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a promoted piece of information.")));
    }
  }, {
    label: 'Promote Alert Inside Card',
    background: 'card',
    Example: function Example() {
      return _Alert5 || (_Alert5 = /*#__PURE__*/_jsx(Alert, {
        tone: "promote"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a promoted piece of information.")));
    }
  }, {
    label: 'Caution Alert',
    Example: function Example() {
      return _Alert6 || (_Alert6 = /*#__PURE__*/_jsx(Alert, {
        tone: "caution"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a cautionary piece of information.")));
    }
  }, {
    label: 'Caution Alert Inside Card',
    background: 'card',
    Example: function Example() {
      return _Alert7 || (_Alert7 = /*#__PURE__*/_jsx(Alert, {
        tone: "caution"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a cautionary piece of information.")));
    }
  }, {
    label: 'Critical Alert',
    Example: function Example() {
      return _Alert8 || (_Alert8 = /*#__PURE__*/_jsx(Alert, {
        tone: "critical"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a critical piece of information.")));
    }
  }, {
    label: 'Critical Alert Inside Card',
    background: 'card',
    Example: function Example() {
      return _Alert9 || (_Alert9 = /*#__PURE__*/_jsx(Alert, {
        tone: "critical"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a critical piece of information.")));
    }
  }, {
    label: 'Positive Alert',
    Example: function Example() {
      return _Alert10 || (_Alert10 = /*#__PURE__*/_jsx(Alert, {
        tone: "positive"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a positive piece of information.")));
    }
  }, {
    label: 'Positive Alert Inside Card',
    background: 'card',
    Example: function Example() {
      return _Alert11 || (_Alert11 = /*#__PURE__*/_jsx(Alert, {
        tone: "positive"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a positive piece of information.")));
    }
  }]
};
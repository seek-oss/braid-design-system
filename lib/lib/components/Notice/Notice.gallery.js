import _jsx from "@babel/runtime/helpers/jsx";

var _Notice, _Notice2, _Notice3, _Notice4, _Notice5;

import React from 'react';
import { Notice, Text, Stack, TextLink, List } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Promote',
  Example: function Example() {
    return source(_Notice || (_Notice = /*#__PURE__*/_jsx(Notice, {
      tone: "promote"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a promoted message."))));
  }
}, {
  label: 'Info',
  Example: function Example() {
    return source(_Notice2 || (_Notice2 = /*#__PURE__*/_jsx(Notice, {
      tone: "info"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message."))));
  }
}, {
  label: 'Positive',
  Example: function Example() {
    return source(_Notice3 || (_Notice3 = /*#__PURE__*/_jsx(Notice, {
      tone: "positive"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a positive message."))));
  }
}, {
  label: 'Critical',
  Example: function Example() {
    return source(_Notice4 || (_Notice4 = /*#__PURE__*/_jsx(Notice, {
      tone: "critical"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is a critical message."))));
  }
}, {
  label: 'With rich content',
  Example: function Example() {
    return source(_Notice5 || (_Notice5 = /*#__PURE__*/_jsx(Notice, {
      tone: "info"
    }, void 0, /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This is an informative message with a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "#"
    }, void 0, "TextLink.")), /*#__PURE__*/_jsx(List, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 1"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 2"), /*#__PURE__*/_jsx(Text, {}, void 0, "Bullet 3"))))));
  }
}];
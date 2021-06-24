import _jsx from "@babel/runtime/helpers/jsx";

var _Stack, _Stack2, _Text, _Text2, _Text3, _Text4, _Stack3;

import React from 'react';
import { Box, Text, Stack } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Sizes',
  Example: function Example() {
    return source(_Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      size: "large"
    }, void 0, "Large"), /*#__PURE__*/_jsx(Text, {
      size: "standard"
    }, void 0, "Standard (default)"), /*#__PURE__*/_jsx(Text, {
      size: "small"
    }, void 0, "Small"), /*#__PURE__*/_jsx(Text, {
      size: "xsmall"
    }, void 0, "Xsmall"))));
  }
}, {
  label: 'Weights',
  Example: function Example() {
    return source(_Stack2 || (_Stack2 = /*#__PURE__*/_jsx(Stack, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      weight: "regular"
    }, void 0, "Regular (default)"), /*#__PURE__*/_jsx(Text, {
      weight: "medium"
    }, void 0, "Medium"), /*#__PURE__*/_jsx(Text, {
      weight: "strong"
    }, void 0, "Strong"))));
  }
}, {
  label: 'Alignment',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Stack, {
      space: "large",
      dividers: true
    }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {
      align: "left"
    }, void 0, "Left (default)")), _Text2 || (_Text2 = /*#__PURE__*/_jsx(Text, {
      align: "center"
    }, void 0, "Center")), _Text3 || (_Text3 = /*#__PURE__*/_jsx(Text, {
      align: "right"
    }, void 0, "Right")), /*#__PURE__*/_jsx(Text, {
      align: {
        mobile: 'center',
        tablet: 'left'
      }
    }, void 0, "Center on mobile")));
  }
}, {
  label: 'Truncation',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Box, {
      style: {
        width: 90
      }
    }, void 0, _Text4 || (_Text4 = /*#__PURE__*/_jsx(Text, {
      truncate: true
    }, void 0, "Long piece of text"))));
  }
}, {
  label: 'Tones',
  background: 'card',
  Example: function Example() {
    return source(_Stack3 || (_Stack3 = /*#__PURE__*/_jsx(Stack, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      tone: "neutral"
    }, void 0, "neutral (default)"), /*#__PURE__*/_jsx(Text, {
      tone: "secondary"
    }, void 0, "secondary"), /*#__PURE__*/_jsx(Text, {
      tone: "promote"
    }, void 0, "promote"), /*#__PURE__*/_jsx(Text, {
      tone: "info"
    }, void 0, "info"), /*#__PURE__*/_jsx(Text, {
      tone: "positive"
    }, void 0, "positive"), /*#__PURE__*/_jsx(Text, {
      tone: "critical"
    }, void 0, "critical"))));
  }
}];
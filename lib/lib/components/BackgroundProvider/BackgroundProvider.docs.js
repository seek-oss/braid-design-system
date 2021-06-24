import _jsx from "@babel/runtime/helpers/jsx";

var _BackgroundProvider, _BackgroundProvider2, _BackgroundProvider3;

import React from 'react';
import { BackgroundProvider, Text, Box, TextLink, Strong, Stack } from '../../../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Logic',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Box, {
      padding: "medium",
      style: {
        backgroundColor: '#3d0080'
      }
    }, void 0, _BackgroundProvider || (_BackgroundProvider = /*#__PURE__*/_jsx(BackgroundProvider, {
      type: "dark"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text on custom dark background")))));
  },
  alternatives: [],
  additional: [{
    label: 'Development considerations',
    description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Text, {}, void 0, "When ", /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text"
    }, void 0, "Text"), " placed on a dark background, it may be inverted based on the", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Text#contrast"
    }, void 0, "contrast rules of Text.")), /*#__PURE__*/_jsx(Text, {}, void 0, "If using custom backgrounds or images, the behaviour no longer works. This can be reinstated by wrapping the content with a", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "BackgroundProvider"), " and specifying whether it is", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "dark"), " or ", /*#__PURE__*/_jsx(Strong, {}, void 0, "light"), ".")),
    Example: function Example() {
      return source( /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, /*#__PURE__*/_jsx(Box, {
        padding: "medium",
        style: {
          backgroundColor: '#3d0080'
        }
      }, void 0, _BackgroundProvider2 || (_BackgroundProvider2 = /*#__PURE__*/_jsx(BackgroundProvider, {
        type: "dark"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text on custom dark background")))), /*#__PURE__*/_jsx(Box, {
        padding: "medium",
        style: {
          backgroundColor: '#c8cfff'
        }
      }, void 0, _BackgroundProvider3 || (_BackgroundProvider3 = /*#__PURE__*/_jsx(BackgroundProvider, {
        type: "light"
      }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Text on custom light background"))))));
    }
  }]
};
export default docs;
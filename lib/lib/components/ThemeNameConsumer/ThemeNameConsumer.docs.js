import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import source from '../../utils/source.macro';
import { ThemeNameConsumer, Text, TextLink, Strong } from '../../../';
var docs = {
  category: 'Logic',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(ThemeNameConsumer, {}, void 0, function (themeName) {
      return /*#__PURE__*/_jsx(Text, {}, void 0, "The active theme is ", /*#__PURE__*/_jsx(Strong, {}, void 0, themeName), ".");
    }));
  },
  alternatives: [{
    name: 'useThemeName',
    description: 'The hook version.'
  }],
  additional: [{
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Retrieves the display name of the current theme from context. This pre-dated hooks, so chances are most consumers would prefer the", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/useThemeName"
    }, void 0, "useThemeName"), ' ', "hook.")
  }]
};
export default docs;
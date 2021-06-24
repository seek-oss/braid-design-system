import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { useThemeName, Text, Strong } from '../../../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Logic',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Text, {}, void 0, "The active theme is ", /*#__PURE__*/_jsx(Strong, {}, void 0, useThemeName()), "."));
  },
  alternatives: [{
    name: 'ThemeNameConsumer',
    description: 'The component version.'
  }],
  additional: [{
    label: 'Development considerations',
    playroom: false,
    showCodeByDefault: true,
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Retrieves the display name of the current theme from context."),
    code: "\n        const themeName = useThemeName();\n\n        return (\n          <Text>\n            The active theme is <Strong>{themeName}</Strong>.\n          </Text>\n        );\n      "
  }]
};
export default docs;
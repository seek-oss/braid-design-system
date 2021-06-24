import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import source from '../../utils/source.macro';
import { useColor, Alert, Text, TextLink } from '../../../';
var docs = {
  category: 'Logic',
  description: /*#__PURE__*/_jsx(Alert, {
    tone: "caution"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "You should only use this Hook if you\u2019re unable to use", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/Box"
  }, void 0, "Box"), " or", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/css/vars"
  }, void 0, "vars."))),
  Example: function Example() {
    return source( /*#__PURE__*/_jsx("div", {
      style: {
        height: 50,
        width: 50,
        background: useColor().background.brandAccent
      }
    }));
  },
  alternatives: [{
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Development considerations',
    playroom: false,
    showCodeByDefault: true,
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Retrieves the semantic colour palette of the current theme from context."),
    code: "\n        const { background } = useColor();\n\n        return (\n          <div\n            style={{\n              width: 50,\n              height: 50,\n              backgroundColor: background.brandAccent,\n            }}\n          />\n        );\n      "
  }]
};
export default docs;
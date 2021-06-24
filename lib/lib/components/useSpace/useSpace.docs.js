import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import source from '../../utils/source.macro';
import { useSpace, Stack, Alert, Text, TextLink, Strong } from '../../../';
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
    return source( /*#__PURE__*/_jsx(Stack, {
      space: "medium"
    }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Current grid size is: ", /*#__PURE__*/_jsx(Strong, {}, void 0, useSpace().grid), "px."), /*#__PURE__*/_jsx(Text, {}, void 0, "Xxlarge space spans ", /*#__PURE__*/_jsx(Strong, {}, void 0, useSpace().space.xxlarge), " rows.")));
  },
  alternatives: [{
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Development considerations',
    playroom: false,
    showCodeByDefault: true,
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Retrieves the space and grid definitions of the current theme from context."),
    code: "\n        const { space, grid } = useSpace();\n\n        return (\n          <Placeholder\n            width={grid * space.xxlarge}\n            height={grid * space.xxlarge}\n          />\n        );\n      "
  }]
};
export default docs;
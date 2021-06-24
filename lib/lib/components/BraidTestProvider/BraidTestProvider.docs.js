import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { seekAnz } from '../../themes';
import { Stack, Text, Strong, TextLink, Alert } from '..';
var docs = {
  category: 'Logic',
  description: /*#__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Alternative to", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "/components/BraidProvider"
  }, void 0, "BraidProvider"), " for unit test environments."), /*#__PURE__*/_jsx(Alert, {}, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This provider should ", /*#__PURE__*/_jsx(Strong, {}, void 0, "not"), " be used in production code."))),
  alternatives: [{
    name: 'BraidProvider',
    description: 'For production apps with a single theme.'
  }, {
    name: 'BraidLoadableProvider',
    description: 'For production apps with multiple themes.'
  }],
  additional: [{
    label: 'Specifying a theme',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Providing ", /*#__PURE__*/_jsx(Strong, {}, void 0, "themeName"), " allows you to hardcode a specific theme for a given test context."),
    code: "\n        import { BraidTestProvider } from 'braid-design-system';\n        import { render } from 'react-testing-library';\n\n        it('should do something', () => {\n          render(\n            <BraidTestProvider themeName=\"".concat(seekAnz.name, "\">\n              ...\n            </BraidTestProvider>\n          );\n        });\n      ")
  }, {
    label: 'Specifying a breakpoint',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Providing ", /*#__PURE__*/_jsx(Strong, {}, void 0, "breakpoint"), " allows you to hardcode a specific breakpoint for a given test context."),
    code: "\n        import { BraidTestProvider } from 'braid-design-system';\n        import { render } from 'react-testing-library';\n\n        it('should do something', () => {\n          render(\n            <BraidTestProvider breakpoint=\"tablet\">\n              ...\n            </BraidTestProvider>\n          );\n        });\n      "
  }]
};
export default docs;
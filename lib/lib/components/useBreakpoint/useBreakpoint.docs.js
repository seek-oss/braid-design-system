import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { useBreakpoint, Alert, Strong, Text } from '../../../';
import source from '../../utils/source.macro';
var docs = {
  category: 'Logic',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Text, {}, void 0, "Current breakpoint: ", /*#__PURE__*/_jsx(Strong, {}, void 0, useBreakpoint())));
  },
  description: /*#__PURE__*/_jsx(Alert, {
    tone: "caution"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This Hook returns ", /*#__PURE__*/_jsx(Strong, {}, void 0, "null"), " when rendering server-side or statically rendering, so you should avoid this Hook where possible. Responsive props and media queries are preferable in most cases.")),
  alternatives: [{
    name: 'Box',
    description: 'For custom layouts.'
  }],
  additional: [{
    label: 'Development considerations',
    playroom: false,
    showCodeByDefault: true,
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "This Hook will return the breakpoint the browser viewport currently falls within (", /*#__PURE__*/_jsx(Strong, {}, void 0, "mobile"), ", ", /*#__PURE__*/_jsx(Strong, {}, void 0, "tablet"), " or", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "desktop"), "). As this can only be calculated in the browser, the value will also be ", /*#__PURE__*/_jsx(Strong, {}, void 0, "null"), " when rendering server-side or statically rendering. Window resizing is supported."),
    code: "\n        const breakpoint = useBreakpoint();\n\n        return <Text>Current breakpoint: {breakpoint}</Text>;\n      "
  }]
};
export default docs;
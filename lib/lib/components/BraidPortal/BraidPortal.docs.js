import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Text, Strong, Alert } from '..';
var docs = {
  category: 'Logic',
  description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Alert, {
    tone: "caution"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "This component cannot be server-rendered. It should only be rendered based on state that is updated client-side by user actions.")), /*#__PURE__*/_jsx(Text, {}, void 0, "Declaratively render a React portal while maintaining the current Braid theme.")),
  alternatives: [],
  additional: [{
    code: "\n        <BraidPortal>\n          ...\n        </BraidPortal>\n      "
  }, {
    label: 'Choosing a container',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Portals are rendered to the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "body"), " element by default, but this can be configured via the ", /*#__PURE__*/_jsx(Strong, {}, void 0, "container"), " prop."),
    code: "\n        <BraidPortal container={someRef.current}>\n          ...\n        </BraidPortal>\n      "
  }]
};
export default docs;
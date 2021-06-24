import _jsx from "@babel/runtime/helpers/jsx";

var _Stack;

import React from 'react';
import source from '../../utils/source.macro';
import { FieldLabel, Stack, Text, TextLink, Strong, Box, Hidden, Alert, List } from '../';
import { Placeholder } from '../../playroom/components';
var docs = {
  category: 'Content',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Box, {
      style: {
        maxWidth: 400
      }
    }, void 0, _Stack || (_Stack = /*#__PURE__*/_jsx(Stack, {
      space: "small"
    }, void 0, /*#__PURE__*/_jsx(FieldLabel, {
      htmlFor: "field",
      label: "Label",
      secondaryLabel: /*#__PURE__*/React.createElement(React.Fragment, null, "Secondary", /*#__PURE__*/_jsx(Hidden, {
        below: "tablet"
      }, void 0, " label")),
      tertiaryLabel: /*#__PURE__*/_jsx(TextLink, {
        href: "#"
      }, void 0, "Tertiary", /*#__PURE__*/_jsx(Hidden, {
        below: "tablet"
      }, void 0, " label"))
    }), /*#__PURE__*/_jsx(Box, {
      id: "field"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 40
    }))))));
  },
  description: /*#__PURE__*/_jsx(Alert, {
    tone: "info"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "medium"
  }, void 0, "This component is only required when building a custom field that isn\u2019t provided by Braid.")),
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "The ", /*#__PURE__*/_jsx(Strong, {}, void 0, "htmlFor"), " prop is mandatory, which accepts the ID of the field being labelled. This ensures that screen readers are able to associate the label with its associated field."),
  alternatives: [],
  additional: [{
    label: 'See also',
    description: /*#__PURE__*/_jsx(List, {
      space: "large"
    }, void 0, /*#__PURE__*/_jsx(Text, {
      tone: "secondary"
    }, void 0, /*#__PURE__*/_jsx(TextLink, {
      href: "/components/FieldMessage"
    }, void 0, "FieldMessage"), ' ', "\u2014 For displaying messages below a custom field."))
  }]
};
export default docs;
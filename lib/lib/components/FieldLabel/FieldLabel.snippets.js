import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { FieldLabel, TextLink } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(FieldLabel, {
    label: "Label"
  }))
}, {
  name: 'Standard with secondary label',
  code: source( /*#__PURE__*/_jsx(FieldLabel, {
    label: "Label",
    secondaryLabel: "Optional"
  }))
}, {
  name: 'Standard with tertiary label',
  code: source( /*#__PURE__*/_jsx(FieldLabel, {
    label: "Label",
    secondaryLabel: "Optional",
    tertiaryLabel: /*#__PURE__*/_jsx(TextLink, {
      href: "#"
    }, void 0, "Help?")
  }))
}];
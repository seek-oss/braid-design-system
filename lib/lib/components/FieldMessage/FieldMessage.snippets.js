import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { FieldMessage, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(FieldMessage, {
    message: "This is a message"
  }))
}, {
  name: 'Positive',
  code: source( /*#__PURE__*/_jsx(FieldMessage, {
    tone: "positive",
    message: "This is a positive message"
  }))
}, {
  name: 'Critical',
  code: source( /*#__PURE__*/_jsx(FieldMessage, {
    tone: "critical",
    message: "This is a critical message"
  }))
}, {
  name: 'Secondary message',
  code: source( /*#__PURE__*/_jsx(FieldMessage, {
    message: "This is a message",
    secondaryMessage: /*#__PURE__*/_jsx(Text, {
      size: "small",
      tone: "secondary"
    }, void 0, "Secondary")
  }))
}];
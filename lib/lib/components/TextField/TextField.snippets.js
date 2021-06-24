import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { TextField, TextLink, IconSearch, IconHelp } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label"
  }))
}, {
  name: 'With additional labels',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    secondaryLabel: "optional",
    tertiaryLabel: /*#__PURE__*/_jsx(TextLink, {
      href: "#"
    }, void 0, /*#__PURE__*/_jsx(IconHelp, {}), " Help")
  }))
}, {
  name: 'With a description',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    description: "More detailed description of field."
  }))
}, {
  name: 'With an icon',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    icon: /*#__PURE__*/_jsx(IconSearch, {}),
    placeholder: "Search"
  }))
}, {
  name: 'With a prefix',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    prefix: "Prefix",
    placeholder: "Search"
  }))
}, {
  name: 'With a critical message',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    tone: "critical",
    message: "Critical message"
  }))
}, {
  name: 'With a positive message',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    tone: "positive",
    message: "Positive message"
  }))
}, {
  name: 'With a neutral message',
  code: source( /*#__PURE__*/_jsx(TextField, {
    label: "Label",
    tone: "neutral",
    message: "Neutral message"
  }))
}];
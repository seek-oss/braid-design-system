import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { TextLink, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Inline link',
  code: source( /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
    href: "#"
  }, void 0, "Link text")))
}, {
  name: 'Large hit area',
  code: source( /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
    href: "#",
    hitArea: "large"
  }, void 0, "Large hit area")))
}, {
  name: 'Visited',
  code: source( /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(TextLink, {
    href: "",
    showVisited: true
  }, void 0, "Visited link")))
}];
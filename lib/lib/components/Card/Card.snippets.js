import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Card, Stack, Heading, Text, Columns, Column, OverflowMenu, MenuItem, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'With Heading',
  code: source( /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Heading, {
    level: "3"
  }, void 0, "Heading"), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"))))
}, {
  name: 'With promote tone',
  code: source( /*#__PURE__*/_jsx(Card, {
    tone: "promote"
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 200
  }))))
}, {
  name: 'With formAccent tone',
  code: source( /*#__PURE__*/_jsx(Card, {
    tone: "formAccent"
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 200
  }))))
}, {
  name: 'With rounded corners',
  code: source( /*#__PURE__*/_jsx(Card, {
    rounded: true
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 200
  }))))
}, {
  name: 'With Overflow Menu',
  code: source( /*#__PURE__*/_jsx(Card, {}, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Columns, {
    space: "gutter"
  }, void 0, /*#__PURE__*/_jsx(Column, {}, void 0, /*#__PURE__*/_jsx(Heading, {
    level: "3"
  }, void 0, "Heading")), /*#__PURE__*/_jsx(Column, {
    width: "content"
  }, void 0, /*#__PURE__*/_jsx(OverflowMenu, {
    label: "Options"
  }, void 0, /*#__PURE__*/_jsx(MenuItem, {}, void 0, "Menu Item")))), /*#__PURE__*/_jsx(Text, {}, void 0, "Text"))))
}];
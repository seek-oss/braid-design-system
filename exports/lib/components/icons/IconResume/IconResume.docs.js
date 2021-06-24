import _jsx from "@babel/runtime/helpers/jsx";

let _Stack;

import React from 'react';
import source from '../../../utils/source.macro';
import { IconResume, Heading, Stack } from '../../';
const docs = {
  category: 'Icon',
  migrationGuide: true,
  Example: function Example() {
    return source(_Stack || (_Stack = /* #__PURE__*/_jsx(Stack, {
      space: "none",
      align: "center"
    }, void 0, /* #__PURE__*/_jsx(Heading, {
      component: "div",
      level: "1"
    }, void 0, /* #__PURE__*/_jsx(IconResume, {})))));
  },
  alternatives: []
};
export default docs;
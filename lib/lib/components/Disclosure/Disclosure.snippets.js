import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Disclosure, Stack, Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(Disclosure, {
    expandLabel: "Show",
    collapseLabel: "Hide"
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: "large"
  }, void 0, /*#__PURE__*/_jsx(Text, {}, void 0, "Content"))))
}];
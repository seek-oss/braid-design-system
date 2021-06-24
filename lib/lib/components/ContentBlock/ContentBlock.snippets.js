import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { ContentBlock, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(ContentBlock, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}, {
  name: 'Xsmall',
  code: source( /*#__PURE__*/_jsx(ContentBlock, {
    width: "xsmall"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}, {
  name: 'Small',
  code: source( /*#__PURE__*/_jsx(ContentBlock, {
    width: "small"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}, {
  name: 'Large',
  code: source( /*#__PURE__*/_jsx(ContentBlock, {
    width: "large"
  }, void 0, /*#__PURE__*/_jsx(Placeholder, {
    height: 100
  })))
}];
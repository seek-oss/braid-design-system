import _jsx from "@babel/runtime/helpers/jsx";

var _ContentBlock, _ContentBlock2, _ContentBlock3, _ContentBlock4, _ContentBlock5;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Default width',
  Example: function Example() {
    return source(_ContentBlock || (_ContentBlock = /*#__PURE__*/_jsx(ContentBlock, {}, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}, {
  label: 'Xsmall width',
  Example: function Example() {
    return source(_ContentBlock2 || (_ContentBlock2 = /*#__PURE__*/_jsx(ContentBlock, {
      width: "xsmall"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}, {
  label: 'Small width',
  Example: function Example() {
    return source(_ContentBlock3 || (_ContentBlock3 = /*#__PURE__*/_jsx(ContentBlock, {
      width: "small"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}, {
  label: 'Medium width',
  Example: function Example() {
    return source(_ContentBlock4 || (_ContentBlock4 = /*#__PURE__*/_jsx(ContentBlock, {
      width: "medium"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}, {
  label: 'Large width',
  Example: function Example() {
    return source(_ContentBlock5 || (_ContentBlock5 = /*#__PURE__*/_jsx(ContentBlock, {
      width: "large"
    }, void 0, /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}];
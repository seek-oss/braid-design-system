import _jsx from "@babel/runtime/helpers/jsx";

var _Placeholder;

import React from 'react';
import { Disclosure } from '..';
import source from '../../utils/source.macro';
import { Placeholder } from '../../playroom/components';
export var galleryItems = [{
  Example: function Example(_ref) {
    var id = _ref.id;
    return source( /*#__PURE__*/_jsx(Disclosure, {
      id: id,
      expandLabel: "Show content",
      collapseLabel: "Hide content"
    }, void 0, _Placeholder || (_Placeholder = /*#__PURE__*/_jsx(Placeholder, {
      height: 100
    }))));
  }
}];
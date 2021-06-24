import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Rating } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [{
  name: 'Standard',
  code: source( /*#__PURE__*/_jsx(Rating, {
    rating: 3
  }))
}, {
  name: 'Without text rating',
  code: source( /*#__PURE__*/_jsx(Rating, {
    rating: 4.2,
    showTextRating: false
  }))
}, {
  name: 'Large',
  code: source( /*#__PURE__*/_jsx(Rating, {
    rating: 3.7,
    size: "large"
  }))
}];
import _jsx from "@babel/runtime/helpers/jsx";

var _Rating, _Rating2, _Rating3, _Rating4, _Rating5;

import React from 'react';
import { Rating } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [{
  label: 'Default',
  Example: function Example() {
    return source(_Rating || (_Rating = /*#__PURE__*/_jsx(Rating, {
      rating: 3
    })));
  }
}, {
  label: 'Hidden text rating',
  Example: function Example() {
    return source(_Rating2 || (_Rating2 = /*#__PURE__*/_jsx(Rating, {
      rating: 4.2,
      showTextRating: false
    })));
  }
}, {
  label: 'large',
  Example: function Example() {
    return source(_Rating3 || (_Rating3 = /*#__PURE__*/_jsx(Rating, {
      rating: 3,
      size: "large"
    })));
  }
}, {
  label: 'small',
  Example: function Example() {
    return source(_Rating4 || (_Rating4 = /*#__PURE__*/_jsx(Rating, {
      rating: 2,
      size: "small"
    })));
  }
}, {
  label: 'xsmall',
  Example: function Example() {
    return source(_Rating5 || (_Rating5 = /*#__PURE__*/_jsx(Rating, {
      rating: 1.5,
      size: "xsmall"
    })));
  }
}];
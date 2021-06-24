import _jsx from "@babel/runtime/helpers/jsx";

var _Rating, _Rating2, _Rating3, _Rating4, _Rating5, _Rating6;

import React, { Fragment } from 'react';
import { Box, Rating } from '../';
import { backgrounds } from '../../utils/docsHelpers';
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Default',
    Example: function Example() {
      return _Rating || (_Rating = /*#__PURE__*/_jsx(Rating, {
        rating: 3
      }));
    }
  }, {
    label: 'Hide the text rating',
    Example: function Example() {
      return _Rating2 || (_Rating2 = /*#__PURE__*/_jsx(Rating, {
        rating: 4.2,
        showTextRating: false
      }));
    }
  }, {
    label: 'large',
    Example: function Example() {
      return _Rating3 || (_Rating3 = /*#__PURE__*/_jsx(Rating, {
        rating: 3,
        size: "large"
      }));
    }
  }, {
    label: 'small',
    Example: function Example() {
      return _Rating4 || (_Rating4 = /*#__PURE__*/_jsx(Rating, {
        rating: 2,
        size: "small"
      }));
    }
  }, {
    label: 'xsmall',
    Example: function Example() {
      return _Rating5 || (_Rating5 = /*#__PURE__*/_jsx(Rating, {
        rating: 1.5,
        size: "xsmall"
      }));
    }
  }, {
    label: 'Rating Contrast',
    Example: function Example() {
      return /*#__PURE__*/_jsx(Fragment, {}, void 0, backgrounds.map(function (background) {
        return /*#__PURE__*/_jsx(Box, {
          background: background,
          padding: "xsmall"
        }, background, _Rating6 || (_Rating6 = /*#__PURE__*/_jsx(Rating, {
          rating: 1.5,
          size: "xsmall"
        })));
      }));
    }
  }]
};
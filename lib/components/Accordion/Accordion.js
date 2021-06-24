import _jsx from "@babel/runtime/helpers/jsx";

var _Divider, _Divider2;

import assert from 'assert';
import React, { useMemo } from 'react';
import { normalizeResponsiveValue } from '../../atoms/sprinkles.css';
import buildDataAttributes from '../private/buildDataAttributes';
import { Box } from '../Box/Box';
import { Stack } from '../Stack/Stack';
import { Divider } from '../Divider/Divider';
import { AccordionContext, validTones } from './AccordionContext';
export var validSpaceValues = ['medium', 'large', 'xlarge'];
var defaultSpaceForSize = {
  divided: {
    xsmall: 'medium',
    small: 'medium',
    standard: 'medium',
    large: 'large'
  },
  undivided: {
    xsmall: 'large',
    small: 'large',
    standard: 'large',
    large: 'large'
  }
};
export var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'large' : _ref$size,
      tone = _ref.tone,
      spaceProp = _ref.space,
      _ref$dividers = _ref.dividers,
      dividers = _ref$dividers === void 0 ? true : _ref$dividers,
      data = _ref.data;
  assert(spaceProp === undefined || Object.values(normalizeResponsiveValue(spaceProp)).every(function (value) {
    return value === undefined || validSpaceValues.includes(value);
  }), "To ensure adequate space for touch targets, 'space' prop values must be one of the following: ".concat(validSpaceValues.map(function (x) {
    return "\"".concat(x, "\"");
  }).join(', ')));
  assert(tone === undefined || validTones.includes(tone), "The 'tone' prop should be one of the following: ".concat(validTones.map(function (x) {
    return "\"".concat(x, "\"");
  }).join(', ')));
  var contextValue = useMemo(function () {
    return {
      size: size,
      tone: tone
    };
  }, [size, tone]);
  var space = spaceProp !== null && spaceProp !== void 0 ? spaceProp : defaultSpaceForSize[dividers ? 'divided' : 'undivided'][size];
  return /*#__PURE__*/_jsx(AccordionContext.Provider, {
    value: contextValue
  }, void 0, !dividers ? /*#__PURE__*/_jsx(Stack, {
    space: space,
    data: data
  }, void 0, children) : /*#__PURE__*/React.createElement(Box, data ? buildDataAttributes(data) : undefined, _Divider || (_Divider = /*#__PURE__*/_jsx(Divider, {})), /*#__PURE__*/_jsx(Box, {
    paddingY: space
  }, void 0, /*#__PURE__*/_jsx(Stack, {
    space: space,
    dividers: true
  }, void 0, children)), _Divider2 || (_Divider2 = /*#__PURE__*/_jsx(Divider, {}))));
};
Accordion.displayName = "Accordion";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "value", "label", "onChange", "options"];
import React, { useState, useEffect } from 'react';
import { useFallbackId } from '../../playroom/utils';
import { TextDropdown as BraidTextDropdown, parseSimpleToComplexOption } from './TextDropdown';
var fallbackOptions = ['TextDropdown'];

function resolveValue(value, options) {
  if (typeof value === 'undefined') {
    if (Array.isArray(options) && options.length > 0) {
      return parseSimpleToComplexOption(options[0]).value;
    }

    return fallbackOptions[0];
  }

  return value;
}

function resolveOptions(options) {
  return Array.isArray(options) && options.length > 0 ? options : fallbackOptions;
}

export function TextDropdown(_ref) {
  var id = _ref.id,
      value = _ref.value,
      label = _ref.label,
      onChange = _ref.onChange,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? fallbackOptions : _ref$options,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useState = useState(resolveValue(value, options)),
      _useState2 = _slicedToArray(_useState, 2),
      internalValue = _useState2[0],
      setInternalValue = _useState2[1];

  var _useState3 = useState(resolveOptions(options)),
      _useState4 = _slicedToArray(_useState3, 2),
      internalOptions = _useState4[0],
      setInternalOptions = _useState4[1];

  useEffect(function () {
    if (options !== internalOptions) {
      setInternalOptions(resolveOptions(options));
      setInternalValue(resolveValue(value, options));
    }
  }, [internalOptions, value, options]);
  return /*#__PURE__*/React.createElement(BraidTextDropdown, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    label: label !== null && label !== void 0 ? label : 'No label provided',
    value: internalValue,
    options: internalOptions,
    onChange: onChange ? onChange : setInternalValue
  }, restProps));
}
TextDropdown.displayName = "TextDropdown";
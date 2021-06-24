import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "stateName", "value", "onChange"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { MonthPicker as BraidMonthPicker } from './MonthPicker';
export var MonthPicker = function MonthPicker(_ref) {
  var id = _ref.id,
      stateName = _ref.stateName,
      value = _ref.value,
      onChange = _ref.onChange,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useFallbackState = useFallbackState(stateName, value, onChange, {}),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/React.createElement(BraidMonthPicker, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    value: state,
    onChange: handleChange
  }, restProps));
};
MonthPicker.displayName = "MonthPicker";
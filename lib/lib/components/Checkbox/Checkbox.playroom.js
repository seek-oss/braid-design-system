import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "stateName", "checked", "onChange"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Checkbox as BraidCheckbox } from './Checkbox';
export var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
      stateName = _ref.stateName,
      checked = _ref.checked,
      onChange = _ref.onChange,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useFallbackState = useFallbackState(stateName, checked, onChange, false),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/React.createElement(BraidCheckbox, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    checked: state,
    onChange: handleChange
  }, restProps));
};
Checkbox.displayName = "Checkbox";
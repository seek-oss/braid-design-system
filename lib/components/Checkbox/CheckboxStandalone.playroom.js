import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "stateName", "checked", "onChange", "aria-label"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { CheckboxStandalone as BraidCheckboxStandalone } from './CheckboxStandalone';
export var CheckboxStandalone = function CheckboxStandalone(_ref) {
  var id = _ref.id,
      stateName = _ref.stateName,
      checked = _ref.checked,
      onChange = _ref.onChange,
      ariaLabel = _ref['aria-label'],
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useFallbackState = useFallbackState(stateName, checked, onChange, false),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/React.createElement(BraidCheckboxStandalone, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    checked: state,
    onChange: handleChange,
    "aria-label": ariaLabel !== null && ariaLabel !== void 0 ? ariaLabel : ''
  }, restProps));
};
CheckboxStandalone.displayName = "CheckboxStandalone";
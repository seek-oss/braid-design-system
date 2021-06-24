import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "stateName", "value", "onChange", "onClear"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Autosuggest as BraidAutosuggest } from './Autosuggest';
export function Autosuggest(_ref) {
  var id = _ref.id,
      stateName = _ref.stateName,
      value = _ref.value,
      onChange = _ref.onChange,
      _onClear = _ref.onClear,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();
  var blankValue = {
    text: ''
  };

  var _useFallbackState = useFallbackState(stateName, value, onChange, blankValue),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/React.createElement(BraidAutosuggest, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    value: state,
    onChange: handleChange,
    onClear: function onClear() {
      handleChange(blankValue);
      _onClear === null || _onClear === void 0 ? void 0 : _onClear();
    }
  }, restProps));
}
Autosuggest.displayName = "Autosuggest";
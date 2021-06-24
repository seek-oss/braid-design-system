import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "checked", "onChange"];
import React, { useState } from 'react';
import { useFallbackId } from '../../playroom/utils';
import { Radio as BraidRadio } from './Radio';
export var Radio = function Radio(_ref) {
  var id = _ref.id,
      checked = _ref.checked,
      onChange = _ref.onChange,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      fallbackChecked = _useState2[0],
      setFallbackChecked = _useState2[1];

  return /*#__PURE__*/React.createElement(BraidRadio, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    checked: checked !== null && checked !== void 0 ? checked : fallbackChecked,
    onChange: onChange ? onChange : function (event) {
      return setFallbackChecked(event.currentTarget.checked);
    }
  }, restProps));
};
Radio.displayName = "Radio";
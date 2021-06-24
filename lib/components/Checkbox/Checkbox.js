import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["checked"];
import React, { forwardRef } from 'react';
import { InlineField } from '../private/InlineField/InlineField';
import { resolveCheckedGroup } from './resolveCheckedGroup';
export var Checkbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var checked = _ref.checked,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var calculatedChecked = Array.isArray(checked) ? resolveCheckedGroup(checked) : checked;
  return /*#__PURE__*/React.createElement(InlineField, _extends({}, restProps, {
    checked: calculatedChecked,
    type: "checkbox",
    ref: ref
  }));
});
Checkbox.displayName = 'Checkbox';
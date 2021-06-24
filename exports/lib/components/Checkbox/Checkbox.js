import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['checked'];
import React, { forwardRef } from 'react';
import { InlineField } from '../private/InlineField/InlineField';
import { resolveCheckedGroup } from './resolveCheckedGroup';
export var Checkbox = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const checked = _ref.checked,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const calculatedChecked = Array.isArray(checked)
    ? resolveCheckedGroup(checked)
    : checked;
  return /* #__PURE__*/ React.createElement(
    InlineField,
    _extends({}, restProps, {
      checked: calculatedChecked,
      type: 'checkbox',
      ref,
    }),
  );
});
Checkbox.displayName = 'Checkbox';

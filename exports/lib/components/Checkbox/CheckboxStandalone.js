import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['checked'];
import React, { forwardRef } from 'react';
import { Box } from '../Box/Box';
import { StyledInput } from '../private/InlineField/StyledInput';
import { resolveCheckedGroup } from './resolveCheckedGroup';
export var CheckboxStandalone = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const checked = _ref.checked,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const calculatedChecked = Array.isArray(checked)
    ? resolveCheckedGroup(checked)
    : checked;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      position: 'relative',
    },
    void 0,
    /* #__PURE__*/ React.createElement(
      StyledInput,
      _extends({}, restProps, {
        checked: calculatedChecked,
        type: 'checkbox',
        ref,
      }),
    ),
  );
});

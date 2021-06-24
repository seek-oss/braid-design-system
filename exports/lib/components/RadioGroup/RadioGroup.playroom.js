import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['id', 'stateName', 'value', 'onChange', 'children'];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { RadioGroup as BraidRadioGroup } from './RadioGroup';
export var RadioGroup = function RadioGroup(_ref) {
  const id = _ref.id,
    stateName = _ref.stateName,
    value = _ref.value,
    onChange = _ref.onChange,
    children = _ref.children,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackId = useFallbackId();

  const _useFallbackState = useFallbackState(stateName, value, onChange),
    _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
    state = _useFallbackState2[0],
    handleChange = _useFallbackState2[1];

  return /* #__PURE__*/ React.createElement(
    BraidRadioGroup,
    _extends({}, restProps, {
      id: id !== null && id !== void 0 ? id : fallbackId,
      value: state,
      onChange: handleChange,
    }),
    children,
  );
};
RadioGroup.displayName = 'RadioGroup';

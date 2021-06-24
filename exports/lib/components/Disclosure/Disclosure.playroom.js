import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = [
  'id',
  'stateName',
  'expanded',
  'expandLabel',
  'collapseLabel',
  'onToggle',
];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Disclosure as BraidDisclosure } from './Disclosure';
export var Disclosure = function Disclosure(_ref) {
  const id = _ref.id,
    stateName = _ref.stateName,
    expanded = _ref.expanded,
    expandLabel = _ref.expandLabel,
    collapseLabel = _ref.collapseLabel,
    onToggle = _ref.onToggle,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackId = useFallbackId();

  const _useFallbackState = useFallbackState(
      stateName,
      expanded,
      onToggle,
      false,
    ),
    _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
    state = _useFallbackState2[0],
    handleChange = _useFallbackState2[1];

  return /* #__PURE__*/ React.createElement(
    BraidDisclosure,
    _extends(
      {
        id: id !== null && id !== void 0 ? id : fallbackId,
        expanded: state,
        onToggle: handleChange,
        expandLabel: typeof expandLabel !== 'boolean' ? expandLabel : '',
        collapseLabel: typeof collapseLabel !== 'boolean' ? collapseLabel : '',
      },
      restProps,
    ),
  );
};
Disclosure.displayName = 'Disclosure';

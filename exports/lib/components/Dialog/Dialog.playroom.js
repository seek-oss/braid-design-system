import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['id', 'stateName', 'open', 'onClose'];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { AllowCloseContext } from '../private/Modal/Modal';
import { Dialog as BraidDialog } from './Dialog';
export var Dialog = function Dialog(_ref) {
  const id = _ref.id,
    stateName = _ref.stateName,
    open = _ref.open,
    onClose = _ref.onClose,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackId = useFallbackId();

  const _useFallbackState = useFallbackState(stateName, open, onClose, false),
    _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
    state = _useFallbackState2[0],
    handleChange = _useFallbackState2[1];

  return /* #__PURE__*/ _jsx(
    AllowCloseContext.Provider,
    {
      value: onClose !== undefined || stateName !== undefined,
    },
    void 0,
    /* #__PURE__*/ React.createElement(
      BraidDialog,
      _extends(
        {
          id: id !== null && id !== void 0 ? id : fallbackId,
          open: state,
          onClose: handleChange,
        },
        restProps,
      ),
    ),
  );
};
Dialog.displayName = 'Dialog';

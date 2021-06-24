import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "stateName", "open", "onClose"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { Drawer as BraidDrawer, AllowCloseContext } from './Drawer';
export var Drawer = function Drawer(_ref) {
  var id = _ref.id,
      stateName = _ref.stateName,
      open = _ref.open,
      onClose = _ref.onClose,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useFallbackState = useFallbackState(stateName, open, onClose, false),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/_jsx(AllowCloseContext.Provider, {
    value: onClose !== undefined || stateName !== undefined
  }, void 0, /*#__PURE__*/React.createElement(BraidDrawer, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId
  }, restProps, {
    open: state,
    onClose: handleChange
  })));
};
Drawer.displayName = "Drawer";
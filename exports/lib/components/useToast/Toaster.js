import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["id"];
import React, { useCallback } from 'react';
import { Box } from '../Box/Box';
import ToastComponent from './Toast';
import { useFlipList } from './useFlipList';
export var Toaster = function Toaster(_ref) {
  const toasts = _ref.toasts,
      removeToast = _ref.removeToast;

  const _useFlipList = useFlipList(),
      itemRef = _useFlipList.itemRef,
      remove = _useFlipList.remove;

  const onClear = useCallback(function (dedupeKey, id) {
    remove(id, function () {
      removeToast(dedupeKey);
    });
  }, [remove, removeToast]);
  return /* #__PURE__*/_jsx(Box, {
    position: "fixed",
    zIndex: "notification",
    width: "full",
    pointerEvents: "none",
    paddingX: "gutter",
    bottom: 0
  }, void 0, toasts.map(function (_ref2) {
    const id = _ref2.id,
        rest = _objectWithoutProperties(_ref2, _excluded);

    return /* #__PURE__*/_jsx(Box, {
      paddingBottom: "small"
    }, id, /* #__PURE__*/React.createElement(ToastComponent, _extends({
      ref: itemRef(id),
      id,
      onClear
    }, rest)));
  }));
};
Toaster.displayName = "Toaster";
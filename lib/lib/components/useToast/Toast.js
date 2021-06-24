import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { useCallback, useEffect } from 'react';
import { TreatProvider } from 'sku/react-treat';
import { Stack } from '../Stack/Stack';
import { Inline } from '../Inline/Inline';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { ContentBlock } from '../ContentBlock/ContentBlock';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconPositive, IconCritical } from '../icons';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { useTimeout } from './useTimeout';
import * as styles from './Toast.css';
var toneToIcon = {
  critical: IconCritical,
  positive: IconPositive
};

var Action = function Action(_ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      removeToast = _ref.removeToast;
  var handleClick = useCallback(function () {
    removeToast();
    onClick();
  }, [removeToast, onClick]);
  return /*#__PURE__*/_jsx(Text, {
    baseline: false
  }, void 0, /*#__PURE__*/_jsx(Box, {
    component: "span",
    paddingRight: "xsmall",
    "aria-hidden": true
  }, void 0, /*#__PURE__*/_jsx(TextLinkButton, {
    onClick: handleClick,
    hitArea: "large"
  }, void 0, label)));
};

Action.displayName = "Action";
var Toast = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var id = _ref2.id,
      treatTheme = _ref2.treatTheme,
      vanillaTheme = _ref2.vanillaTheme,
      dedupeKey = _ref2.dedupeKey,
      message = _ref2.message,
      description = _ref2.description,
      tone = _ref2.tone,
      onClear = _ref2.onClear,
      action = _ref2.action,
      shouldRemove = _ref2.shouldRemove;
  var remove = useCallback(function () {
    return onClear(dedupeKey, id);
  }, [onClear, dedupeKey, id]);

  var _useTimeout = useTimeout({
    duration: 10000,
    onTimeout: remove
  }),
      stopTimeout = _useTimeout.stopTimeout,
      startTimeout = _useTimeout.startTimeout;

  useEffect(function () {
    if (shouldRemove) {
      stopTimeout();
      remove();
    }
  }, [shouldRemove, remove, stopTimeout]);
  var Icon = toneToIcon[tone];
  var content = description ? /*#__PURE__*/_jsx(Stack, {
    space: "xxsmall"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "strong",
    baseline: false
  }, void 0, message), description ? /*#__PURE__*/_jsx(Text, {
    baseline: false,
    tone: "secondary"
  }, void 0, description) : null, action ? /*#__PURE__*/React.createElement(Action, _extends({
    key: action.label,
    removeToast: remove
  }, action)) : null) : /*#__PURE__*/_jsx(Inline, {
    space: "xxsmall"
  }, void 0, /*#__PURE__*/_jsx(Box, {
    paddingRight: "medium"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    weight: "strong",
    baseline: false
  }, void 0, message)), action ? /*#__PURE__*/React.createElement(Action, _extends({
    key: action.label,
    removeToast: remove
  }, action)) : null);
  return /*#__PURE__*/_jsx(TreatProvider, {
    theme: treatTheme
  }, void 0, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    role: "alert",
    ref: ref,
    onMouseEnter: stopTimeout,
    onMouseLeave: startTimeout,
    className: vanillaTheme
  }, /*#__PURE__*/_jsx(Box, {
    boxShadow: "large"
  }, void 0, /*#__PURE__*/_jsx(ContentBlock, {
    width: "xsmall"
  }, void 0, /*#__PURE__*/_jsx(Box, {
    background: "card",
    position: "relative",
    boxShadow: "borderStandard",
    borderRadius: "standard",
    paddingY: "medium",
    paddingLeft: "medium",
    overflow: "hidden",
    className: styles.toast
  }, void 0, /*#__PURE__*/_jsx(Columns, {
    space: "none"
  }, void 0, /*#__PURE__*/_jsx(Column, {
    width: "content"
  }, void 0, /*#__PURE__*/_jsx(Box, {
    paddingRight: "small"
  }, void 0, /*#__PURE__*/_jsx(Icon, {
    tone: tone
  }))), /*#__PURE__*/_jsx(Column, {}, void 0, content), /*#__PURE__*/_jsx(Column, {
    width: "content"
  }, void 0, /*#__PURE__*/_jsx(Box, {
    width: "touchable",
    display: "flex",
    justifyContent: "center",
    "aria-hidden": true
  }, void 0, /*#__PURE__*/_jsx(ClearButton, {
    onClick: remove,
    label: "Clear",
    data: process.env.NODE_ENV !== 'production' ? {
      testid: 'clearToast'
    } : {}
  })))), /*#__PURE__*/_jsx(Box, {
    background: tone,
    paddingLeft: "xxsmall",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0
  }))))));
});
export default Toast;
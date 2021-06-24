import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { useCallback, forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Overlay } from '../private/Overlay/Overlay';
import buildDataAttributes from '../private/buildDataAttributes';
import { iconSize, iconContainerSize } from '../../hooks/useIcon';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { useBackground, useBackgroundLightness } from '../Box/BackgroundContext';
import * as styles from './IconButton.css';
export var IconButton = /*#__PURE__*/forwardRef(function (_ref, forwardedRef) {
  var label = _ref.label,
      onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      onKeyUp = _ref.onKeyUp,
      onKeyDown = _ref.onKeyDown,
      ariaHasPopUp = _ref['aria-haspopup'],
      ariaExpanded = _ref['aria-expanded'],
      _ref$keyboardAccessib = _ref.keyboardAccessible,
      keyboardAccessible = _ref$keyboardAccessib === void 0 ? true : _ref$keyboardAccessib,
      _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      _ref$tone = _ref.tone,
      tone = _ref$tone === void 0 ? 'secondary' : _ref$tone,
      data = _ref.data,
      children = _ref.children;
  var background = useBackground();
  var backgroundLightness = useBackgroundLightness();
  var handleMouseDown = useCallback(function (event) {
    if (typeof onMouseDown !== 'function') {
      return;
    }

    if (!onClick) {
      // Ensure that the mousedown event doesn't trigger
      // a blur on the currently focused element if there
      // isn't any click behaviour attached to this button.
      // If we don't do this, the currently focused element
      // will lose its visible focus state which may not be
      // desired in some scenarios — most notably when we're
      // using icon buttons within form fields, e.g. the
      // clear icon in TextField. In this case, from a user's
      // perspective, they haven't left the field, so losing
      // visible focus looks strange.
      event.preventDefault();
    }

    onMouseDown(event);
  }, [onClick, onMouseDown]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: "button",
    type: "button",
    ref: forwardedRef,
    cursor: "pointer",
    outline: "none",
    className: [styles.button, virtualTouchable()],
    zIndex: 0,
    "aria-label": label,
    "aria-haspopup": ariaHasPopUp,
    "aria-expanded": ariaExpanded,
    title: label,
    onClick: onClick,
    onKeyUp: onKeyUp,
    onKeyDown: onKeyDown,
    onMouseDown: handleMouseDown,
    transform: {
      active: 'touchable'
    },
    transition: "touchable",
    tabIndex: !keyboardAccessible ? -1 : undefined
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Box, {
    position: "relative",
    display: "flex",
    className: iconContainerSize(),
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none"
  }, void 0, /*#__PURE__*/_jsx(Overlay, {
    background: background === 'body' || background === 'card' || background === 'input' ? 'neutralLight' : 'card',
    transition: "fast",
    borderRadius: "full",
    className: [styles.hoverOverlay, active && styles.forceActive, backgroundLightness === 'dark' && styles.darkBackground]
  }), keyboardAccessible ? /*#__PURE__*/_jsx(Overlay, {
    boxShadow: "outlineFocus",
    transition: "fast",
    borderRadius: "full",
    className: styles.focusOverlay,
    onlyVisibleForKeyboardNavigation: true
  }) : null, /*#__PURE__*/_jsx(Box, {
    position: "relative",
    className: iconSize()
  }, void 0, children({
    size: 'fill',
    tone: tone
  }))));
});
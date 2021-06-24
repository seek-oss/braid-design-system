import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import React, { useRef, useCallback } from 'react';
import { Box } from '../Box/Box';
import { PrivateTextLinkRenderer } from '../TextLinkRenderer/TextLinkRenderer';
import buildDataAttributes from '../private/buildDataAttributes';

var noop = function noop() {};

export var TextLinkButton = function TextLinkButton(_ref) {
  var weight = _ref.weight,
      hitArea = _ref.hitArea,
      id = _ref.id,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? noop : _ref$onClick,
      data = _ref.data,
      children = _ref.children,
      ariaControls = _ref['aria-controls'],
      ariaExpanded = _ref['aria-expanded'],
      ariaDescribedBy = _ref['aria-describedby'];
  var buttonRef = useRef(null);
  var handleKeyboard = useCallback(function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      var _buttonRef$current;

      event.preventDefault();
      (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.click();
    }
  }, [buttonRef]);
  return /*#__PURE__*/_jsx(PrivateTextLinkRenderer, {
    reset: false,
    weight: weight,
    hitArea: hitArea
  }, void 0, function (styleProps) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      ref: buttonRef,
      role: "button",
      tabIndex: 0,
      component: "span",
      onClick: onClick,
      onKeyDown: handleKeyboard,
      "aria-controls": ariaControls,
      "aria-expanded": ariaExpanded,
      "aria-describedby": ariaDescribedBy,
      id: id
    }, styleProps, data ? buildDataAttributes(data) : undefined), children);
  });
};
TextLinkButton.displayName = "TextLinkButton";
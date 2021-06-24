import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["value", "onChange", "onBlur", "onFocus", "placeholder", "disabled", "onVisibilityToggle", "visibilityToggleLabel"];
import React, { useState, forwardRef, Fragment, useCallback, useRef } from 'react';
import { Field } from '../private/Field/Field';
import { Box } from '../Box/Box';
import { IconButton } from '../iconButtons/IconButton';
import { IconVisibility } from '../icons';
export var PasswordField = /*#__PURE__*/forwardRef(function (_ref, forwardedRef) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      onVisibilityToggle = _ref.onVisibilityToggle,
      _ref$visibilityToggle = _ref.visibilityToggleLabel,
      visibilityToggleLabel = _ref$visibilityToggle === void 0 ? 'Toggle password visibility' : _ref$visibilityToggle,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var defaultRef = useRef(null);
  var inputRef = forwardedRef || defaultRef;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisibile = _useState2[1];

  var visibilityHandler = useCallback(function (event) {
    if (event.button !== 0) {
      return;
    }

    var newState = !visible;
    setVisibile(newState);

    if (typeof onVisibilityToggle === 'function') {
      onVisibilityToggle(newState);
    }

    if (inputRef && _typeof(inputRef) === 'object' && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible, onVisibilityToggle, inputRef]);
  return /*#__PURE__*/React.createElement(Field, _extends({}, restProps, {
    value: value,
    icon: undefined,
    prefix: undefined,
    labelId: undefined,
    disabled: disabled,
    secondaryMessage: null,
    secondaryIcon: disabled ? null : /*#__PURE__*/_jsx(IconButton, {
      label: visibilityToggleLabel,
      onMouseDown: visibilityHandler,
      keyboardAccessible: false
    }, void 0, function (iconProps) {
      return /*#__PURE__*/React.createElement(IconVisibility, _extends({}, iconProps, {
        hidden: visible
      }));
    })
  }), function (overlays, fieldProps, _, secondaryIcon) {
    return /*#__PURE__*/_jsx(Fragment, {}, void 0, /*#__PURE__*/React.createElement(Box, _extends({
      component: "input",
      type: visible ? 'text' : 'password',
      value: value,
      onChange: onChange,
      onFocus: onFocus,
      onBlur: onBlur,
      placeholder: placeholder
    }, fieldProps, {
      ref: inputRef
    })), overlays, secondaryIcon);
  });
});
PasswordField.displayName = 'PasswordField';
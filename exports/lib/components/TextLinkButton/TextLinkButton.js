import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import React, { useRef, useCallback } from 'react';
import { Box } from '../Box/Box';
import { PrivateTextLinkRenderer } from '../TextLinkRenderer/TextLinkRenderer';
import buildDataAttributes from '../private/buildDataAttributes';

const noop = function noop() {};

export var TextLinkButton = function TextLinkButton(_ref) {
  const weight = _ref.weight,
    hitArea = _ref.hitArea,
    id = _ref.id,
    _ref$onClick = _ref.onClick,
    onClick = _ref$onClick === void 0 ? noop : _ref$onClick,
    data = _ref.data,
    children = _ref.children,
    ariaControls = _ref['aria-controls'],
    ariaExpanded = _ref['aria-expanded'],
    ariaDescribedBy = _ref['aria-describedby'];
  const buttonRef = useRef(null);
  const handleKeyboard = useCallback(
    function (event) {
      if (event.key === 'Enter' || event.key === ' ') {
        let _buttonRef$current;

        event.preventDefault();
        (_buttonRef$current = buttonRef.current) === null ||
        _buttonRef$current === void 0
          ? void 0
          : _buttonRef$current.click();
      }
    },
    [buttonRef],
  );
  return /* #__PURE__*/ _jsx(
    PrivateTextLinkRenderer,
    {
      reset: false,
      weight,
      hitArea,
    },
    void 0,
    function (styleProps) {
      return /* #__PURE__*/ React.createElement(
        Box,
        _extends(
          {
            ref: buttonRef,
            role: 'button',
            tabIndex: 0,
            component: 'span',
            onClick,
            onKeyDown: handleKeyboard,
            'aria-controls': ariaControls,
            'aria-expanded': ariaExpanded,
            'aria-describedby': ariaDescribedBy,
            id,
          },
          styleProps,
          data ? buildDataAttributes(data) : undefined,
        ),
        children,
      );
    },
  );
};
TextLinkButton.displayName = 'TextLinkButton';

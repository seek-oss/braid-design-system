import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React, { forwardRef } from 'react';
import { PrivateButtonRenderer } from '../ButtonRenderer/ButtonRenderer';
import buildDataAttributes from '../private/buildDataAttributes';
export var Button = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const onClick = _ref.onClick,
    children = _ref.children,
    size = _ref.size,
    tone = _ref.tone,
    weight = _ref.weight,
    bleedY = _ref.bleedY,
    variant = _ref.variant,
    loading = _ref.loading,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'button' : _ref$type,
    id = _ref.id,
    tabIndex = _ref.tabIndex,
    ariaControls = _ref['aria-controls'],
    ariaExpanded = _ref['aria-expanded'],
    ariaDescribedBy = _ref['aria-describedby'],
    data = _ref.data;
  return /* #__PURE__*/ _jsx(
    PrivateButtonRenderer,
    {
      size,
      tone,
      weight,
      loading,
      variant,
      bleedY,
    },
    void 0,
    function (ButtonChildren, buttonProps) {
      return /* #__PURE__*/ React.createElement(
        'button',
        _extends(
          {
            ref,
            id,
            type,
            tabIndex,
            'aria-controls': ariaControls,
            'aria-expanded': ariaExpanded,
            'aria-describedby': ariaDescribedBy,
            onClick,
            disabled: loading,
          },
          buttonProps,
          data ? buildDataAttributes(data) : undefined,
        ),
        /* #__PURE__*/ _jsx(ButtonChildren, {}, void 0, children),
      );
    },
  );
});
Button.displayName = 'Button';

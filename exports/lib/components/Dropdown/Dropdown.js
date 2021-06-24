import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = [
    'children',
    'value',
    'onChange',
    'onBlur',
    'onFocus',
    'placeholder',
    'disabled',
  ],
  _excluded2 = ['className', 'paddingRight'];
import React, { Fragment, forwardRef } from 'react';
import { Box } from '../Box/Box';
import { Field } from '../private/Field/Field';
import { IconChevron } from '../icons';
import * as styles from './Dropdown.css';
import { Text } from '../Text/Text';
export var Dropdown = /* #__PURE__*/ forwardRef(function (props, ref) {
  let _option;

  const children = props.children,
    value = props.value,
    onChange = props.onChange,
    onBlur = props.onBlur,
    onFocus = props.onFocus,
    placeholder = props.placeholder,
    disabled = props.disabled,
    restProps = _objectWithoutProperties(props, _excluded);

  return /* #__PURE__*/ React.createElement(
    Field,
    _extends({}, restProps, {
      disabled,
      labelId: undefined,
      prefix: undefined,
      secondaryMessage: null,
      value,
    }),
    function (overlays, _ref, icon) {
      const className = _ref.className,
        paddingRight = _ref.paddingRight,
        fieldProps = _objectWithoutProperties(_ref, _excluded2);

      return /* #__PURE__*/ _jsx(
        Fragment,
        {},
        void 0,
        icon,
        /* #__PURE__*/ React.createElement(
          Box,
          _extends(
            {
              component: 'select',
              value,
              defaultValue: typeof value === 'undefined' ? '' : undefined,
              onChange,
              onBlur,
              onFocus,
              placeholder,
              className: [styles.field, className],
            },
            fieldProps,
            {
              ref,
            },
          ),
          !value || placeholder
            ? _option ||
                (_option = /* #__PURE__*/ _jsx(
                  'option',
                  {
                    value: '',
                    disabled: true,
                  },
                  void 0,
                  placeholder,
                ))
            : null,
          children,
        ),
        overlays,
        /* #__PURE__*/ _jsx(
          Box,
          {
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            height: 'touchable',
            width: 'touchable',
            top: 0,
            right: 0,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {
              baseline: false,
            },
            void 0,
            /* #__PURE__*/ _jsx(IconChevron, {
              tone: disabled ? 'secondary' : undefined,
            }),
          ),
        ),
      );
    },
  );
});
Dropdown.displayName = 'Dropdown';

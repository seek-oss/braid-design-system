import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _typeof from '@babel/runtime/helpers/typeof';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = [
  'children',
  'id',
  'value',
  'name',
  'onChange',
  'disabled',
  'tone',
  'size',
];

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

import React from 'react';
import assert from 'assert';
import flattenChildren from 'react-keyed-flatten-children';
import { FieldGroup } from '../private/FieldGroup/FieldGroup';
import { RadioItem } from '../RadioGroup/RadioItem';
import { Stack } from '../Stack/Stack';
import { RadioGroupContext, RadioItemContext } from './RadioGroupContext';
import { Box } from '../Box/Box';
const stackSpaceForSize = {
  small: 'small',
  standard: 'medium',
};

const RadioGroup = function RadioGroup(_ref) {
  const children = _ref.children,
    id = _ref.id,
    value = _ref.value,
    name = _ref.name,
    onChange = _ref.onChange,
    disabled = _ref.disabled,
    tone = _ref.tone,
    size = _ref.size,
    props = _objectWithoutProperties(_ref, _excluded);

  const items = flattenChildren(children);
  assert(
    items.every(function (item) {
      return (
        _typeof(item) === 'object' && 'type' in item && item.type === RadioItem
      );
    }),
    'All child nodes within a RadioGroup must be a RadioItem: https://seek-oss.github.io/braid-design-system/components/RadioGroup',
  );
  return /* #__PURE__*/ React.createElement(
    FieldGroup,
    _extends(
      {
        id,
      },
      props,
      {
        disabled,
        tone,
        space: 'small',
        role: 'radiogroup',
      },
    ),
    function (fieldGroupProps) {
      return /* #__PURE__*/ _jsx(
        RadioGroupContext.Provider,
        {
          value: _objectSpread(
            {
              id,
              value,
              name: name || id,
              onChange,
              disabled,
              tone,
              size,
            },
            fieldGroupProps,
          ),
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Box,
          {
            paddingTop: props.description ? 'xxsmall' : 'xsmall',
            paddingBottom: props.message ? 'xsmall' : undefined,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: stackSpaceForSize[size || 'standard'],
            },
            void 0,
            items.map(function (item, i) {
              return /* #__PURE__*/ _jsx(
                RadioItemContext.Provider,
                {
                  value: i,
                },
                i,
                item,
              );
            }),
          ),
        ),
      );
    },
  );
};

RadioGroup.displayName = 'RadioGroup';
RadioGroup.displayName = 'RadioGroup';
export { RadioGroup };

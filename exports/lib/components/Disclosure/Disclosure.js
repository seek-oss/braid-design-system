import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = [
  'id',
  'expandLabel',
  'collapseLabel',
  'space',
  'children',
  'data',
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
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { TextLinkButton } from '../TextLinkButton/TextLinkButton';
import { IconChevron } from '../icons';
import { useDisclosure } from './useDisclosure';
import buildDataAttributes from '../private/buildDataAttributes';
export var Disclosure = function Disclosure(_ref) {
  const id = _ref.id,
    expandLabel = _ref.expandLabel,
    _ref$collapseLabel = _ref.collapseLabel,
    collapseLabel =
      _ref$collapseLabel === void 0 ? expandLabel : _ref$collapseLabel,
    _ref$space = _ref.space,
    space = _ref$space === void 0 ? 'medium' : _ref$space,
    children = _ref.children,
    data = _ref.data,
    restProps = _objectWithoutProperties(_ref, _excluded);

  assert(
    typeof expandLabel === 'undefined' || typeof expandLabel === 'string',
    "'expandLabel' must be a string",
  );
  assert(
    typeof collapseLabel === 'undefined' || typeof collapseLabel === 'string',
    "'collapseLabel' must be a string",
  );

  const _useDisclosure = useDisclosure(
      _objectSpread(
        {
          id,
        },
        restProps.expanded !== undefined
          ? {
              onToggle: restProps.onToggle,
              expanded: restProps.expanded,
            }
          : {
              onToggle: restProps.onToggle,
            },
      ),
    ),
    expanded = _useDisclosure.expanded,
    buttonProps = _useDisclosure.buttonProps,
    contentProps = _useDisclosure.contentProps;

  return /* #__PURE__*/ React.createElement(
    Box,
    data ? buildDataAttributes(data) : undefined,
    /* #__PURE__*/ _jsx(
      Box,
      {
        userSelect: 'none',
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        /* #__PURE__*/ React.createElement(
          TextLinkButton,
          _extends(
            {
              hitArea: 'large',
            },
            buttonProps,
          ),
          expanded ? collapseLabel : expandLabel,
          /* #__PURE__*/ _jsx(
            Box,
            {
              component: 'span',
              paddingLeft: 'xxsmall',
            },
            void 0,
            /* #__PURE__*/ _jsx(IconChevron, {
              direction: expanded ? 'up' : 'down',
              alignY: 'lowercase',
            }),
          ),
        ),
      ),
    ),
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          paddingTop: space,
          display: expanded ? 'block' : 'none',
        },
        contentProps,
      ),
      children,
    ),
  );
};
Disclosure.displayName = 'Disclosure';

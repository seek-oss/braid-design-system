import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['id', 'label', 'children', 'size', 'tone', 'data'];

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

import React, { useContext } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Columns } from '../Columns/Columns';
import { Column } from '../Column/Column';
import { IconChevron } from '../icons';
import { useDisclosure } from '../Disclosure/useDisclosure';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { hideFocusRingsClassName } from '../private/hideFocusRings/hideFocusRings';
import { Overlay } from '../private/Overlay/Overlay';
import { AccordionContext, validTones } from './AccordionContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './AccordionItem.css';
const itemSpaceForSize = {
  xsmall: 'small',
  small: 'medium',
  standard: 'medium',
  large: 'large',
};
export var AccordionItem = function AccordionItem(_ref) {
  let _ref2,
    _accordionContext$siz,
    _ref3,
    _accordionContext$ton,
    _itemSpaceForSize$siz;

  const id = _ref.id,
    label = _ref.label,
    children = _ref.children,
    sizeProp = _ref.size,
    toneProp = _ref.tone,
    data = _ref.data,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const accordionContext = useContext(AccordionContext);
  assert(
    !(accordionContext && sizeProp),
    'Size cannot be set on AccordionItem when inside Accordion. Size should be set on Accordion instead.',
  );
  assert(
    !(accordionContext && toneProp),
    'Tone cannot be set on AccordionItem when inside Accordion. Tone should be set on Accordion instead.',
  );
  assert(
    toneProp === undefined || validTones.includes(toneProp),
    "The 'tone' prop should be one of the following: ".concat(
      validTones
        .map(function (x) {
          return '"'.concat(x, '"');
        })
        .join(', '),
    ),
  );
  const size =
    (_ref2 =
      (_accordionContext$siz =
        accordionContext === null || accordionContext === void 0
          ? void 0
          : accordionContext.size) !== null && _accordionContext$siz !== void 0
        ? _accordionContext$siz
        : sizeProp) !== null && _ref2 !== void 0
      ? _ref2
      : 'large';
  const tone =
    (_ref3 =
      (_accordionContext$ton =
        accordionContext === null || accordionContext === void 0
          ? void 0
          : accordionContext.tone) !== null && _accordionContext$ton !== void 0
        ? _accordionContext$ton
        : toneProp) !== null && _ref3 !== void 0
      ? _ref3
      : 'neutral';
  const weight = 'medium';
  const itemSpace =
    (_itemSpaceForSize$siz = itemSpaceForSize[size]) !== null &&
    _itemSpaceForSize$siz !== void 0
      ? _itemSpaceForSize$siz
      : 'none';
  assert(
    typeof label === 'undefined' || typeof label === 'string',
    'Label must be a string',
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
        position: 'relative',
        display: 'flex',
      },
      void 0,
      /* #__PURE__*/ React.createElement(
        Box,
        _extends(
          {
            component: 'button',
            cursor: 'pointer',
            className: [styles.button, virtualTouchable()],
            outline: 'none',
            width: 'full',
            textAlign: 'left',
          },
          buttonProps,
        ),
        /* #__PURE__*/ _jsx(
          Box,
          {
            position: 'relative',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Columns,
            {
              space: itemSpace,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Column,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {
                  size,
                  weight,
                  tone,
                  component: 'div',
                },
                void 0,
                label,
              ),
            ),
            /* #__PURE__*/ _jsx(
              Column,
              {
                width: 'content',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {
                  size,
                  weight,
                  tone: tone === 'neutral' ? 'secondary' : tone,
                  component: 'div',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconChevron, {
                  direction: expanded ? 'up' : 'down',
                }),
              ),
            ),
          ),
        ),
      ),
      /* #__PURE__*/ _jsx(Overlay, {
        boxShadow: 'outlineFocus',
        borderRadius: 'standard',
        transition: 'fast',
        className: [styles.focusRing, hideFocusRingsClassName],
      }),
    ),
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          paddingTop: itemSpace,
          display: expanded ? 'block' : 'none',
        },
        contentProps,
      ),
      children,
    ),
  );
};
AccordionItem.displayName = 'AccordionItem';

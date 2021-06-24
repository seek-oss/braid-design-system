import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
import _jsx from '@babel/runtime/helpers/jsx';
const _excluded = [
  'children',
  'size',
  'tone',
  'space',
  'type',
  'start',
  'data',
];
import React, { Children } from 'react';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
import { Box } from '../Box/Box';
import flattenChildren from 'react-keyed-flatten-children';
import {
  DefaultTextPropsProvider,
  useDefaultTextProps,
} from '../private/defaultTextProps';
import { lineHeightContainer } from '../../atoms/lineHeightContainer.css';
import * as styles from './List.css';

function numberToAlpha(inputNumber) {
  let returnValue = '';
  let counter = inputNumber;

  while (counter > 0) {
    const t = (counter - 1) % 26;
    returnValue = String.fromCharCode(97 + t) + returnValue;
    counter = ((counter - t) / 26) | 0;
  }

  return returnValue;
}

const romanNumerals = {
  m: 1000,
  cm: 900,
  d: 500,
  cd: 400,
  c: 100,
  xc: 90,
  l: 50,
  xl: 40,
  x: 10,
  ix: 9,
  v: 5,
  iv: 4,
  i: 1,
};

function numberToRomanNumerals(inputNumber) {
  let returnValue = '';
  let counter = inputNumber;
  Object.keys(romanNumerals).forEach(function (romanNumeral) {
    const value = romanNumerals[romanNumeral];

    while (counter >= value) {
      returnValue += romanNumeral;
      counter -= value;
    }
  });
  return returnValue;
}

const CharacterBullet = function CharacterBullet(_ref) {
  let _styles$minCharacterW;

  const _ref$length = _ref.length,
    length = _ref$length === void 0 ? 1 : _ref$length,
    children = _ref.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      display: 'inlineBlock',
      className: [
        (_styles$minCharacterW = styles.minCharacterWidth[length - 1]) !==
          null && _styles$minCharacterW !== void 0
          ? _styles$minCharacterW
          : styles.minCharacterWidth[styles.minCharacterWidth.length - 1],
        styles.trimGutter,
      ],
    },
    void 0,
    children,
    '.',
  );
};

CharacterBullet.displayName = 'CharacterBullet';
export var List = function List(_ref2) {
  const children = _ref2.children,
    sizeProp = _ref2.size,
    toneProp = _ref2.tone,
    _ref2$space = _ref2.space,
    space = _ref2$space === void 0 ? 'medium' : _ref2$space,
    _ref2$type = _ref2.type,
    type = _ref2$type === void 0 ? 'bullet' : _ref2$type,
    _ref2$start = _ref2.start,
    start = _ref2$start === void 0 ? 1 : _ref2$start,
    data = _ref2.data,
    restProps = _objectWithoutProperties(_ref2, _excluded);

  const _useDefaultTextProps = useDefaultTextProps({
      size: sizeProp,
      tone: toneProp,
    }),
    size = _useDefaultTextProps.size,
    tone = _useDefaultTextProps.tone;

  const listItems = flattenChildren(children);
  const lastNumberLength =
    type === 'number' ? (listItems.length + (start - 1)).toString().length : -1;
  return /* #__PURE__*/ _jsx(
    DefaultTextPropsProvider,
    {
      size,
      tone,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Stack,
      {
        component: /^(bullet|icon)$/.test(type) ? 'ul' : 'ol',
        space,
        data,
      },
      void 0,
      Children.map(listItems, function (listItem, index) {
        let _CharacterBullet;

        const resolvedIndex = index + (start - 1);
        return /* #__PURE__*/ _jsx(
          Box,
          {
            display: 'flex',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {
              component: 'div',
              size,
              tone,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Box,
              {
                display: 'flex',
                alignItems: /^(bullet|icon)$/.test(type) ? 'center' : undefined,
                className: lineHeightContainer[size],
                userSelect: 'none',
                'aria-hidden': true,
              },
              void 0,
              (function () {
                if (type === 'number') {
                  return (
                    _CharacterBullet ||
                    (_CharacterBullet = /* #__PURE__*/ _jsx(
                      CharacterBullet,
                      {
                        length: lastNumberLength,
                      },
                      void 0,
                      resolvedIndex + 1,
                    ))
                  );
                }

                if (type === 'alpha') {
                  return /* #__PURE__*/ _jsx(
                    CharacterBullet,
                    {},
                    void 0,
                    numberToAlpha(resolvedIndex + 1),
                  );
                }

                if (type === 'roman') {
                  return /* #__PURE__*/ _jsx(
                    CharacterBullet,
                    {
                      length: 2,
                    },
                    void 0,
                    numberToRomanNumerals(resolvedIndex + 1),
                  );
                }

                if (type === 'icon' && 'icon' in restProps) {
                  return restProps.icon;
                }

                return /* #__PURE__*/ _jsx(Box, {
                  borderRadius: 'full',
                  className: [styles.currentColor, styles.size[size]],
                });
              })(),
            ),
          ),
          /* #__PURE__*/ _jsx(
            Box,
            {
              minWidth: 0,
              width: 'full',
              paddingLeft: size === 'xsmall' ? 'xsmall' : 'small',
            },
            void 0,
            listItem,
          ),
        );
      }),
    ),
  );
};
List.displayName = 'List';

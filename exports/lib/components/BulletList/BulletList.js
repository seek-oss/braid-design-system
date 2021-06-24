import _jsx from '@babel/runtime/helpers/jsx';
import _taggedTemplateLiteral from '@babel/runtime/helpers/taggedTemplateLiteral';

let _templateObject, _templateObject2;

import React, { createContext, useContext } from 'react';
import assert from 'assert';
import dedent from 'dedent';
import { List } from '../List/List';
import { Text } from '../Text/Text';
const BulletListContext = /* #__PURE__*/ createContext(false);
const validTones = ['neutral', 'secondary'];

/** @deprecated `BulletList` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export var BulletList = function BulletList(_ref) {
  const space = _ref.space,
    size = _ref.size,
    tone = _ref.tone,
    children = _ref.children;
  assert(!tone || validTones.includes(tone), 'Invalid tone: '.concat(tone));

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn(
      dedent(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral([
            '\n      The "BulletList" and "Bullet" components have been deprecated and will be removed in a future version. Use "List" instead.\n      %c\n      - <BulletList>\n      -   <Bullet>...</Bullet>\n      -   <Bullet>...</Bullet>\n      -   <Bullet>...</Bullet>\n      - </BulletList>\n      %c\n      + <List>\n      +   <Text>...</Text>\n      +   <Text>...</Text>\n      +   <Text>...</Text>\n      + </List>\n    ',
          ])),
      ),
      'color: red',
      'color: green',
    );
  }

  return /* #__PURE__*/ _jsx(
    BulletListContext.Provider,
    {
      value: true,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      List,
      {
        space,
        size,
        tone,
      },
      void 0,
      children,
    ),
  );
};
BulletList.displayName = 'BulletList';

/** @deprecated `Bullet` has been deprecated. Use [List](https://seek-oss.github.io/braid-design-system/components/List) instead. */
export var Bullet = function Bullet(_ref2) {
  const children = _ref2.children;

  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    if (!useContext(BulletListContext)) {
      // eslint-disable-next-line no-console
      console.warn(
        dedent(
          _templateObject2 ||
            (_templateObject2 = _taggedTemplateLiteral([
              '\n        The "BulletList" and "Bullet" components have been deprecated and will be removed in a future version. Use "List" instead.\n        %c\n        - <BulletList>\n        -   <Bullet>...</Bullet>\n        -   <Bullet>...</Bullet>\n        -   <Bullet>...</Bullet>\n        - </BulletList>\n        %c\n        + <List>\n        +   <Text>...</Text>\n        +   <Text>...</Text>\n        +   <Text>...</Text>\n        + </List>\n      ',
            ])),
        ),
        'color: red',
        'color: green',
      );
    }
  }

  return /* #__PURE__*/ _jsx(Text, {}, void 0, children);
};
Bullet.displayName = 'Bullet';

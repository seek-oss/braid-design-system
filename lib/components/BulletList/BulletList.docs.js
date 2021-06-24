import _jsx from '@babel/runtime/helpers/jsx';

let _BulletList;

import React from 'react';
import { Bullet, BulletList, Text, TextLink } from '..';
import source from '../../utils/source.macro';
const docs = {
  category: 'Content',
  deprecationWarning: /* #__PURE__*/ _jsx(
    Text,
    {
      weight: 'medium',
    },
    void 0,
    'This component has been deprecated. Use',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: '/components/List',
      },
      void 0,
      'List',
    ),
    ' instead.',
  ),
  migrationGuide: false,
  Example: function Example() {
    return source(
      _BulletList ||
        (_BulletList = /* #__PURE__*/ _jsx(
          BulletList,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
          /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
          /* #__PURE__*/ _jsx(Bullet, {}, void 0, 'This is a bullet.'),
        )),
    );
  },
  alternatives: [],
};
export default docs;

import _jsx from '@babel/runtime/helpers/jsx';

let _Divider, _Divider2;

import React from 'react';
import { Divider } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Regular weight',
    Example: function Example() {
      return source(_Divider || (_Divider = /* #__PURE__*/ _jsx(Divider, {})));
    },
  },
  {
    label: 'Strong weight',
    Example: function Example() {
      return source(
        _Divider2 ||
          (_Divider2 = /* #__PURE__*/ _jsx(Divider, {
            weight: 'strong',
          })),
      );
    },
  },
];

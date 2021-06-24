import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Divider } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Regular',
    code: source(/* #__PURE__*/ _jsx(Divider, {})),
  },
  {
    name: 'Strong',
    code: source(
      /* #__PURE__*/ _jsx(Divider, {
        weight: 'strong',
      }),
    ),
  },
];

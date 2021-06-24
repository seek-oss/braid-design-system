import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { OverflowMenu, MenuItem } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(
        OverflowMenu,
        {
          label: 'Options',
        },
        void 0,
        /* #__PURE__*/ _jsx(MenuItem, {}, void 0, 'Option'),
        /* #__PURE__*/ _jsx(MenuItem, {}, void 0, 'Option'),
      ),
    ),
  },
];

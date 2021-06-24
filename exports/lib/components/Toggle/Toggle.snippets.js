import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Toggle } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(Toggle, {
        label: 'Label',
      }),
    ),
  },
  {
    name: 'Small',
    code: source(
      /* #__PURE__*/ _jsx(Toggle, {
        label: 'Label',
        size: 'small',
      }),
    ),
  },
  {
    name: 'Right aligned',
    code: source(
      /* #__PURE__*/ _jsx(Toggle, {
        label: 'Label',
        align: 'right',
      }),
    ),
  },
  {
    name: 'Justified',
    code: source(
      /* #__PURE__*/ _jsx(Toggle, {
        label: 'Label',
        align: 'justify',
      }),
    ),
  },
];

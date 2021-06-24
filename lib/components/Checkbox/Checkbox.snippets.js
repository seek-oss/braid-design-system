import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Checkbox, Badge, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(Checkbox, {
        label: 'Label',
      }),
    ),
  },
  {
    name: 'Small',
    code: source(
      /* #__PURE__*/ _jsx(Checkbox, {
        label: 'Label',
        size: 'small',
      }),
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      /* #__PURE__*/ _jsx(Checkbox, {
        label: 'Label',
        tone: 'critical',
        message: 'Critical message',
      }),
    ),
  },
  {
    name: 'With a description',
    code: source(
      /* #__PURE__*/ _jsx(Checkbox, {
        label: 'Label',
        description: 'Description',
      }),
    ),
  },
  {
    name: 'With a Badge',
    code: source(
      /* #__PURE__*/ _jsx(Checkbox, {
        label: 'Label',
        badge: /* #__PURE__*/ _jsx(
          Badge,
          {
            weight: 'strong',
          },
          void 0,
          'Badge',
        ),
      }),
    ),
  },
  {
    name: 'With nested content',
    code: source(
      /* #__PURE__*/ _jsx(
        Checkbox,
        {
          label: 'Label',
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          height: 100,
        }),
      ),
    ),
  },
];

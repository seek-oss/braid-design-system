import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { TextDropdown, Text, Strong, Heading } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        /* #__PURE__*/ _jsx(TextDropdown, {
          label: 'Label',
          value: 'Option 1',
          options: ['Option 1', 'Option 2', 'Option 3'],
        }),
      ),
    ),
  },
  {
    name: 'Emphasised within a sentence',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Sort by',
        ' ',
        /* #__PURE__*/ _jsx(
          Strong,
          {},
          void 0,
          /* #__PURE__*/ _jsx(TextDropdown, {
            label: 'Sort by',
            options: ['Relevance', 'Date', 'Keyword'],
          }),
        ),
      ),
    ),
  },
  {
    name: 'Within a heading',
    code: source(
      /* #__PURE__*/ _jsx(
        Heading,
        {
          level: '2',
        },
        void 0,
        'Heading with',
        ' ',
        /* #__PURE__*/ _jsx(TextDropdown, {
          label: 'Options',
          options: ['Option 1', 'Option 2', 'Option 3'],
        }),
      ),
    ),
  },
];

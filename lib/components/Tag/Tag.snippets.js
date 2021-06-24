import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Inline, Tag } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(Tag, {}, void 0, 'Tag'),
        /* #__PURE__*/ _jsx(Tag, {}, void 0, 'Tag'),
        /* #__PURE__*/ _jsx(Tag, {}, void 0, 'Tag'),
      ),
    ),
  },
  {
    name: 'Clearable',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Tag,
          {
            onClear: function onClear() {},
            clearLabel: 'Clear',
          },
          void 0,
          'Tag',
        ),
        /* #__PURE__*/ _jsx(
          Tag,
          {
            onClear: function onClear() {},
            clearLabel: 'Clear',
          },
          void 0,
          'Tag',
        ),
        /* #__PURE__*/ _jsx(
          Tag,
          {
            onClear: function onClear() {},
            clearLabel: 'Clear',
          },
          void 0,
          'Tag',
        ),
      ),
    ),
  },
];

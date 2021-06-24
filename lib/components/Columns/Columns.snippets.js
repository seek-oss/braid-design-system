import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Columns, Column, Stack, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: '2 Columns',
    code: source(
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'gutter',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
      ),
    ),
  },
  {
    name: '2 Columns (Collapse Below Tablet)',
    code: source(
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'gutter',
          collapseBelow: 'tablet',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
      ),
    ),
  },
  {
    name: '3 Columns',
    code: source(
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'gutter',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
      ),
    ),
  },
  {
    name: '3 Columns (Collapse Below Tablet)',
    code: source(
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'gutter',
          collapseBelow: 'tablet',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
              label: 'Column',
            }),
          ),
        ),
      ),
    ),
  },
  {
    name: 'Main Content With Sidebar',
    code: source(
      /* #__PURE__*/ _jsx(
        Columns,
        {
          space: 'gutter',
          collapseBelow: 'tablet',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Column,
          {
            width: '2/3',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 400,
              label: 'Main',
            }),
          ),
        ),
        /* #__PURE__*/ _jsx(
          Column,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
              label: 'Sidebar',
            }),
          ),
        ),
      ),
    ),
  },
];

import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Inline, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Small space',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
      ),
    ),
  },
  {
    name: 'Medium space',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'medium',
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
      ),
    ),
  },
  {
    name: 'Responsive space',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: {
            mobile: 'small',
            tablet: 'large',
          },
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
      ),
    ),
  },
  {
    name: 'Responsive horizontal alignment',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'small',
          align: {
            mobile: 'center',
            tablet: 'left',
          },
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 48,
        }),
      ),
    ),
  },
  {
    name: 'Vertically centered',
    code: source(
      /* #__PURE__*/ _jsx(
        Inline,
        {
          space: 'small',
          alignY: 'center',
        },
        void 0,
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 40,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 100,
        }),
        /* #__PURE__*/ _jsx(Placeholder, {
          width: 48,
          height: 60,
        }),
      ),
    ),
  },
];

import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Actions, Button, IconDelete } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'With multiple buttons',
    code: source(
      /* #__PURE__*/ _jsx(
        Actions,
        {},
        void 0,
        /* #__PURE__*/ _jsx(Button, {}, void 0, 'Submit'),
        /* #__PURE__*/ _jsx(
          Button,
          {
            variant: 'transparent',
          },
          void 0,
          'Cancel',
        ),
      ),
    ),
  },
  {
    name: 'With a branded action',
    code: source(
      /* #__PURE__*/ _jsx(
        Actions,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          Button,
          {
            tone: 'brandAccent',
          },
          void 0,
          'Submit',
        ),
        /* #__PURE__*/ _jsx(
          Button,
          {
            variant: 'transparent',
          },
          void 0,
          'Cancel',
        ),
      ),
    ),
  },
  {
    name: 'With a destructive action',
    code: source(
      /* #__PURE__*/ _jsx(
        Actions,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          Button,
          {
            tone: 'critical',
          },
          void 0,
          /* #__PURE__*/ _jsx(IconDelete, {}),
          ' Delete',
        ),
        /* #__PURE__*/ _jsx(
          Button,
          {
            variant: 'transparent',
          },
          void 0,
          'Cancel',
        ),
      ),
    ),
  },
  {
    name: 'Small size',
    code: source(
      /* #__PURE__*/ _jsx(
        Actions,
        {
          size: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
        /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 2'),
        /* #__PURE__*/ _jsx(
          Button,
          {
            variant: 'transparent',
          },
          void 0,
          'Button 3',
        ),
      ),
    ),
  },
];

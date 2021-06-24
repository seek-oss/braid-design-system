import _jsx from '@babel/runtime/helpers/jsx';

let _Actions, _Actions2, _Actions3, _Actions4;

import React from 'react';
import source from '../../utils/source.macro';
import { Actions, Button, IconDelete } from '../';
export var galleryItems = [
  {
    label: 'With multiple buttons',
    Example: function Example() {
      return source(
        _Actions ||
          (_Actions = /* #__PURE__*/ _jsx(
            Actions,
            {},
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
          )),
      );
    },
  },
  {
    label: 'With a branded action',
    Example: function Example() {
      return source(
        _Actions2 ||
          (_Actions2 = /* #__PURE__*/ _jsx(
            Actions,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'brandAccent',
              },
              void 0,
              'Button 1',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'transparent',
              },
              void 0,
              'Button 2',
            ),
          )),
      );
    },
  },
  {
    label: 'With a destructive action',
    Example: function Example() {
      return source(
        _Actions3 ||
          (_Actions3 = /* #__PURE__*/ _jsx(
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
          )),
      );
    },
  },
  {
    label: 'Small size',
    Example: function Example() {
      return source(
        _Actions4 ||
          (_Actions4 = /* #__PURE__*/ _jsx(
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
          )),
      );
    },
  },
];

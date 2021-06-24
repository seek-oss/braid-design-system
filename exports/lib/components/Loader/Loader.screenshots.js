import _jsx from '@babel/runtime/helpers/jsx';

let _Loader, _Loader2, _Loader3, _Loader4, _Loader5, _Loader6, _Loader7;

import React, { Fragment } from 'react';
import { Box, Loader } from '../';
import { backgrounds } from '../../utils/docsHelpers';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Example: function Example() {
        return _Loader || (_Loader = /* #__PURE__*/ _jsx(Loader, {}));
      },
    },
    {
      label: 'Delay visibility (used to prevent loading flicker)',
      Example: function Example() {
        return (
          _Loader2 ||
          (_Loader2 = /* #__PURE__*/ _jsx(Loader, {
            delayVisibility: true,
          }))
        );
      },
    },
    {
      label: 'xsmall',
      Example: function Example() {
        return (
          _Loader3 ||
          (_Loader3 = /* #__PURE__*/ _jsx(Loader, {
            size: 'xsmall',
          }))
        );
      },
    },
    {
      label: 'small',
      Example: function Example() {
        return (
          _Loader4 ||
          (_Loader4 = /* #__PURE__*/ _jsx(Loader, {
            size: 'small',
          }))
        );
      },
    },
    {
      label: 'standard',
      Example: function Example() {
        return (
          _Loader5 ||
          (_Loader5 = /* #__PURE__*/ _jsx(Loader, {
            size: 'standard',
          }))
        );
      },
    },
    {
      label: 'large',
      Example: function Example() {
        return (
          _Loader6 ||
          (_Loader6 = /* #__PURE__*/ _jsx(Loader, {
            size: 'large',
          }))
        );
      },
    },
    {
      label: 'Loader Contrast',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.map(function (background) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
                padding: 'xsmall',
              },
              background,
              _Loader7 || (_Loader7 = /* #__PURE__*/ _jsx(Loader, {})),
            );
          }),
        );
      },
    },
  ],
};

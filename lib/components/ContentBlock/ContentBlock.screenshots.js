import _jsx from '@babel/runtime/helpers/jsx';

let _ContentBlock,
  _ContentBlock2,
  _ContentBlock3,
  _ContentBlock4,
  _ContentBlock5;

import React from 'react';
import { Placeholder } from '../private/Placeholder/Placeholder';
import { ContentBlock } from '../';
export var screenshots = {
  screenshotWidths: [320, 1200],
  examples: [
    {
      label: 'Default Content Block',
      Example: function Example() {
        return (
          _ContentBlock ||
          (_ContentBlock = /* #__PURE__*/ _jsx(
            ContentBlock,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
            }),
          ))
        );
      },
    },
    {
      label: 'Xsmall Content Block',
      Example: function Example() {
        return (
          _ContentBlock2 ||
          (_ContentBlock2 = /* #__PURE__*/ _jsx(
            ContentBlock,
            {
              width: 'xsmall',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
            }),
          ))
        );
      },
    },
    {
      label: 'Small Content Block',
      Example: function Example() {
        return (
          _ContentBlock3 ||
          (_ContentBlock3 = /* #__PURE__*/ _jsx(
            ContentBlock,
            {
              width: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
            }),
          ))
        );
      },
    },
    {
      label: 'Medium Content Block',
      Example: function Example() {
        return (
          _ContentBlock4 ||
          (_ContentBlock4 = /* #__PURE__*/ _jsx(
            ContentBlock,
            {
              width: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
            }),
          ))
        );
      },
    },
    {
      label: 'Large Content Block',
      Example: function Example() {
        return (
          _ContentBlock5 ||
          (_ContentBlock5 = /* #__PURE__*/ _jsx(
            ContentBlock,
            {
              width: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 100,
            }),
          ))
        );
      },
    },
  ],
};

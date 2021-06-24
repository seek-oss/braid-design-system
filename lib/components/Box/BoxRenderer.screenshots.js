import _jsx from '@babel/runtime/helpers/jsx';

let _li;

import React from 'react';
import { BoxRenderer } from './BoxRenderer';
import { Text } from '../Text/Text';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard BoxRenderer',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          BoxRenderer,
          {
            component: 'ul',
            background: 'brand',
            padding: 'medium',
          },
          void 0,
          function (className) {
            return /* #__PURE__*/ _jsx(
              'ul',
              {
                className,
              },
              void 0,
              _li ||
                (_li = /* #__PURE__*/ _jsx(
                  'li',
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Text,
                    {
                      baseline: false,
                    },
                    void 0,
                    "This text should be white, and it shouldn't have a visible bullet.",
                  ),
                )),
            );
          },
        );
      },
    },
  ],
};

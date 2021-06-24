import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { TextLinkRenderer, Text, Box } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLink with Custom Renderer',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Even though it looks like a link, the last word of this sentence is actually a',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLinkRenderer,
            {
              reset: false,
            },
            void 0,
            function (textLinkProps) {
              return /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    component: 'button',
                  },
                  textLinkProps,
                ),
                'button.',
              );
            },
          ),
        );
      },
    },
  ],
};

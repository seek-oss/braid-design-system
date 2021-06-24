import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box, OverflowMenu, MenuItem, MenuItemLink } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      background: 'card',
      Example: function Example(_ref) {
        const handler = _ref.handler;
        return /* #__PURE__*/ _jsx(
          Box,
          {
            style: {
              paddingLeft: '100px',
              maxWidth: '200px',
            },
          },
          void 0,
          /* #__PURE__*/ _jsx(
            OverflowMenu,
            {
              label: 'Options',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              MenuItem,
              {
                onClick: handler,
              },
              void 0,
              'Button',
            ),
            /* #__PURE__*/ _jsx(
              MenuItemLink,
              {
                href: '#',
                onClick: handler,
              },
              void 0,
              'Link',
            ),
          ),
        );
      },
    },
  ],
};

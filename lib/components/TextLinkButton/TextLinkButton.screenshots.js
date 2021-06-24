import _jsx from '@babel/runtime/helpers/jsx';

let _Button;

import React from 'react';
import { Text, TextLinkButton, Actions, Button } from '..';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'TextLinkButton inside Text',
      Example: function Example(_ref) {
        const handler = _ref.handler;
        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The link in this sentence',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLinkButton,
            {
              onClick: handler,
            },
            void 0,
            'is actually a span with an ARIA role of button.',
          ),
        );
      },
    },
    {
      label: 'Weak TextLinkButton inside Text',
      Example: function Example(_ref2) {
        const handler = _ref2.handler;
        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The link in this sentence',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLinkButton,
            {
              weight: 'weak',
              onClick: handler,
            },
            void 0,
            'is actually a span with an ARIA role of button.',
          ),
        );
      },
    },
    {
      label: 'TextLinkButton inside Actions (Deprecated)',
      Example: function Example(_ref3) {
        const handler = _ref3.handler;
        return /* #__PURE__*/ _jsx(
          Actions,
          {},
          void 0,
          _Button ||
            (_Button = /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button')),
          /* #__PURE__*/ _jsx(
            TextLinkButton,
            {
              onClick: handler,
            },
            void 0,
            'TextLinkButton',
          ),
        );
      },
    },
  ],
};

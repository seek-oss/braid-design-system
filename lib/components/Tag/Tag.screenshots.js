import _jsx from '@babel/runtime/helpers/jsx';

let _Tag, _Tag2;

import React from 'react';
import { Tag, Inline } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard Tag',
      background: 'card',
      Example: function Example() {
        return _Tag || (_Tag = /* #__PURE__*/ _jsx(Tag, {}, void 0, 'Tag'));
      },
    },
    {
      label: 'Clearable Tag',
      background: 'card',
      Example: function Example(_ref) {
        const handler = _ref.handler;
        return /* #__PURE__*/ _jsx(
          Tag,
          {
            onClear: handler,
            clearLabel: 'Clear tag',
          },
          void 0,
          'Tag',
        );
      },
    },
    {
      label: 'Truncated Tag',
      background: 'card',
      Example: function Example(_ref2) {
        const handler = _ref2.handler;
        return /* #__PURE__*/ _jsx(
          Tag,
          {
            onClear: handler,
            clearLabel: 'Clear tag',
          },
          void 0,
          'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
        );
      },
    },
    {
      label: 'Test: Standard and clearable tags should be equal height',
      background: 'card',
      Example: function Example(_ref3) {
        const handler = _ref3.handler;
        return /* #__PURE__*/ _jsx(
          Inline,
          {
            space: 'small',
          },
          void 0,
          _Tag2 || (_Tag2 = /* #__PURE__*/ _jsx(Tag, {}, void 0, 'Tag')),
          /* #__PURE__*/ _jsx(
            Tag,
            {
              onClear: handler,
              clearLabel: 'Clear tag',
            },
            void 0,
            'Tag',
          ),
        );
      },
    },
  ],
};

import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Toggle, Box } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Toggle off',
      Example: function Example(_ref) {
        const id = _ref.id,
          handler = _ref.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: false,
          label: 'Toggled off',
          id,
          onChange: handler,
        });
      },
    },
    {
      label: 'Toggle on',
      Example: function Example(_ref2) {
        const id = _ref2.id,
          handler = _ref2.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: true,
          label: 'Toggled on',
          id,
          onChange: handler,
        });
      },
    },
    {
      label: 'Small size',
      Example: function Example(_ref3) {
        const id = _ref3.id,
          handler = _ref3.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: true,
          size: 'small',
          label: 'Small',
          id,
          onChange: handler,
        });
      },
    },
    {
      label: 'Right aligned',
      Container: function Container(_ref4) {
        const children = _ref4.children;
        return /* #__PURE__*/ _jsx(
          'div',
          {
            style: {
              maxWidth: '300px',
            },
          },
          void 0,
          children,
        );
      },
      Example: function Example(_ref5) {
        const id = _ref5.id,
          handler = _ref5.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: true,
          align: 'right',
          label: 'Aligned right',
          id,
          onChange: handler,
        });
      },
    },
    {
      label: 'Justified',
      Container: function Container(_ref6) {
        const children = _ref6.children;
        return /* #__PURE__*/ _jsx(
          'div',
          {
            style: {
              maxWidth: '300px',
            },
          },
          void 0,
          children,
        );
      },
      Example: function Example(_ref7) {
        const id = _ref7.id,
          handler = _ref7.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: true,
          align: 'justify',
          label: 'Justified',
          id,
          onChange: handler,
        });
      },
    },
    {
      label: 'Space between the label and toggle preserved',
      Container: function Container(_ref8) {
        const children = _ref8.children;
        return /* #__PURE__*/ _jsx(
          'div',
          {
            style: {
              maxWidth: '300px',
            },
          },
          void 0,
          children,
        );
      },
      Example: function Example(_ref9) {
        const id = _ref9.id,
          handler = _ref9.handler;
        return /* #__PURE__*/ _jsx(
          Box,
          {
            display: 'flex',
          },
          void 0,
          /* #__PURE__*/ _jsx(Toggle, {
            on: true,
            align: 'justify',
            label: 'Justified',
            id,
            onChange: handler,
          }),
        );
      },
    },
    {
      label: 'With a long label',
      Container: function Container(_ref10) {
        const children = _ref10.children;
        return /* #__PURE__*/ _jsx(
          'div',
          {
            style: {
              maxWidth: '300px',
            },
          },
          void 0,
          children,
        );
      },
      Example: function Example(_ref11) {
        const id = _ref11.id,
          handler = _ref11.handler;
        return /* #__PURE__*/ _jsx(Toggle, {
          on: true,
          label:
            'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
          id,
          onChange: handler,
        });
      },
    },
  ],
};

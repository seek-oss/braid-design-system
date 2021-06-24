import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

let _Badge, _Badge2, _Text, _Text2, _Text3;

import React, { useState } from 'react';
import { Badge, Checkbox, Text } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard',
      Example: function Example(_ref) {
        const id = _ref.id;

        const _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          state = _useState2[0],
          setState = _useState2[1];

        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: state,
          onChange: function onChange() {
            return setState(!state);
          },
          label: 'Label',
        });
      },
    },
    {
      label: 'Small',
      Example: function Example(_ref2) {
        const id = _ref2.id;

        const _useState3 = useState(false),
          _useState4 = _slicedToArray(_useState3, 2),
          state = _useState4[0],
          setState = _useState4[1];

        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: state,
          onChange: function onChange() {
            return setState(!state);
          },
          label: 'Label',
          size: 'small',
        });
      },
    },
    {
      label: 'Checked',
      Example: function Example(_ref3) {
        const id = _ref3.id,
          handler = _ref3.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: true,
          onChange: handler,
          label: 'Label',
        });
      },
    },
    {
      label: 'Mixed state',
      Example: function Example(_ref4) {
        const id = _ref4.id,
          handler = _ref4.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: 'mixed',
          onChange: handler,
          label: 'Label',
        });
      },
    },
    {
      label: 'Disabled',
      background: 'card',
      Example: function Example(_ref5) {
        const id = _ref5.id,
          handler = _ref5.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          disabled: true,
          checked: false,
          onChange: handler,
          label: 'Label',
        });
      },
    },
    {
      label: 'Critical',
      Example: function Example(_ref6) {
        const id = _ref6.id,
          handler = _ref6.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: false,
          onChange: handler,
          label: 'Label',
          message: 'This is a critical message',
          tone: 'critical',
        });
      },
    },
    {
      label: 'With a description',
      Example: function Example(_ref7) {
        const id = _ref7.id,
          handler = _ref7.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: false,
          onChange: handler,
          label: 'Label',
          description: 'Extra information about the field',
        });
      },
    },
    {
      label: 'With a Badge',
      Example: function Example(_ref8) {
        const id = _ref8.id,
          handler = _ref8.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: false,
          onChange: handler,
          label: 'Label',
          badge:
            _Badge ||
            (_Badge = /* #__PURE__*/ _jsx(
              Badge,
              {
                tone: 'positive',
                weight: 'strong',
              },
              void 0,
              'New',
            )),
        });
      },
    },
    {
      label: 'With a Badge and description',
      Example: function Example(_ref9) {
        const id = _ref9.id,
          handler = _ref9.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: false,
          onChange: handler,
          label: 'Label',
          badge:
            _Badge2 ||
            (_Badge2 = /* #__PURE__*/ _jsx(
              Badge,
              {
                tone: 'positive',
                weight: 'strong',
              },
              void 0,
              'New',
            )),
          description: 'Extra information about the field',
        });
      },
    },
    {
      label: 'With nested content visible only when checked',
      Example: function Example(_ref10) {
        const id = _ref10.id;

        const _useState5 = useState(true),
          _useState6 = _slicedToArray(_useState5, 2),
          state = _useState6[0],
          setState = _useState6[1];

        return /* #__PURE__*/ _jsx(
          Checkbox,
          {
            id,
            checked: state,
            onChange: function onChange() {
              return setState(!state);
            },
            label: 'Label',
          },
          void 0,
          _Text ||
            (_Text = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This text is visible when the checkbox is checked.',
            )),
        );
      },
    },
    {
      label: 'With nested content and description',
      Example: function Example(_ref11) {
        const id = _ref11.id,
          handler = _ref11.handler;
        return /* #__PURE__*/ _jsx(
          Checkbox,
          {
            id,
            checked: true,
            onChange: handler,
            label: 'Label',
            description: 'Extra information about the field',
          },
          void 0,
          _Text2 ||
            (_Text2 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This text is visible when the button is checked.',
            )),
        );
      },
    },
    {
      label: 'With a message and description',
      Example: function Example(_ref12) {
        const id = _ref12.id,
          handler = _ref12.handler;
        return /* #__PURE__*/ _jsx(Checkbox, {
          id,
          checked: false,
          onChange: handler,
          label: 'Label',
          tone: 'critical',
          message: 'This is a critical message',
          description: 'Extra information about the field',
        });
      },
    },
    {
      label: 'With nested content, a message and description',
      Example: function Example(_ref13) {
        const id = _ref13.id,
          handler = _ref13.handler;
        return /* #__PURE__*/ _jsx(
          Checkbox,
          {
            id,
            checked: true,
            onChange: handler,
            label: 'Label',
            tone: 'critical',
            message: 'This is a critical message',
            description: 'Extra information about the field',
          },
          void 0,
          _Text3 ||
            (_Text3 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This text is visible when the button is checked.',
            )),
        );
      },
    },
  ],
};

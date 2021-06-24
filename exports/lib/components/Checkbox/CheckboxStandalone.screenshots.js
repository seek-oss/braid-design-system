import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useState } from 'react';
import { CheckboxStandalone } from '../';
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

        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          checked: state,
          onChange: function onChange() {
            return setState(!state);
          },
          'aria-label': 'Label',
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

        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          checked: state,
          onChange: function onChange() {
            return setState(!state);
          },
          'aria-label': 'Label',
          size: 'small',
        });
      },
    },
    {
      label: 'Checked',
      Example: function Example(_ref3) {
        const id = _ref3.id,
          handler = _ref3.handler;
        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          checked: true,
          onChange: handler,
          'aria-label': 'Label',
        });
      },
    },
    {
      label: 'Mixed state',
      Example: function Example(_ref4) {
        const id = _ref4.id,
          handler = _ref4.handler;
        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          checked: 'mixed',
          onChange: handler,
          'aria-label': 'Label',
        });
      },
    },
    {
      label: 'Disabled',
      background: 'card',
      Example: function Example(_ref5) {
        const id = _ref5.id,
          handler = _ref5.handler;
        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          disabled: true,
          checked: false,
          onChange: handler,
          'aria-label': 'Label',
        });
      },
    },
    {
      label: 'Critical',
      Example: function Example(_ref6) {
        const id = _ref6.id,
          handler = _ref6.handler;
        return /* #__PURE__*/ _jsx(CheckboxStandalone, {
          id,
          checked: false,
          onChange: handler,
          'aria-label': 'Label',
          tone: 'critical',
        });
      },
    },
  ],
};

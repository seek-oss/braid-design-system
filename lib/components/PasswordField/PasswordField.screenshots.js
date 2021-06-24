import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink;

import React, { useState } from 'react';
import { PasswordField, TextLink } from '../';

const Container = function Container(_ref) {
  const children = _ref.children;
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
};

Container.displayName = 'Container';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'PasswordField',
      Container,
      Example: function Example(_ref2) {
        const id = _ref2.id;

        const _useState = useState('qwerty'),
          _useState2 = _slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
        });
      },
    },
    {
      label: 'PasswordField with message',
      Container,
      Example: function Example(_ref3) {
        const id = _ref3.id;

        const _useState3 = useState('qwerty'),
          _useState4 = _slicedToArray(_useState3, 2),
          value = _useState4[0],
          setValue = _useState4[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          value,
          message: 'e.g. Cannot be "password"',
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
        });
      },
    },
    {
      label: 'PasswordField with secondary label',
      Container,
      Example: function Example(_ref4) {
        const id = _ref4.id;

        const _useState5 = useState('qwerty'),
          _useState6 = _slicedToArray(_useState5, 2),
          value = _useState6[0],
          setValue = _useState6[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          secondaryLabel: 'required',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
        });
      },
    },
    {
      label: 'PasswordField with tertiary label',
      Container,
      Example: function Example(_ref5) {
        const id = _ref5.id;

        const _useState7 = useState('qwerty'),
          _useState8 = _slicedToArray(_useState7, 2),
          value = _useState8[0],
          setValue = _useState8[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          tertiaryLabel:
            _TextLink ||
            (_TextLink = /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'Forgot Password?',
            )),
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
        });
      },
    },
    {
      label: 'PasswordField with description',
      Container,
      Example: function Example(_ref6) {
        const id = _ref6.id;

        const _useState9 = useState('qwerty'),
          _useState10 = _slicedToArray(_useState9, 2),
          value = _useState10[0],
          setValue = _useState10[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
          description:
            'Must be 8 characters long and include a capital letter, a number and a symbol',
        });
      },
    },
    {
      label: 'PasswordField with critical message',
      Container,
      Example: function Example(_ref7) {
        const id = _ref7.id;

        const _useState11 = useState('qwerty'),
          _useState12 = _slicedToArray(_useState11, 2),
          value = _useState12[0],
          setValue = _useState12[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          tone: 'critical',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
          message: 'Not strong enough',
        });
      },
    },
    {
      label: 'PasswordField with positive message',
      Container,
      Example: function Example(_ref8) {
        const id = _ref8.id;

        const _useState13 = useState('qwerty'),
          _useState14 = _slicedToArray(_useState13, 2),
          value = _useState14[0],
          setValue = _useState14[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
          message: 'Strong!',
          tone: 'positive',
        });
      },
    },
    {
      label: 'PasswordField disabled',
      Container,
      Example: function Example(_ref9) {
        const id = _ref9.id;

        const _useState15 = useState('qwerty'),
          _useState16 = _slicedToArray(_useState15, 2),
          value = _useState16[0],
          setValue = _useState16[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          value,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
          disabled: true,
        });
      },
    },
    {
      label: 'PasswordField on Brand Background',
      background: 'brand',
      Container,
      Example: function Example(_ref10) {
        const id = _ref10.id;

        const _useState17 = useState('qwerty'),
          _useState18 = _slicedToArray(_useState17, 2),
          value = _useState18[0],
          setValue = _useState18[1];

        return /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Password',
          id,
          onChange: function onChange(ev) {
            return setValue(ev.currentTarget.value);
          },
          value,
        });
      },
    },
  ],
};

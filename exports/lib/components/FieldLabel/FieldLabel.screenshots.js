import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink, _TextLink2;

import React from 'react';
import { FieldLabel, TextLink } from '../';

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
      label: 'Standard Field Label',
      Container,
      Example: function Example(_ref2) {
        const id = _ref2.id;
        return /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'This is a field label',
        });
      },
    },
    {
      label: 'Field Label with secondary',
      Container,
      Example: function Example(_ref3) {
        const id = _ref3.id;
        return /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Username',
          secondaryLabel: 'Max 30 characters',
        });
      },
    },
    {
      label: 'Field Label with tertiary label',
      Container,
      Example: function Example(_ref4) {
        const id = _ref4.id;
        return /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Password',
          tertiaryLabel:
            _TextLink ||
            (_TextLink = /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'Forgot password?',
            )),
        });
      },
    },
    {
      label: 'Field Label with all types',
      Container,
      Example: function Example(_ref5) {
        const id = _ref5.id;
        return /* #__PURE__*/ _jsx(FieldLabel, {
          htmlFor: id,
          label: 'Title',
          secondaryLabel: 'Optional',
          tertiaryLabel:
            _TextLink2 ||
            (_TextLink2 = /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'Help?',
            )),
        });
      },
    },
  ],
};

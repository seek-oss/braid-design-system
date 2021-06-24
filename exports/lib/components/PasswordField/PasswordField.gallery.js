import _jsx from '@babel/runtime/helpers/jsx';

let _TextLink;

import React from 'react';
import { PasswordField, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example(_ref) {
      const id = _ref.id,
        getState = _ref.getState,
        setState = _ref.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
        }),
      );
    },
  },
  {
    label: 'With additional labels',
    Example: function Example(_ref2) {
      const id = _ref2.id,
        getState = _ref2.getState,
        setState = _ref2.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          secondaryLabel: 'optional',
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
        }),
      );
    },
  },
  {
    label: 'With a description',
    Example: function Example(_ref3) {
      const id = _ref3.id,
        getState = _ref3.getState,
        setState = _ref3.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          description: 'Longer description of this field',
        }),
      );
    },
  },
  {
    label: 'With a critical message',
    Example: function Example(_ref4) {
      const id = _ref4.id,
        getState = _ref4.getState,
        setState = _ref4.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          tone: 'critical',
          message: 'Critical message',
        }),
      );
    },
  },
  {
    label: 'With a positive message',
    Example: function Example(_ref5) {
      const id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          tone: 'positive',
          message: 'Positive message',
        }),
      );
    },
  },
  {
    label: 'With a neutral message',
    Example: function Example(_ref6) {
      const id = _ref6.id,
        getState = _ref6.getState,
        setState = _ref6.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          tone: 'neutral',
          message: 'Neutral message',
        }),
      );
    },
  },
  {
    label: 'Disabled field',
    background: 'card',
    Example: function Example(_ref7) {
      const id = _ref7.id,
        getState = _ref7.getState,
        setState = _ref7.setState;
      return source(
        /* #__PURE__*/ _jsx(PasswordField, {
          label: 'Label',
          id,
          onChange: setState('passwordfield'),
          value: getState('passwordfield'),
          disabled: true,
        }),
      );
    },
  },
];

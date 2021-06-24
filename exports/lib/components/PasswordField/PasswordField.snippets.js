import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { PasswordField, TextLink } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Password',
      }),
    ),
  },
  {
    name: 'With additional labels',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Password',
        secondaryLabel: 'optional',
        tertiaryLabel: /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '#',
          },
          void 0,
          'Forgot password?',
        ),
      }),
    ),
  },
  {
    name: 'With a description',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Label',
        description: 'More detailed description of field.',
      }),
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Label',
        tone: 'critical',
        message: 'Critical message',
      }),
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Label',
        tone: 'positive',
        message: 'Positive message',
      }),
    ),
  },
  {
    name: 'With a neutral message',
    code: source(
      /* #__PURE__*/ _jsx(PasswordField, {
        label: 'Label',
        tone: 'neutral',
        message: 'Neutral message',
      }),
    ),
  },
];

import _jsx from '@babel/runtime/helpers/jsx';

let _Notice, _Notice2, _Notice3, _Notice4, _Notice5;

import React from 'react';
import { Notice, Text, Stack, TextLink, List } from '../';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Info Notice',
      Example: function Example() {
        return (
          _Notice ||
          (_Notice = /* #__PURE__*/ _jsx(
            Notice,
            {
              tone: 'info',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an important piece of information.',
            ),
          ))
        );
      },
    },
    {
      label: 'Notice with rich content',
      Example: function Example() {
        return (
          _Notice2 ||
          (_Notice2 = /* #__PURE__*/ _jsx(
            Notice,
            {
              tone: 'info',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is an important piece of information with a',
                ' ',
                /* #__PURE__*/ _jsx(
                  TextLink,
                  {
                    href: '#',
                  },
                  void 0,
                  'TextLink.',
                ),
              ),
              /* #__PURE__*/ _jsx(
                List,
                {
                  space: 'medium',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet 1'),
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet 2'),
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet 3'),
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'Promote Notice',
      Example: function Example() {
        return (
          _Notice3 ||
          (_Notice3 = /* #__PURE__*/ _jsx(
            Notice,
            {
              tone: 'promote',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a promoted piece of information.',
            ),
          ))
        );
      },
    },
    {
      label: 'Critical Notice',
      Example: function Example() {
        return (
          _Notice4 ||
          (_Notice4 = /* #__PURE__*/ _jsx(
            Notice,
            {
              tone: 'critical',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a critical piece of information.',
            ),
          ))
        );
      },
    },
    {
      label: 'Positive Notice',
      Example: function Example() {
        return (
          _Notice5 ||
          (_Notice5 = /* #__PURE__*/ _jsx(
            Notice,
            {
              tone: 'positive',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a positive piece of information.',
            ),
          ))
        );
      },
    },
  ],
};

import _jsx from '@babel/runtime/helpers/jsx';

let _List,
  _List2,
  _List3,
  _List4,
  _List5,
  _List6,
  _List7,
  _List8,
  _List9,
  _List10,
  _List11,
  _List12,
  _List13,
  _List14,
  _List15,
  _List16,
  _List17;

import React from 'react';
import { List, Text, Stack } from '..';
import { IconTick, Placeholder } from '../../playroom/components';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Standard List',
      Example: function Example() {
        return (
          _List ||
          (_List = /* #__PURE__*/ _jsx(
            List,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
          ))
        );
      },
    },
    {
      label: 'Numbered List',
      Example: function Example() {
        return (
          _List2 ||
          (_List2 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'number',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
          ))
        );
      },
    },
    {
      label: 'Alpha List',
      Example: function Example() {
        return (
          _List3 ||
          (_List3 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'alpha',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
          ))
        );
      },
    },
    {
      label: 'Roman List',
      Example: function Example() {
        return (
          _List4 ||
          (_List4 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'roman',
            },
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
          ))
        );
      },
    },
    {
      label: 'Icon List',
      Example: function Example() {
        return (
          _List5 ||
          (_List5 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'icon',
              icon: /* #__PURE__*/ _jsx(IconTick, {
                tone: 'positive',
              }),
            },
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
          ))
        );
      },
    },
    {
      label: 'List with paragraphs',
      Example: function Example() {
        return (
          _List6 ||
          (_List6 = /* #__PURE__*/ _jsx(
            List,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a paragraph.'),
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is another paragraph.',
              ),
            ),
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a paragraph.'),
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is another paragraph.',
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'Nested Lists',
      Example: function Example() {
        return (
          _List7 ||
          (_List7 = /* #__PURE__*/ _jsx(
            List,
            {
              space: 'large',
              type: 'number',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'This has a nested list.'),
              /* #__PURE__*/ _jsx(
                List,
                {
                  type: 'alpha',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
              ),
            ),
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'This has a nested list.'),
              /* #__PURE__*/ _jsx(
                List,
                {
                  type: 'alpha',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a nested list item.',
                ),
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'List with custom text size',
      Example: function Example() {
        return (
          _List8 ||
          (_List8 = /* #__PURE__*/ _jsx(
            List,
            {
              size: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a large list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a large list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a large list item.'),
          ))
        );
      },
    },
    {
      label: 'List with custom space between items',
      Example: function Example() {
        return (
          _List9 ||
          (_List9 = /* #__PURE__*/ _jsx(
            List,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with large space.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with large space.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with large space.',
            ),
          ))
        );
      },
    },
    {
      label: 'List with custom tone',
      Example: function Example() {
        return (
          _List10 ||
          (_List10 = /* #__PURE__*/ _jsx(
            List,
            {
              tone: 'secondary',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with secondary tone.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with secondary tone.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'List item with secondary tone.',
            ),
          ))
        );
      },
    },
    {
      label: 'Numbered List with custom start position',
      Example: function Example() {
        return (
          _List11 ||
          (_List11 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'number',
              start: 9,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a numbered list item.',
            ),
          ))
        );
      },
    },
    {
      label: 'Alpha List with custom start position',
      Example: function Example() {
        return (
          _List12 ||
          (_List12 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'alpha',
              start: 9,
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an alpha list item.',
            ),
          ))
        );
      },
    },
    {
      label: 'Roman List with custom start position',
      Example: function Example() {
        return (
          _List13 ||
          (_List13 = /* #__PURE__*/ _jsx(
            List,
            {
              type: 'roman',
              start: 9,
            },
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a Roman list item.'),
          ))
        );
      },
    },
    {
      label: 'Test: Size and tone should cascade to nested lists',
      Example: function Example() {
        return (
          _List14 ||
          (_List14 = /* #__PURE__*/ _jsx(
            List,
            {
              size: 'large',
              tone: 'critical',
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
                'Should be large and critical.',
              ),
              /* #__PURE__*/ _jsx(
                List,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'Should be large and critical.',
                ),
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'Test: Cascading size and tone should be overridable',
      Example: function Example() {
        return (
          _List15 ||
          (_List15 = /* #__PURE__*/ _jsx(
            List,
            {
              size: 'large',
              tone: 'critical',
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
                'Should be large and critical.',
              ),
              /* #__PURE__*/ _jsx(
                List,
                {
                  size: 'xsmall',
                  tone: 'positive',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'Should be xsmall and positive.',
                ),
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'Test: Flattens fragments',
      Example: function Example() {
        return (
          _List16 ||
          (_List16 = /* #__PURE__*/ _jsx(
            List,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'List item.'),
            /* #__PURE__*/ React.createElement(
              React.Fragment,
              null,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'List item.'),
            ),
            /* #__PURE__*/ React.createElement(
              React.Fragment,
              null,
              /* #__PURE__*/ React.createElement(
                React.Fragment,
                null,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'List item.'),
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'List item.'),
              ),
            ),
          ))
        );
      },
    },
    {
      label: 'Test: List items should be full width',
      Example: function Example() {
        return (
          _List17 ||
          (_List17 = /* #__PURE__*/ _jsx(
            List,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Placeholder, {
              height: 60,
            }),
          ))
        );
      },
    },
  ],
};

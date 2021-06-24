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
  _List13;

import React from 'react';
import { List, IconTick, Text, Stack } from '..';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example() {
      return source(
        _List ||
          (_List = /* #__PURE__*/ _jsx(
            List,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'This is a list item.'),
          )),
      );
    },
  },
  {
    label: 'Numbered',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Alpha',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Roman',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Icon',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'With paragraphs',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Nested Lists',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'With custom text size',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'With custom space between items',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'With custom tone',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Numbered with custom start position',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Alpha with custom start position',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
  {
    label: 'Roman with custom start position',
    Example: function Example() {
      return source(
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
          )),
      );
    },
  },
];

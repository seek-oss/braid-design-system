import _jsx from '@babel/runtime/helpers/jsx';

let _Columns, _Columns2, _Columns3, _List, _List2, _Columns4;

import React from 'react';
import source from '../../utils/source.macro';
import { List, Text, TextLink, Stack, Column, Columns } from '..';
import { IconTick, Strong } from '../../playroom/components';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(
      _Columns ||
        (_Columns = /* #__PURE__*/ _jsx(
          Columns,
          {
            space: 'large',
            collapseBelow: 'desktop',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              List,
              {},
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
            ),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              List,
              {
                type: 'number',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
            ),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              List,
              {
                type: 'alpha',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
            ),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              List,
              {
                type: 'roman',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
            ),
          ),
          /* #__PURE__*/ _jsx(
            Column,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              List,
              {
                type: 'icon',
                icon: /* #__PURE__*/ _jsx(IconTick, {}),
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
            ),
          ),
        )),
    );
  },
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'List semantics are handled for you automatically, including the use of ordered lists where appropriate.',
  ),
  alternatives: [],
  additional: [
    {
      label: 'Types of lists',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'A List can select a delimiter for its items by specifying the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'type'),
          ' prop, with supported values being',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'bullet'),
          ', ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'number'),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'alpha'),
          ' and ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'roman'),
          ' characters.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'A type of ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'icon'),
          ' may also be used, which then requires an icon component be provided to the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'icon'),
          ' ',
          'prop.',
        ),
      ),
      Example: function Example() {
        return source(
          _Columns2 ||
            (_Columns2 = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'large',
                collapseBelow: 'desktop',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Bullet'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'number',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'alpha',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'roman',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'icon',
                    icon: /* #__PURE__*/ _jsx(IconTick, {
                      tone: 'positive',
                    }),
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Icon'),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Tone, size and space',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Lists support the same sizes and tones as',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Text',
          },
          void 0,
          'Text',
        ),
        ', and the same spacing as ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Stack',
          },
          void 0,
          'Stack',
        ),
        '.',
      ),
      Example: function Example() {
        return source(
          _Columns3 ||
            (_Columns3 = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'large',
                collapseBelow: 'desktop',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    tone: 'secondary',
                    size: 'large',
                    space: 'gutter',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Large'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Large'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Large'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    tone: 'secondary',
                    size: 'standard',
                    space: 'medium',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Standard'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Standard'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Standard'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    tone: 'secondary',
                    size: 'small',
                    space: 'small',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Small'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Small'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Small'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    tone: 'secondary',
                    size: 'xsmall',
                    space: 'small',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Xsmall'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Xsmall'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Xsmall'),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Rich content',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can use a ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Stack',
          },
          void 0,
          'Stack',
        ),
        ' as a list item to display multiple lines of text.',
      ),
      Example: function Example() {
        return source(
          _List ||
            (_List = /* #__PURE__*/ _jsx(
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
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    weight: 'strong',
                  },
                  void 0,
                  'This is a paragraph.',
                ),
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
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    weight: 'strong',
                  },
                  void 0,
                  'This is a paragraph.',
                ),
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
      label: 'Nested lists',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Lists of varying types can be nested within each other.',
      ),
      Example: function Example() {
        return source(
          _List2 ||
            (_List2 = /* #__PURE__*/ _jsx(
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
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number list'),
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'alpha',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'medium',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number list'),
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'alpha',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha list'),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Custom start position',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Lists can be started from a higher number if needed.',
      ),
      Example: function Example() {
        return source(
          _Columns4 ||
            (_Columns4 = /* #__PURE__*/ _jsx(
              Columns,
              {
                space: 'large',
                collapseBelow: 'desktop',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'number',
                    start: 9,
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Number'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'alpha',
                    start: 9,
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Alpha'),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Column,
                {},
                void 0,
                /* #__PURE__*/ _jsx(
                  List,
                  {
                    type: 'roman',
                    start: 9,
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                  /* #__PURE__*/ _jsx(Text, {}, void 0, 'Roman'),
                ),
              ),
            )),
        );
      },
    },
  ],
};
export default docs;

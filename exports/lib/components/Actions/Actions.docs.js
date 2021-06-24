import _jsx from '@babel/runtime/helpers/jsx';

let _Card, _Stack, _Stack2, _Actions;

import React from 'react';
import source from '../../utils/source.macro';
import {
  Actions,
  Button,
  TextLink,
  Text,
  Strong,
  IconSend,
  IconDelete,
  Card,
  Stack,
} from '../';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(
      _Card ||
        (_Card = /* #__PURE__*/ _jsx(
          Card,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Actions,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 2'),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'transparent',
              },
              void 0,
              'Button 3',
            ),
          ),
        )),
    );
  },
  alternatives: [
    {
      name: 'Inline',
      description: 'For fine-grained control of spacing and alignment.',
    },
    {
      name: 'Columns',
      description: 'For fine-grained control of widths, spacing and alignment.',
    },
  ],
  additional: [
    {
      label: 'Sizes',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can customise the size of the actions via the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'size'),
        ' prop, which accepts either',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'standard'),
        ' or ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'small.'),
      ),
      Example: function Example() {
        return source(
          _Stack ||
            (_Stack = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'large',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    weight: 'strong',
                  },
                  void 0,
                  'Standard size',
                ),
                /* #__PURE__*/ _jsx(
                  Actions,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                    },
                    void 0,
                    'Button 2',
                  ),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    weight: 'strong',
                  },
                  void 0,
                  'Small size',
                ),
                /* #__PURE__*/ _jsx(
                  Actions,
                  {
                    size: 'small',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                    },
                    void 0,
                    'Button 2',
                  ),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Icons',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can add icons to',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Button',
          },
          void 0,
          'Button',
        ),
        ' elements by nesting icons inside. The size of the icon will adjust automatically based on its surrounding context.',
      ),
      Example: function Example() {
        return source(
          _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'large',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    weight: 'strong',
                  },
                  void 0,
                  'Standard size',
                ),
                /* #__PURE__*/ _jsx(
                  Actions,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Button,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(IconSend, {}),
                    ' Send',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                    },
                    void 0,
                    'Cancel',
                  ),
                ),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    weight: 'strong',
                  },
                  void 0,
                  'Small size',
                ),
                /* #__PURE__*/ _jsx(
                  Actions,
                  {
                    size: 'small',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Button,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(IconSend, {}),
                    ' Send',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                    },
                    void 0,
                    'Cancel',
                  ),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Destructive actions',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'For destructive actions like \u201CDelete\u201D you can set the',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Button',
          },
          void 0,
          'Button',
        ),
        ' element\u2019s',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tone'),
        ' to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'critical.'),
      ),
      Example: function Example() {
        return source(
          _Actions ||
            (_Actions = /* #__PURE__*/ _jsx(
              Actions,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'critical',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconDelete, {}),
                ' Delete',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  variant: 'transparent',
                },
                void 0,
                'Cancel',
              ),
            )),
        );
      },
    },
  ],
};
export default docs;

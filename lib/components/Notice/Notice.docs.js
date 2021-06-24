import _jsx from '@babel/runtime/helpers/jsx';

let _Card, _Card2;

import React from 'react';
import source from '../../utils/source.macro';
import { Notice, Card, Text, Strong, Stack, TextLink, List } from '../';
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
            Stack,
            {
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Notice,
              {
                tone: 'promote',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is a promoted message.',
              ),
            ),
            /* #__PURE__*/ _jsx(
              Notice,
              {
                tone: 'info',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is an informative message.',
              ),
            ),
            /* #__PURE__*/ _jsx(
              Notice,
              {
                tone: 'positive',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is a positive message.',
              ),
            ),
            /* #__PURE__*/ _jsx(
              Notice,
              {
                tone: 'critical',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'This is a critical message.',
              ),
            ),
          ),
        )),
    );
  },
  accessibility: /* #__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'Follows the',
      ' ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href: 'https://www.w3.org/TR/wai-aria-practices/#alert',
        },
        void 0,
        'WAI-ARIA Alert Pattern',
      ),
      ', announcing messages with a',
      ' ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href: 'https://www.w3.org/TR/wai-aria/#aria-live',
        },
        void 0,
        'polite',
      ),
      ' ',
      'level of importance.',
    ),
    /* #__PURE__*/ _jsx(
      Text,
      {},
      void 0,
      'Note that the ',
      /* #__PURE__*/ _jsx(Strong, {}, void 0, 'caution'),
      ' tone is not supported because it\u2019s not possible to achieve an accessible contrast ratio while maintining an acceptable semantic colour. For this case, consider using an ',
      /* #__PURE__*/ _jsx(
        TextLink,
        {
          href: '/components/Alert',
        },
        void 0,
        'Alert',
      ),
      ' instead.',
    ),
  ),
  alternatives: [
    {
      name: 'Alert',
      description: 'For a stronger visual treatment.',
    },
    {
      name: 'useToast',
      description: 'For asynchronous messages that float above the page.',
    },
  ],
  additional: [
    {
      label: 'Content guidelines',
      description: /* #__PURE__*/ _jsx(
        Stack,
        {
          space: 'large',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'A Notice can contain layout components such as',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Stack',
            },
            void 0,
            'Stack',
          ),
          ' and',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Inline',
            },
            void 0,
            'Inline',
          ),
          ', as well as typographic components such as',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Text',
            },
            void 0,
            'Text',
          ),
          ',',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/TextLink',
            },
            void 0,
            'TextLink',
          ),
          ' and',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/List',
            },
            void 0,
            'List',
          ),
          '. We do not recommend using',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Button',
            },
            void 0,
            'Button',
          ),
          ' elements inside of Notice.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'This component has only been designed to use standard size text. Any other size of text will break the alignment with the icon.',
        ),
      ),
      Example: function Example() {
        return source(
          _Card2 ||
            (_Card2 = /* #__PURE__*/ _jsx(
              Card,
              {},
              void 0,
              /* #__PURE__*/ _jsx(
                Notice,
                {
                  tone: 'info',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Stack,
                  {
                    space: 'large',
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
              ),
            )),
        );
      },
    },
  ],
};
export default docs;

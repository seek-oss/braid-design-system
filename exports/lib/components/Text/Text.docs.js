import _jsx from '@babel/runtime/helpers/jsx';

let _Stack,
  _Text,
  _Text2,
  _Text3,
  _Text4,
  _Inline,
  _Inline2,
  _Inline3,
  _Text5,
  _Stack2;

import React from 'react';
import { Box, Text, Stack, Strong, TextLink, Inline, List } from '../';
import source from '../../utils/source.macro';
const docs = {
  category: 'Content',
  migrationGuide: true,
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
              space: 'medium',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'large',
              },
              void 0,
              'Text size large regular',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'large',
                weight: 'medium',
              },
              void 0,
              'Text size large medium',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'large',
                weight: 'strong',
              },
              void 0,
              'Text size large strong',
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
                size: 'standard',
              },
              void 0,
              'Text size standard regular',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'standard',
                weight: 'medium',
              },
              void 0,
              'Text size standard medium',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'standard',
                weight: 'strong',
              },
              void 0,
              'Text size standard strong',
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
                size: 'small',
              },
              void 0,
              'Text size small regular',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'small',
                weight: 'medium',
              },
              void 0,
              'Text size small medium',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'small',
                weight: 'strong',
              },
              void 0,
              'Text size small strong',
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
                size: 'xsmall',
              },
              void 0,
              'Text size xsmall regular',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'xsmall',
                weight: 'medium',
              },
              void 0,
              'Text size xsmall medium',
            ),
            /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'xsmall',
                weight: 'strong',
              },
              void 0,
              'Text size xsmall strong',
            ),
          ),
        )),
    );
  },
  alternatives: [
    {
      name: 'Heading',
      description: 'For titles.',
    },
    {
      name: 'Strong',
      description: 'For emphasising a piece of text.',
    },
    {
      name: 'Secondary',
      description: 'For de-emphasising a piece of text.',
    },
    {
      name: 'Notice',
      description: 'For tone-specific messaging.',
    },
  ],
  additional: [
    {
      label: 'Alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Text can be aligned via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' prop. If you need alignment to differ across various screen sizes, you can provide responsive values describing the alignment of each breakpoint, e.g.',
        ' ',
        /* #__PURE__*/ _jsx(
          Strong,
          {},
          void 0,
          "align={{ mobile: 'center', tablet: 'left' }}",
        ),
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
              dividers: true,
            },
            void 0,
            _Text ||
              (_Text = /* #__PURE__*/ _jsx(
                Text,
                {
                  align: 'left',
                },
                void 0,
                'Left',
              )),
            _Text2 ||
              (_Text2 = /* #__PURE__*/ _jsx(
                Text,
                {
                  align: 'center',
                },
                void 0,
                'Center',
              )),
            _Text3 ||
              (_Text3 = /* #__PURE__*/ _jsx(
                Text,
                {
                  align: 'right',
                },
                void 0,
                'Right',
              )),
            /* #__PURE__*/ _jsx(
              Text,
              {
                align: {
                  mobile: 'center',
                  tablet: 'left',
                },
              },
              void 0,
              'Center on mobile',
            ),
          ),
        );
      },
    },
    {
      label: 'Truncation',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'If you\u2019re displaying user-generated content that may not fit within your layout, you can truncate text with the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'truncate'),
        ' ',
        'prop.',
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                width: 215,
              },
            },
            void 0,
            _Text4 ||
              (_Text4 = /* #__PURE__*/ _jsx(
                Text,
                {
                  truncate: true,
                },
                void 0,
                'Really long text that won\u2019t fit in the layout',
              )),
          ),
        );
      },
    },
    {
      label: 'Tones',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The foreground colour of text can be set by applying the correct tone. In addition to the',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/foundations/tones',
            },
            void 0,
            'foundation tones',
          ),
          ',',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'secondary'),
          ' provides a way to de-emphasise text. It is not recommended to use ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'caution'),
          ' on light backgrounds due to contrast issues around yellow text.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {
            tone: 'secondary',
          },
          void 0,
          'When using tones other than ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'neutral'),
          ' and',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'secondary'),
          ', consider using',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/componentes/Notice',
            },
            void 0,
            'Notice',
          ),
          ' instead.',
        ),
      ),
      background: 'card',
      Example: function Example() {
        return source(
          _Inline ||
            (_Inline = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'neutral',
                },
                void 0,
                'neutral',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'secondary',
                },
                void 0,
                'secondary',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'promote',
                },
                void 0,
                'promote',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'info',
                },
                void 0,
                'info',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'positive',
                },
                void 0,
                'positive',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'critical',
                },
                void 0,
                'critical',
              ),
            )),
        );
      },
    },
    {
      label: 'Additional tones',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Text supports some additional tones for special cases:',
        ),
        /* #__PURE__*/ _jsx(
          List,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'link'),
            ' \u2014 For navigation text.',
          ),
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'formAccent'),
            ' \u2014 For highlight text within form components.',
          ),
        ),
      ),
      background: 'card',
      Example: function Example() {
        return source(
          _Inline2 ||
            (_Inline2 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'link',
                },
                void 0,
                'link',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'formAccent',
                },
                void 0,
                'formAccent',
              ),
            )),
        );
      },
    },
    {
      label: 'Contextual tones',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'When inside a container that specifies a tone-based background, the text tone will be matched by default.',
      ),
      background: 'card',
      Example: function Example() {
        return source(
          _Inline3 ||
            (_Inline3 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'neutralLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'neutral'),
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'promoteLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'promote'),
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'infoLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'info'),
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'positiveLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'positive'),
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'cautionLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'caution'),
              ),
              /* #__PURE__*/ _jsx(
                Box,
                {
                  background: 'criticalLight',
                  padding: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'critical'),
              ),
            )),
        );
      },
    },
    {
      label: 'Custom semantics',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The HTML tag can be customised to ensure the underlying document semantics are meaningful. For example, using a ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'p'),
        ' ',
        'element for marking-up a paragraph. This can be done using the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'component'),
        ' prop.',
      ),
      Example: function Example() {
        return source(
          _Text5 ||
            (_Text5 = /* #__PURE__*/ _jsx(
              Text,
              {
                component: 'p',
              },
              void 0,
              'Uses a ',
              /* #__PURE__*/ _jsx(Strong, {}, void 0, 'p'),
              ' element to provide paragraph semantics.',
            )),
        );
      },
    },
    {
      label: 'Contrast',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'To ensure text has sufficient contrast, when on a dark background the foreground colour is inverted.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'When using custom backgrounds or images, this behaviour can be applied using the',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/BackgroundProvider',
            },
            void 0,
            'BackgroundProvider',
          ),
          ' ',
          'and specifying whether the background is dark or light.',
        ),
      ),
      background: 'brand',
      Example: function Example() {
        return source(
          _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(Text, {}, void 0, 'Neutral text'),
              /* #__PURE__*/ _jsx(
                Text,
                {
                  tone: 'secondary',
                },
                void 0,
                'Secondary text',
              ),
            )),
        );
      },
    },
  ],
};
export default docs;

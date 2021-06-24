import _jsx from '@babel/runtime/helpers/jsx';

let _Card,
  _Inline,
  _Stack,
  _Inline2,
  _Inline3,
  _Inline4,
  _Inline5,
  _Box,
  _Stack2;

import React from 'react';
import {
  Button,
  Card,
  Stack,
  Box,
  Heading,
  Text,
  TextLink,
  Inline,
  Strong,
  IconSend,
  IconDelete,
} from '../';
import source from '../../utils/source.macro';
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
            Inline,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Solid'),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'ghost',
              },
              void 0,
              'Ghost',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'soft',
              },
              void 0,
              'Soft',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'transparent',
              },
              void 0,
              'Transparent',
            ),
          ),
        )),
    );
  },
  alternatives: [
    {
      name: 'ButtonLink',
      description: 'For a semantic link that looks like a button.',
    },
    {
      name: 'TextLinkButton',
      description: 'For a semantic button that looks like a link.',
    },
  ],
  additional: [
    {
      label: 'Variants',
      background: 'card',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can customise the appearance of the button via the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'variant'),
        ' prop, which accepts either',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'solid'),
        ', ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'ghost'),
        ', ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'soft'),
        ' ',
        'or ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'transparent'),
        '.',
      ),
      Example: function Example() {
        return source(
          _Inline ||
            (_Inline = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'small',
                collapseBelow: 'desktop',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Button,
                {
                  variant: 'solid',
                },
                void 0,
                'Solid',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  variant: 'ghost',
                },
                void 0,
                'Ghost',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  variant: 'soft',
                },
                void 0,
                'Soft',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  variant: 'transparent',
                },
                void 0,
                'Transparent',
              ),
            )),
        );
      },
    },
    {
      label: 'Sizes',
      background: 'card',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can customise the size of the button via the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'size'),
        ' ',
        'prop, which accepts either ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'standard'),
        ' or',
        ' ',
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
                  Inline,
                  {
                    space: 'small',
                    collapseBelow: 'desktop',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(Button, {}, void 0, 'Solid'),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'ghost',
                    },
                    void 0,
                    'Ghost',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'soft',
                    },
                    void 0,
                    'Soft',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                    },
                    void 0,
                    'Transparent',
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
                  Inline,
                  {
                    space: 'small',
                    collapseBelow: 'desktop',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      size: 'small',
                    },
                    void 0,
                    'Solid',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'ghost',
                      size: 'small',
                    },
                    void 0,
                    'Ghost',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'soft',
                      size: 'small',
                    },
                    void 0,
                    'Soft',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      variant: 'transparent',
                      size: 'small',
                    },
                    void 0,
                    'Transparent',
                  ),
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Icons',
      background: 'card',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'You can add an icon to the button by nesting an icon element inside. The size of the icon will adjust automatically based on the size on the button.',
      ),
      Example: function Example() {
        return source(
          _Inline2 ||
            (_Inline2 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'gutter',
                alignY: 'center',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                  align: 'center',
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
                  Button,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(IconSend, {}),
                  ' Send',
                ),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'small',
                  align: 'center',
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
                  Button,
                  {
                    size: 'small',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(IconSend, {}),
                  ' Send',
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Loading Button',
      background: 'card',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You can indicate a loading state inline with the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'loading'),
          ' prop, which also ensures that the button is disabled.',
        ),
      ),
      Example: function Example() {
        return source(
          _Inline3 ||
            (_Inline3 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Button,
                {
                  loading: true,
                },
                void 0,
                'Loading Button',
              ),
            )),
        );
      },
    },
    {
      label: 'Branding',
      background: 'card',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'For hero actions that want to leverage the brand colour, you can set the button\u2019s ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tone'),
        ' to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'brandAccent.'),
      ),
      Example: function Example() {
        return source(
          _Inline4 ||
            (_Inline4 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'brandAccent',
                },
                void 0,
                'Search',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'brandAccent',
                  variant: 'ghost',
                },
                void 0,
                'Search',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'brandAccent',
                  variant: 'soft',
                },
                void 0,
                'Search',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'brandAccent',
                  variant: 'transparent',
                },
                void 0,
                'Search',
              ),
            )),
        );
      },
    },
    {
      label: 'Destructive actions',
      background: 'card',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'For destructive actions like \u201CDelete\u201D you can set the button\u2019s',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'tone'),
        ' to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'critical.'),
      ),
      Example: function Example() {
        return source(
          _Inline5 ||
            (_Inline5 = /* #__PURE__*/ _jsx(
              Inline,
              {
                space: 'small',
              },
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
                  tone: 'critical',
                  variant: 'ghost',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconDelete, {}),
                ' Delete',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'critical',
                  variant: 'soft',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconDelete, {}),
                ' Delete',
              ),
              /* #__PURE__*/ _jsx(
                Button,
                {
                  tone: 'critical',
                  variant: 'transparent',
                },
                void 0,
                /* #__PURE__*/ _jsx(IconDelete, {}),
                ' Delete',
              ),
            )),
        );
      },
    },
    {
      label: 'Contextual design',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'ghost'),
          ', ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'soft'),
          ', and',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'transparent'),
          ' variants are inverted when rendered on a dark background.',
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
          _Box ||
            (_Box = /* #__PURE__*/ _jsx(
              Box,
              {
                background: 'brand',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Button,
                  {
                    variant: 'ghost',
                  },
                  void 0,
                  'Ghost',
                ),
                /* #__PURE__*/ _jsx(
                  Button,
                  {
                    variant: 'soft',
                  },
                  void 0,
                  'Soft',
                ),
                /* #__PURE__*/ _jsx(
                  Button,
                  {
                    variant: 'transparent',
                  },
                  void 0,
                  'Transparent',
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Vertical bleed',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'With the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'bleedY'),
          ' prop, you can allow the background colour to bleed out into the surrounding layout.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'For example, we can align a button to a',
          ' ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Heading',
            },
            void 0,
            'Heading',
          ),
          ' element using an ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/Inline',
            },
            void 0,
            'Inline',
          ),
          ', even though the button is actually taller than the heading. If we didn\u2019t use the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'bleedY'),
          ' prop in this case, the button would introduce unwanted space above and below the heading.',
        ),
      ),
      background: 'card',
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
                  Box,
                  {
                    background: 'neutralLight',
                    borderRadius: 'standard',
                    padding: 'gutter',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'card',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Inline,
                      {
                        space: 'xsmall',
                        alignY: 'center',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(
                        Heading,
                        {
                          level: '2',
                        },
                        void 0,
                        'Heading',
                      ),
                      /* #__PURE__*/ _jsx(
                        Button,
                        {
                          bleedY: true,
                        },
                        void 0,
                        'Button',
                      ),
                    ),
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
                  Box,
                  {
                    background: 'neutralLight',
                    borderRadius: 'standard',
                    padding: 'gutter',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Box,
                    {
                      background: 'card',
                    },
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Inline,
                      {
                        space: 'xsmall',
                        alignY: 'center',
                      },
                      void 0,
                      /* #__PURE__*/ _jsx(
                        Heading,
                        {
                          level: '2',
                        },
                        void 0,
                        'Heading',
                      ),
                      /* #__PURE__*/ _jsx(
                        Button,
                        {
                          bleedY: true,
                          size: 'small',
                        },
                        void 0,
                        'Button',
                      ),
                    ),
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

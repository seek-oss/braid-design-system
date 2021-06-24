import _jsx from '@babel/runtime/helpers/jsx';

let _Stack,
  _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Stack2,
  _Stack3,
  _Stack4;

import React from 'react';
import { Stack, Hidden, Text, TextLink, Strong } from '../';
import { Placeholder } from '../private/Placeholder/Placeholder';
import source from '../../utils/source.macro';
const docs = {
  category: 'Layout',
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
          /* #__PURE__*/ _jsx(Placeholder, {
            height: 40,
          }),
          /* #__PURE__*/ _jsx(Placeholder, {
            height: 40,
          }),
          /* #__PURE__*/ _jsx(Placeholder, {
            height: 40,
          }),
        )),
    );
  },
  alternatives: [
    {
      name: 'Box',
      description: 'For custom layouts.',
    },
  ],
  additional: [
    {
      label: 'Spacing',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The ',
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/foundations/layout#spacing',
            },
            void 0,
            'spacing',
          ),
          ' ',
          'between children can be adjusted using the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'space'),
          ' ',
          'prop.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Responsive values are supported, e.g.',
          ' ',
          /* #__PURE__*/ _jsx(
            Strong,
            {},
            void 0,
            "space={{ mobile: 'small', tablet: 'medium', desktop: 'large' }}",
          ),
        ),
      ),
      Example: function Example() {
        return source(
          /* #__PURE__*/ _jsx(
            Stack,
            {
              space: {
                mobile: 'small',
                tablet: 'medium',
                desktop: 'large',
              },
              align: 'center',
            },
            void 0,
            _Placeholder ||
              (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 40,
              })),
            _Placeholder2 ||
              (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 60,
              })),
            _Placeholder3 ||
              (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                width: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Horizontal alignment',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Items can be aligned horiontally using the ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'align'),
        ' ',
        'prop. Responsive values are supported, e.g.',
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
          _Stack2 ||
            (_Stack2 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
                dividers: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'gutter',
                  align: 'left',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                  label: 'left',
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 80,
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                }),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'gutter',
                  align: 'center',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 80,
                  height: 40,
                  label: 'center',
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                }),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'gutter',
                  align: 'right',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 80,
                  height: 40,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  width: 60,
                  height: 40,
                  label: 'right',
                }),
              ),
            )),
        );
      },
    },
    {
      label: 'Dividers',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Dividers can be placed between each item using the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'dividers'),
        ' prop. Supports both ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'regular'),
        ' ',
        'and ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'strong'),
        ' variants',
      ),
      Example: function Example() {
        return source(
          _Stack3 ||
            (_Stack3 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'xxlarge',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'medium',
                  dividers: true,
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'regular',
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                }),
              ),
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'medium',
                  dividers: 'strong',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                  label: 'strong',
                }),
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 30,
                }),
              ),
            )),
        );
      },
    },
    {
      label: 'Responsively hiding stack items',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Hidden',
          },
          void 0,
          'Hidden',
        ),
        ' component can be used to responsively hide specific items.',
      ),
      Example: function Example() {
        return source(
          _Stack4 ||
            (_Stack4 = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                label: '1',
              }),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  below: 'tablet',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '2',
                }),
              ),
              /* #__PURE__*/ _jsx(
                Hidden,
                {
                  above: 'mobile',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                  label: '3',
                }),
              ),
              /* #__PURE__*/ _jsx(Placeholder, {
                height: 40,
                label: '4',
              }),
            )),
        );
      },
    },
  ],
};
export default docs;

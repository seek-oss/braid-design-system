import _jsx from '@babel/runtime/helpers/jsx';

let _Rating, _Stack, _Rating2;

import React from 'react';
import source from '../../utils/source.macro';
import { Rating, Stack, Inline, Text, Strong, TextLink } from '../';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(
      _Rating ||
        (_Rating = /* #__PURE__*/ _jsx(Rating, {
          size: 'large',
          rating: 3,
        })),
    );
  },
  alternatives: [],
  additional: [
    {
      label: 'Sizing',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Follows the same sizing rules as the',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Text',
          },
          void 0,
          'Text',
        ),
        ' component.',
      ),
      Example: function Example() {
        return source(
          _Stack ||
            (_Stack = /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'gutter',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Rating, {
                  size: 'large',
                  rating: 3,
                }),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    size: 'large',
                  },
                  void 0,
                  'large',
                ),
              ),
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Rating, {
                  size: 'standard',
                  rating: 3,
                }),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    size: 'standard',
                  },
                  void 0,
                  'standard',
                ),
              ),
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Rating, {
                  size: 'small',
                  rating: 3,
                }),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    size: 'small',
                  },
                  void 0,
                  'small',
                ),
              ),
              /* #__PURE__*/ _jsx(
                Inline,
                {
                  space: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Rating, {
                  size: 'xsmall',
                  rating: 3,
                }),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    tone: 'secondary',
                    size: 'xsmall',
                  },
                  void 0,
                  'xsmall',
                ),
              ),
            )),
        );
      },
    },
    {
      label: 'Hiding the text rating',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'The text rating can be hidden by setting',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'showTextRating'),
        ' to ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'false'),
        '.',
      ),
      Example: function Example() {
        return source(
          _Rating2 ||
            (_Rating2 = /* #__PURE__*/ _jsx(Rating, {
              size: 'large',
              rating: 4.2,
              showTextRating: false,
            })),
        );
      },
    },
  ],
};
export default docs;

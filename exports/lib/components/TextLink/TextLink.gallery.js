import _jsx from '@babel/runtime/helpers/jsx';

let _Text, _Text2, _Text3;

import React from 'react';
import { Text, TextLink } from '../';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard',
    Example: function Example() {
      return source(
        _Text ||
          (_Text = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
                hitArea: 'large',
              },
              void 0,
              'TextLink',
            ),
          )),
      );
    },
  },
  {
    label: 'Weak weight',
    Example: function Example() {
      return source(
        _Text2 ||
          (_Text2 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'This sentence contains a',
            ' ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
                weight: 'weak',
              },
              void 0,
              'weak TextLink',
            ),
            '.',
          )),
      );
    },
  },
  {
    label: 'Visited links',
    Example: function Example() {
      return source(
        _Text3 ||
          (_Text3 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'This sentence contains a',
            ' ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '',
                showVisited: true,
              },
              void 0,
              'visited TextLink.',
            ),
          )),
      );
    },
  },
];

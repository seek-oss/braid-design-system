import _jsx from '@babel/runtime/helpers/jsx';

let _Text,
  _Text2,
  _Text3,
  _Text4,
  _Text5,
  _Text6,
  _Actions,
  _Text7,
  _Heading,
  _Heading2,
  _Heading3,
  _Heading4,
  _Text8,
  _Actions2,
  _TextLink,
  _TextLink2,
  _TextLink3;

import React, { Fragment } from 'react';
import {
  Actions,
  Box,
  Button,
  Heading,
  IconNewWindow,
  IconChevron,
  Stack,
  Text,
  TextLink,
} from '../';
import { backgrounds } from '../../utils/docsHelpers';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Regular TextLink',
      Example: function Example() {
        return (
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
          ))
        );
      },
    },
    {
      label: 'Regular TextLink in a sentence',
      Example: function Example() {
        return (
          _Text2 ||
          (_Text2 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'This sentence contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'Weak TextLink in a sentence',
      Example: function Example() {
        return (
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
                href: '#',
                weight: 'weak',
              },
              void 0,
              'weak TextLink',
            ),
            '.',
          ))
        );
      },
    },
    {
      label: 'TextLink in secondary text',
      Example: function Example() {
        return (
          _Text4 ||
          (_Text4 = /* #__PURE__*/ _jsx(
            Text,
            {
              tone: 'secondary',
            },
            void 0,
            'This sentence contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'Visited TextLink',
      Example: function Example() {
        return (
          _Text5 ||
          (_Text5 = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'TextLink on dark background',
      background: 'brand',
      Example: function Example() {
        return (
          _Text6 ||
          (_Text6 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'This sentence contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink inside Actions (Deprecated)',
      Example: function Example() {
        return (
          _Actions ||
          (_Actions = /* #__PURE__*/ _jsx(
            Actions,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button'),
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink',
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink inside large Text',
      Example: function Example() {
        return (
          _Text7 ||
          (_Text7 = /* #__PURE__*/ _jsx(
            Text,
            {
              size: 'large',
            },
            void 0,
            'This sentence contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink inside Heading',
      Example: function Example() {
        return (
          _Heading ||
          (_Heading = /* #__PURE__*/ _jsx(
            Heading,
            {
              level: '3',
            },
            void 0,
            'This heading contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink inside weak Heading',
      Example: function Example() {
        return (
          _Heading2 ||
          (_Heading2 = /* #__PURE__*/ _jsx(
            Heading,
            {
              level: '3',
              weight: 'weak',
            },
            void 0,
            'This heading contains a ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'Weak TextLink inside Heading',
      Example: function Example() {
        return (
          _Heading3 ||
          (_Heading3 = /* #__PURE__*/ _jsx(
            Heading,
            {
              level: '3',
            },
            void 0,
            'This heading contains a',
            ' ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
                weight: 'weak',
              },
              void 0,
              'weak TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'Weak TextLink inside weak Heading',
      Example: function Example() {
        return (
          _Heading4 ||
          (_Heading4 = /* #__PURE__*/ _jsx(
            Heading,
            {
              level: '3',
              weight: 'weak',
            },
            void 0,
            'This heading contains a',
            ' ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
                weight: 'weak',
              },
              void 0,
              'weak TextLink.',
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink with icon',
      Example: function Example() {
        return (
          _Text8 ||
          (_Text8 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'This sentence contains a',
            ' ',
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink',
              /* #__PURE__*/ _jsx(IconChevron, {
                direction: 'right',
              }),
            ),
            '.',
          ))
        );
      },
    },
    {
      label: 'TextLink inside Actions with icon (Deprecated)',
      Example: function Example() {
        return (
          _Actions2 ||
          (_Actions2 = /* #__PURE__*/ _jsx(
            Actions,
            {},
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button'),
            /* #__PURE__*/ _jsx(
              TextLink,
              {
                href: '#',
              },
              void 0,
              'TextLink ',
              /* #__PURE__*/ _jsx(IconChevron, {
                direction: 'right',
              }),
            ),
          ))
        );
      },
    },
    {
      label: 'TextLink Contrast',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.map(function (background, i) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
              },
              i,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'none',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    baseline: false,
                  },
                  void 0,
                  background,
                  ' ',
                  _TextLink ||
                    (_TextLink = /* #__PURE__*/ _jsx(
                      TextLink,
                      {
                        href: '#',
                      },
                      void 0,
                      'with default weight ',
                      /* #__PURE__*/ _jsx(IconNewWindow, {}),
                    )),
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    baseline: false,
                  },
                  void 0,
                  background,
                  ' ',
                  _TextLink2 ||
                    (_TextLink2 = /* #__PURE__*/ _jsx(
                      TextLink,
                      {
                        href: '#',
                        weight: 'regular',
                      },
                      void 0,
                      'with regular weight ',
                      /* #__PURE__*/ _jsx(IconNewWindow, {}),
                    )),
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    baseline: false,
                  },
                  void 0,
                  background,
                  ' ',
                  _TextLink3 ||
                    (_TextLink3 = /* #__PURE__*/ _jsx(
                      TextLink,
                      {
                        href: '#',
                        weight: 'weak',
                      },
                      void 0,
                      'with weak weight ',
                      /* #__PURE__*/ _jsx(IconNewWindow, {}),
                    )),
                ),
              ),
            );
          }),
        );
      },
    },
  ],
};

import _jsx from '@babel/runtime/helpers/jsx';

let _Alert, _Alert2, _Alert3, _Alert4, _Alert5, _Text, _Alert6;

import React from 'react';
import source from '../../utils/source.macro';
import { Alert, Text, Stack, TextLink, List } from '../';
export var galleryItems = [
  {
    label: 'Promote',
    Example: function Example() {
      return source(
        _Alert ||
          (_Alert = /* #__PURE__*/ _jsx(
            Alert,
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
          )),
      );
    },
  },
  {
    label: 'Info',
    Example: function Example() {
      return source(
        _Alert2 ||
          (_Alert2 = /* #__PURE__*/ _jsx(
            Alert,
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
          )),
      );
    },
  },
  {
    label: 'Positive',
    Example: function Example() {
      return source(
        _Alert3 ||
          (_Alert3 = /* #__PURE__*/ _jsx(
            Alert,
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
          )),
      );
    },
  },
  {
    label: 'Caution',
    Example: function Example() {
      return source(
        _Alert4 ||
          (_Alert4 = /* #__PURE__*/ _jsx(
            Alert,
            {
              tone: 'caution',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is a cautionary message.',
            ),
          )),
      );
    },
  },
  {
    label: 'Critical',
    Example: function Example() {
      return source(
        _Alert5 ||
          (_Alert5 = /* #__PURE__*/ _jsx(
            Alert,
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
          )),
      );
    },
  },
  {
    label: 'Dismissible',
    Example: function Example() {
      return source(
        /* #__PURE__*/ _jsx(
          Alert,
          {
            tone: 'info',
            onClose: function onClose() {},
            closeLabel: 'Close info alert',
          },
          void 0,
          _Text ||
            (_Text = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'This is an informative message.',
            )),
        ),
      );
    },
  },
  {
    label: 'With rich content',
    Example: function Example() {
      return source(
        _Alert6 ||
          (_Alert6 = /* #__PURE__*/ _jsx(
            Alert,
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
                'This is an informative message with a',
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
          )),
      );
    },
  },
];

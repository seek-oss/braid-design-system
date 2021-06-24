import _jsx from '@babel/runtime/helpers/jsx';

let _Actions, _Actions2, _Actions3, _Actions4, _Actions5;

import React, { Fragment } from 'react';
import { Box, Button, IconNewWindow, Stack, Text } from '../../components';
import { Actions } from './Actions';
import { TextLink } from '../TextLink/TextLink';
import { backgrounds } from '../../utils/docsHelpers';
export var screenshots = {
  screenshotWidths: [320, 768],
  examples: [
    {
      label: 'Standard Actions',
      Example: function Example() {
        return (
          _Actions ||
          (_Actions = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'Small Actions',
      Example: function Example() {
        return (
          _Actions2 ||
          (_Actions2 = /* #__PURE__*/ _jsx(
            Actions,
            {
              size: 'small',
            },
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
          ))
        );
      },
    },
    {
      label: 'Standard with TextLink (Deprecated)',
      Example: function Example() {
        return (
          _Actions3 ||
          (_Actions3 = /* #__PURE__*/ _jsx(
            Actions,
            {
              size: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 2'),
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
      label: 'Small with TextLink (Deprecated)',
      Example: function Example() {
        return (
          _Actions4 ||
          (_Actions4 = /* #__PURE__*/ _jsx(
            Actions,
            {
              size: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 1'),
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Button 2'),
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
      label: 'Actions Contrast (Deprecated)',
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.sort().map(function (background, i) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
                padding: 'xsmall',
              },
              i,
              /* #__PURE__*/ _jsx(
                Stack,
                {
                  space: 'xsmall',
                },
                void 0,
                /* #__PURE__*/ _jsx(
                  Text,
                  {
                    size: 'small',
                  },
                  void 0,
                  background,
                ),
                _Actions5 ||
                  (_Actions5 = /* #__PURE__*/ _jsx(
                    Actions,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(
                      Button,
                      {
                        tone: 'brandAccent',
                      },
                      void 0,
                      'Solid',
                    ),
                    /* #__PURE__*/ _jsx(
                      TextLink,
                      {
                        href: '#',
                      },
                      void 0,
                      'Transparent ',
                      /* #__PURE__*/ _jsx(IconNewWindow, {}),
                    ),
                  )),
              ),
            );
          }),
        );
      },
    },
  ],
};

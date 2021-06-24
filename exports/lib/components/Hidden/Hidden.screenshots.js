import _jsx from '@babel/runtime/helpers/jsx';

let _Text,
  _Hidden,
  _Text2,
  _Hidden2,
  _Text3,
  _Hidden3,
  _Text4,
  _Hidden4,
  _Text5,
  _Hidden5,
  _Text6,
  _Hidden6,
  _Text7,
  _Text8,
  _Text9,
  _Text10,
  _Text11,
  _Text12;

import React from 'react';
import { Hidden } from './Hidden';
import { Text } from '../Text/Text';
import { Box } from '../Box/Box';
export var screenshots = {
  screenshotWidths: [320, 768, 1200],
  screenshotOnlyInWireframe: true,
  examples: [
    {
      label: 'Hidden below tablet',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text ||
            (_Text = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden below tablet:',
            )),
          _Hidden ||
            (_Hidden = /* #__PURE__*/ _jsx(
              Hidden,
              {
                below: 'tablet',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden below tablet.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden below desktop',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text2 ||
            (_Text2 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden below desktop:',
            )),
          _Hidden2 ||
            (_Hidden2 = /* #__PURE__*/ _jsx(
              Hidden,
              {
                below: 'desktop',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden below desktop.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden above mobile',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text3 ||
            (_Text3 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden above mobile:',
            )),
          _Hidden3 ||
            (_Hidden3 = /* #__PURE__*/ _jsx(
              Hidden,
              {
                above: 'mobile',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden above mobile.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden above tablet',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text4 ||
            (_Text4 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden above tablet:',
            )),
          _Hidden4 ||
            (_Hidden4 = /* #__PURE__*/ _jsx(
              Hidden,
              {
                above: 'tablet',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden above tablet.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden on print',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text5 ||
            (_Text5 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden on print:',
            )),
          _Hidden5 ||
            (_Hidden5 = /* #__PURE__*/ _jsx(
              Hidden,
              {
                print: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden on print.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden on Screen',
      Example: function Example() {
        return /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          _Text6 ||
            (_Text6 = /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The following line is hidden on screen:',
            )),
          _Hidden6 ||
            (_Hidden6 = /* #__PURE__*/ _jsx(
              Hidden,
              {
                screen: true,
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  paddingTop: 'small',
                },
                void 0,
                /* #__PURE__*/ _jsx(Text, {}, void 0, 'Hidden on screen.'),
              ),
            )),
        );
      },
    },
    {
      label: 'Hidden below tablet (inline)',
      Example: function Example() {
        return (
          _Text7 ||
          (_Text7 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden below tablet:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                below: 'tablet',
              },
              void 0,
              'Hidden below tablet.',
            ),
          ))
        );
      },
    },
    {
      label: 'Hidden below desktop (inline)',
      Example: function Example() {
        return (
          _Text8 ||
          (_Text8 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden below desktop:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                below: 'desktop',
              },
              void 0,
              'Hidden below desktop.',
            ),
          ))
        );
      },
    },
    {
      label: 'Hidden above mobile (inline)',
      Example: function Example() {
        return (
          _Text9 ||
          (_Text9 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden above mobile:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                above: 'mobile',
              },
              void 0,
              'Hidden above mobile.',
            ),
          ))
        );
      },
    },
    {
      label: 'Hidden above tablet (inline)',
      Example: function Example() {
        return (
          _Text10 ||
          (_Text10 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden above tablet:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                above: 'tablet',
              },
              void 0,
              'Hidden above tablet.',
            ),
          ))
        );
      },
    },
    {
      label: 'Hidden on print (inline)',
      Example: function Example() {
        return (
          _Text11 ||
          (_Text11 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden on print:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                print: true,
              },
              void 0,
              'Hidden on print.',
            ),
          ))
        );
      },
    },
    {
      label: 'Hidden on screen (inline)',
      Example: function Example() {
        return (
          _Text12 ||
          (_Text12 = /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'The following text node is hidden on screen:',
            ' ',
            /* #__PURE__*/ _jsx(
              Hidden,
              {
                screen: true,
              },
              void 0,
              'Hidden on screen.',
            ),
          ))
        );
      },
    },
  ],
};

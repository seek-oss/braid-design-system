import _jsx from '@babel/runtime/helpers/jsx';

let _Inline,
  _Inline2,
  _Inline3,
  _Inline4,
  _Box,
  _Box2,
  _Inline5,
  _Inline6,
  _Inline7,
  _Inline8;

import React, { Fragment } from 'react';
import { Box, Button } from '../';
import { Inline } from '../Inline/Inline';
import { Heading } from '../Heading/Heading';
import { backgrounds } from '../../utils/docsHelpers';

const Container = function Container(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/ _jsx(
    'div',
    {
      style: {
        maxWidth: '300px',
      },
    },
    void 0,
    children,
  );
};

Container.displayName = 'Container';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: function Example() {
        return (
          _Inline ||
          (_Inline = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'Critical',
      Container,
      Example: function Example() {
        return (
          _Inline2 ||
          (_Inline2 = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
              },
              void 0,
              'Solid',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'ghost',
              },
              void 0,
              'Ghost',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'soft',
              },
              void 0,
              'Soft',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'transparent',
              },
              void 0,
              'Transparent',
            ),
          ))
        );
      },
    },
    {
      label: 'BrandAccent',
      Container,
      Example: function Example() {
        return (
          _Inline3 ||
          (_Inline3 = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
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
              Button,
              {
                tone: 'brandAccent',
                variant: 'ghost',
              },
              void 0,
              'Ghost',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'brandAccent',
                variant: 'soft',
              },
              void 0,
              'Soft',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'brandAccent',
                variant: 'transparent',
              },
              void 0,
              'Transparent',
            ),
          ))
        );
      },
    },
    {
      label: 'Small size',
      Container,
      Example: function Example() {
        return (
          _Inline4 ||
          (_Inline4 = /* #__PURE__*/ _jsx(
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
                size: 'small',
                variant: 'ghost',
              },
              void 0,
              'Ghost',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                size: 'small',
                variant: 'soft',
              },
              void 0,
              'Soft',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                size: 'small',
                variant: 'transparent',
              },
              void 0,
              'Transparent',
            ),
          ))
        );
      },
    },
    {
      label: 'With vertical bleed (standard)',
      background: 'card',
      Example: function Example() {
        return (
          _Box ||
          (_Box = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'With vertical bleed (small)',
      background: 'card',
      Example: function Example() {
        return (
          _Box2 ||
          (_Box2 = /* #__PURE__*/ _jsx(
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
          ))
        );
      },
    },
    {
      label: 'Legacy weights',
      Container,
      Example: function Example() {
        return (
          _Inline5 ||
          (_Inline5 = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
              collapseBelow: 'desktop',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Button,
              {
                weight: 'strong',
              },
              void 0,
              'Strong',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                weight: 'regular',
              },
              void 0,
              'Regular',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                weight: 'weak',
              },
              void 0,
              'Weak',
            ),
          ))
        );
      },
    },
    {
      label: 'Contrast',
      Container,
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.map(function (background) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
                padding: 'medium',
              },
              background,
              _Inline6 ||
                (_Inline6 = /* #__PURE__*/ _jsx(
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
                )),
            );
          }),
        );
      },
    },
    {
      label: 'Contrast - critical',
      Container,
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.map(function (background) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
                padding: 'medium',
              },
              background,
              _Inline7 ||
                (_Inline7 = /* #__PURE__*/ _jsx(
                  Inline,
                  {
                    space: 'small',
                    collapseBelow: 'desktop',
                  },
                  void 0,
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'critical',
                    },
                    void 0,
                    'Solid',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'critical',
                      variant: 'ghost',
                    },
                    void 0,
                    'Ghost',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'critical',
                      variant: 'soft',
                    },
                    void 0,
                    'Soft',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'critical',
                      variant: 'transparent',
                    },
                    void 0,
                    'Transparent',
                  ),
                )),
            );
          }),
        );
      },
    },
    {
      label: 'Contrast - brandAccent',
      Container,
      Example: function Example() {
        return /* #__PURE__*/ _jsx(
          Fragment,
          {},
          void 0,
          backgrounds.map(function (background) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                background,
                padding: 'medium',
              },
              background,
              _Inline8 ||
                (_Inline8 = /* #__PURE__*/ _jsx(
                  Inline,
                  {
                    space: 'small',
                    collapseBelow: 'desktop',
                  },
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
                    Button,
                    {
                      tone: 'brandAccent',
                      variant: 'ghost',
                    },
                    void 0,
                    'Ghost',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'brandAccent',
                      variant: 'soft',
                    },
                    void 0,
                    'Soft',
                  ),
                  /* #__PURE__*/ _jsx(
                    Button,
                    {
                      tone: 'brandAccent',
                      variant: 'transparent',
                    },
                    void 0,
                    'Transparent',
                  ),
                )),
            );
          }),
        );
      },
    },
  ],
};

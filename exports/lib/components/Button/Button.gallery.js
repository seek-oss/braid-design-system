import _jsx from '@babel/runtime/helpers/jsx';

let _Inline, _Inline2, _Inline3, _Box, _Inline4, _Inline5, _Inline6, _Inline7;

import React from 'react';
import source from '../../utils/source.macro';
import { Button, Box, Heading, Inline, IconSend } from '../';
export var galleryItems = [
  {
    label: 'Default',
    background: 'card',
    Example: function Example() {
      return source(
        _Inline ||
          (_Inline = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(Button, {}, void 0, 'Submit'),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'ghost',
              },
              void 0,
              'Submit',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'soft',
              },
              void 0,
              'Submit',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                variant: 'transparent',
              },
              void 0,
              'Submit',
            ),
          )),
      );
    },
  },
  {
    label: 'Critical',
    background: 'card',
    Example: function Example() {
      return source(
        _Inline2 ||
          (_Inline2 = /* #__PURE__*/ _jsx(
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
              'Delete',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'ghost',
              },
              void 0,
              'Delete',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'soft',
              },
              void 0,
              'Delete',
            ),
            /* #__PURE__*/ _jsx(
              Button,
              {
                tone: 'critical',
                variant: 'transparent',
              },
              void 0,
              'Delete',
            ),
          )),
      );
    },
  },
  {
    label: 'BrandAccent',
    background: 'card',
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
    label: 'Inverted on dark backgrounds',
    background: 'brand',
    Example: function Example() {
      return source(
        _Box ||
          (_Box = /* #__PURE__*/ _jsx(
            Box,
            {
              background: 'brand',
              padding: 'small',
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
    label: 'With icon',
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
              {},
              void 0,
              /* #__PURE__*/ _jsx(IconSend, {}),
              ' Send',
            ),
          )),
      );
    },
  },
  {
    label: 'Loading state',
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
                loading: true,
              },
              void 0,
              'Loading',
            ),
          )),
      );
    },
  },
  {
    label: 'Small size',
    Example: function Example() {
      return source(
        _Inline6 ||
          (_Inline6 = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Button,
              {
                size: 'small',
              },
              void 0,
              'Submit',
            ),
          )),
      );
    },
  },
  {
    label: 'With vertical bleed',
    Example: function Example() {
      return source(
        _Inline7 ||
          (_Inline7 = /* #__PURE__*/ _jsx(
            Inline,
            {
              space: 'small',
              alignY: 'center',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Heading,
              {
                level: '4',
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
            /* #__PURE__*/ _jsx(
              Button,
              {
                bleedY: true,
                size: 'small',
              },
              void 0,
              'Button',
            ),
          )),
      );
    },
  },
];

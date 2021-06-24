import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _MockTooltipContent,
  _MockTooltipContent2,
  _MockTooltipContent3,
  _Text,
  _IconHelp;

import React from 'react';
import source from '../../utils/source.macro';
import { TooltipRenderer, Inline, Stack, Text, IconHelp, Box } from '../';
import { TooltipContent } from './TooltipRenderer';
import { constants } from './TooltipRenderer.css';
import { calc } from '@vanilla-extract/css-utils';

const MockTooltipContent = function MockTooltipContent(_ref) {
  const placement = _ref.placement,
    children = _ref.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      'data-popper-placement': placement,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      TooltipContent,
      {
        opacity: 100,
        arrowProps: {
          'data-popper-arrow': true,
          style: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX('.concat(
              calc(constants.arrowSize).negate().divide(2),
              ')',
            ),
          },
        },
      },
      void 0,
      children,
    ),
  );
};

MockTooltipContent.displayName = 'MockTooltipContent';
export var galleryItems = [
  {
    label: 'Single line of text',
    Example: function Example() {
      return source(
        _MockTooltipContent ||
          (_MockTooltipContent = /* #__PURE__*/ _jsx(
            MockTooltipContent,
            {
              placement: 'top',
            },
            void 0,
            /* #__PURE__*/ _jsx(Text, {}, void 0, 'Tooltip'),
          )),
      );
    },
  },
  {
    label: 'Multiple lines of text',
    Example: function Example() {
      return source(
        _MockTooltipContent2 ||
          (_MockTooltipContent2 = /* #__PURE__*/ _jsx(
            MockTooltipContent,
            {
              placement: 'top',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Text,
              {},
              void 0,
              'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
            ),
          )),
      );
    },
  },
  {
    label: 'Custom formatting',
    Example: function Example() {
      return source(
        _MockTooltipContent3 ||
          (_MockTooltipContent3 = /* #__PURE__*/ _jsx(
            MockTooltipContent,
            {
              placement: 'top',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'medium',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Text,
                {
                  weight: 'strong',
                },
                void 0,
                'Strong text',
              ),
              /* #__PURE__*/ _jsx(
                Text,
                {},
                void 0,
                'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
              ),
            ),
          )),
      );
    },
  },
  {
    label: 'Preview animation',
    Example: function Example(_ref2) {
      const id = _ref2.id;
      return source(
        /* #__PURE__*/ _jsx(
          Inline,
          {
            space: 'small',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            TooltipRenderer,
            {
              id,
              tooltip:
                _Text ||
                (_Text = /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'This is a tooltip! If you provide enough content, the text will wrap onto multiple lines.',
                )),
            },
            void 0,
            function (_ref3) {
              const triggerProps = _ref3.triggerProps;
              return /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    'aria-label': 'Help',
                  },
                  triggerProps,
                ),
                _IconHelp || (_IconHelp = /* #__PURE__*/ _jsx(IconHelp, {})),
              );
            },
          ),
        ),
      );
    },
  },
];

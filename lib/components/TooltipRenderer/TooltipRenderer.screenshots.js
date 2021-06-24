import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _Text, _Text2, _Text3, _Stack;

import React from 'react';
import { Stack, Text, Box } from '../';
import { TooltipRenderer, StaticTooltipProvider } from './TooltipRenderer';
const triggerStyles = {
  width: 50,
  height: 20,
  background: 'pink',
};
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Top placement',
      Example: function Example(_ref) {
        const id = _ref.id;
        return /* #__PURE__*/ _jsx(
          StaticTooltipProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                paddingTop: 100,
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              TooltipRenderer,
              {
                id,
                placement: 'top',
                tooltip:
                  _Text ||
                  (_Text = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Tooltip')),
              },
              void 0,
              function (_ref2) {
                const triggerProps = _ref2.triggerProps;
                return /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      style: triggerStyles,
                    },
                    triggerProps,
                  ),
                );
              },
            ),
          ),
        );
      },
    },
    {
      label: 'Bottom placement',
      Example: function Example(_ref3) {
        const id = _ref3.id;
        return /* #__PURE__*/ _jsx(
          StaticTooltipProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                paddingBottom: 100,
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              TooltipRenderer,
              {
                id,
                placement: 'bottom',
                tooltip:
                  _Text2 ||
                  (_Text2 = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Tooltip')),
              },
              void 0,
              function (_ref4) {
                const triggerProps = _ref4.triggerProps;
                return /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      style: triggerStyles,
                    },
                    triggerProps,
                  ),
                );
              },
            ),
          ),
        );
      },
    },
    {
      label: 'Multiple lines of text',
      Example: function Example(_ref5) {
        const id = _ref5.id;
        return /* #__PURE__*/ _jsx(
          StaticTooltipProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                paddingBottom: 200,
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              TooltipRenderer,
              {
                id,
                placement: 'bottom',
                tooltip:
                  _Text3 ||
                  (_Text3 = /* #__PURE__*/ _jsx(
                    Text,
                    {},
                    void 0,
                    'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
                  )),
              },
              void 0,
              function (_ref6) {
                const triggerProps = _ref6.triggerProps;
                return /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      style: triggerStyles,
                    },
                    triggerProps,
                  ),
                );
              },
            ),
          ),
        );
      },
    },
    {
      label: 'Text style overrides',
      Example: function Example(_ref7) {
        const id = _ref7.id;
        return /* #__PURE__*/ _jsx(
          StaticTooltipProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              style: {
                paddingBottom: 200,
              },
            },
            void 0,
            /* #__PURE__*/ _jsx(
              TooltipRenderer,
              {
                id,
                placement: 'bottom',
                tooltip:
                  _Stack ||
                  (_Stack = /* #__PURE__*/ _jsx(
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
                      'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
                    ),
                  )),
              },
              void 0,
              function (_ref8) {
                const triggerProps = _ref8.triggerProps;
                return /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      style: triggerStyles,
                    },
                    triggerProps,
                  ),
                );
              },
            ),
          ),
        );
      },
    },
  ],
};

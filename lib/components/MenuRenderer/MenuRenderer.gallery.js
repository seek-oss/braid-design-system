import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _MenuItemLink, _MenuItemLink2, _MenuItemLink3;

import React from 'react';
import {
  Box,
  MenuRenderer,
  MenuItem,
  MenuItemLink,
  Text,
  IconChevron,
} from '..';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Default',
    Example: function Example() {
      return source(
        /* #__PURE__*/ _jsx(
          MenuRenderer,
          {
            trigger: function trigger(triggerProps, _ref) {
              const open = _ref.open;
              return /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    userSelect: 'none',
                    cursor: 'pointer',
                  },
                  triggerProps,
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'Menu',
                  ' ',
                  /* #__PURE__*/ _jsx(IconChevron, {
                    direction: open ? 'up' : 'down',
                    alignY: 'lowercase',
                  }),
                ),
              );
            },
          },
          void 0,
          /* #__PURE__*/ _jsx(
            MenuItem,
            {
              onClick: function onClick() {},
            },
            void 0,
            'Button',
          ),
          _MenuItemLink ||
            (_MenuItemLink = /* #__PURE__*/ _jsx(
              MenuItemLink,
              {
                href: '#',
              },
              void 0,
              'Link',
            )),
        ),
      );
    },
  },
  {
    label: 'Right aligned',
    Example: function Example() {
      return source(
        /* #__PURE__*/ _jsx(
          MenuRenderer,
          {
            align: 'right',
            trigger: function trigger(triggerProps, _ref2) {
              const open = _ref2.open;
              return /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    userSelect: 'none',
                    cursor: 'pointer',
                  },
                  triggerProps,
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'Menu',
                  ' ',
                  /* #__PURE__*/ _jsx(IconChevron, {
                    direction: open ? 'up' : 'down',
                    alignY: 'lowercase',
                  }),
                ),
              );
            },
          },
          void 0,
          /* #__PURE__*/ _jsx(
            MenuItem,
            {
              onClick: function onClick() {},
            },
            void 0,
            'Button',
          ),
          _MenuItemLink2 ||
            (_MenuItemLink2 = /* #__PURE__*/ _jsx(
              MenuItemLink,
              {
                href: '#',
              },
              void 0,
              'Link',
            )),
        ),
      );
    },
  },
  {
    label: 'Offset space for menu',
    Example: function Example() {
      return source(
        /* #__PURE__*/ _jsx(
          MenuRenderer,
          {
            offsetSpace: {
              mobile: 'none',
              tablet: 'small',
            },
            trigger: function trigger(triggerProps, _ref3) {
              const open = _ref3.open;
              return /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    userSelect: 'none',
                    cursor: 'pointer',
                  },
                  triggerProps,
                ),
                /* #__PURE__*/ _jsx(
                  Text,
                  {},
                  void 0,
                  'Menu',
                  ' ',
                  /* #__PURE__*/ _jsx(IconChevron, {
                    direction: open ? 'up' : 'down',
                    alignY: 'lowercase',
                  }),
                ),
              );
            },
          },
          void 0,
          /* #__PURE__*/ _jsx(
            MenuItem,
            {
              onClick: function onClick() {},
            },
            void 0,
            'Button',
          ),
          _MenuItemLink3 ||
            (_MenuItemLink3 = /* #__PURE__*/ _jsx(
              MenuItemLink,
              {
                href: '#',
              },
              void 0,
              'Link',
            )),
        ),
      );
    },
  },
];

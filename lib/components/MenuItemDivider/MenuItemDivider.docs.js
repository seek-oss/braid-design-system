import _jsx from '@babel/runtime/helpers/jsx';

let _MenuItemDivider;

import React from 'react';
import source from '../../utils/source.macro';
import {
  OverflowMenu,
  MenuItemDivider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  Text,
  TextLink,
  Box,
  List,
} from '..';
const docs = {
  category: 'Content',
  Example: function Example(_ref) {
    const getState = _ref.getState,
      setState = _ref.setState;
    return source(
      /* #__PURE__*/ _jsx(
        Box,
        {
          style: {
            paddingLeft: 200,
          },
        },
        void 0,
        /* #__PURE__*/ _jsx(
          OverflowMenu,
          {
            label: 'Options',
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
          /* #__PURE__*/ _jsx(
            MenuItemLink,
            {
              href: '#',
              onClick: function onClick() {},
            },
            void 0,
            'Link',
          ),
          _MenuItemDivider ||
            (_MenuItemDivider = /* #__PURE__*/ _jsx(MenuItemDivider, {})),
          /* #__PURE__*/ _jsx(
            MenuItemCheckbox,
            {
              checked: getState('checked1'),
              onChange: setState('checked1'),
            },
            void 0,
            'Checkbox',
          ),
          /* #__PURE__*/ _jsx(
            MenuItemCheckbox,
            {
              checked: getState('checked2'),
              onChange: setState('checked2'),
            },
            void 0,
            'Checkbox',
          ),
          /* #__PURE__*/ _jsx(
            MenuItemCheckbox,
            {
              checked: getState('checked3'),
              onChange: setState('checked3'),
            },
            void 0,
            'Checkbox',
          ),
        ),
      ),
    );
  },
  description: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Used to separate groups within menu components, e.g.',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: '/components/OverflowMenu',
      },
      void 0,
      'OverflowMenu',
    ),
    ',',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: '/components/MenuRenderer',
      },
      void 0,
      'MenuRenderer',
    ),
    '.',
  ),
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Follows the',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: 'https://www.w3.org/TR/wai-aria-practices-1.1/#menu',
      },
      void 0,
      'WAI-ARIA Menu Pattern.',
    ),
  ),
  alternatives: [],
  additional: [
    {
      label: 'See also',
      description: /* #__PURE__*/ _jsx(
        List,
        {
          space: 'large',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Text,
          {
            tone: 'secondary',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItem',
            },
            void 0,
            'MenuItem',
          ),
          ' \u2014 For displaying buttons and links within a menu.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {
            tone: 'secondary',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '/components/MenuItemCheckbox',
            },
            void 0,
            'MenuItemCheckbox',
          ),
          ' ',
          '\u2014 For displaying checkboxes within a menu.',
        ),
      ),
    },
  ],
};
export default docs;

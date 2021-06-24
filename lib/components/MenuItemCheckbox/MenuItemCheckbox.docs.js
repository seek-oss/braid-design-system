import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import source from '../../utils/source.macro';
import { OverflowMenu, MenuItemCheckbox, Text, TextLink, List, Box } from '..';
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
            label: 'Checklist',
          },
          void 0,
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
    'For use within menu components, e.g.',
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
              href: '/components/MenuItemDivider',
            },
            void 0,
            'MenuItemDivider',
          ),
          ' ',
          '\u2014 For creating groups within a menu.',
        ),
      ),
    },
  ],
};
export default docs;

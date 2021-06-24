import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Dropdown, IconHelp, IconLocation } from '../../playroom/components';
import source from '../../utils/source.macro';
import { TextLink } from '../TextLink/TextLink';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
      ),
    ),
  },
  {
    name: 'With option groups',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
        },
        void 0,
        /* #__PURE__*/ _jsx(
          'optgroup',
          {
            label: 'Group 1',
          },
          void 0,
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
        ),
        /* #__PURE__*/ _jsx(
          'optgroup',
          {
            label: 'Group 2',
          },
          void 0,
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option A'),
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option B'),
          /* #__PURE__*/ _jsx('option', {}, void 0, 'Option C'),
        ),
      ),
    ),
  },
  {
    name: 'With additional labels',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
          secondaryLabel: 'optional',
          tertiaryLabel: /* #__PURE__*/ _jsx(
            TextLink,
            {
              href: '#',
            },
            void 0,
            /* #__PURE__*/ _jsx(IconHelp, {}),
            ' Help',
          ),
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
      ),
    ),
  },
  {
    name: 'With a description',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
          description: 'Extra information about the field',
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
      ),
    ),
  },
  {
    name: 'With an icon',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
          icon: /* #__PURE__*/ _jsx(IconLocation, {}),
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
      ),
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
          tone: 'critical',
          message: 'Critical message',
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
      ),
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      /* #__PURE__*/ _jsx(
        Dropdown,
        {
          label: 'Label',
          placeholder: 'Please select',
          tone: 'positive',
          message: 'Positive message',
        },
        void 0,
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 1'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 2'),
        /* #__PURE__*/ _jsx('option', {}, void 0, 'Option 3'),
      ),
    ),
  },
];

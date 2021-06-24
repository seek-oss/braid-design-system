import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import {
  Badge,
  Placeholder,
  RadioGroup,
  RadioItem,
} from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
        }),
      ),
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
          tone: 'critical',
          message: 'Critical message',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
        }),
      ),
    ),
  },
  {
    name: 'With a description',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
          description: 'More details about options',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
        }),
      ),
    ),
  },
  {
    name: 'With item-level descriptions',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
          description: 'Description for item 1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
          description: 'Description for item 2',
        }),
      ),
    ),
  },
  {
    name: 'With a Badge',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
          badge: /* #__PURE__*/ _jsx(
            Badge,
            {
              tone: 'positive',
              weight: 'strong',
            },
            void 0,
            'Badge',
          ),
        }),
      ),
    ),
  },
  {
    name: 'Small',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
          size: 'small',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Two',
          value: '2',
        }),
      ),
    ),
  },
  {
    name: 'With nested content',
    code: source(
      /* #__PURE__*/ _jsx(
        RadioGroup,
        {
          label: 'Label',
        },
        void 0,
        /* #__PURE__*/ _jsx(RadioItem, {
          label: 'One',
          value: '1',
        }),
        /* #__PURE__*/ _jsx(
          RadioItem,
          {
            label: 'Two',
            value: '2',
          },
          void 0,
          /* #__PURE__*/ _jsx(Placeholder, {
            height: 100,
          }),
        ),
      ),
    ),
  },
];

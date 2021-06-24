import _jsx from '@babel/runtime/helpers/jsx';

let _Stack;

import React from 'react';
import source from '../../utils/source.macro';
import {
  FieldMessage,
  Alert,
  Text,
  Strong,
  List,
  TextLink,
  Stack,
  Box,
} from '../';
import { Placeholder } from '../../playroom/components';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(
      /* #__PURE__*/ _jsx(
        Box,
        {
          style: {
            maxWidth: 400,
          },
        },
        void 0,
        _Stack ||
          (_Stack = /* #__PURE__*/ _jsx(
            Stack,
            {
              space: 'large',
            },
            void 0,
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  'aria-describedby': 'message1',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                }),
              ),
              /* #__PURE__*/ _jsx(FieldMessage, {
                id: 'message1',
                tone: 'critical',
                message: 'This is a critical message.',
              }),
            ),
            /* #__PURE__*/ _jsx(
              Stack,
              {
                space: 'small',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Box,
                {
                  'aria-describedby': 'message2',
                },
                void 0,
                /* #__PURE__*/ _jsx(Placeholder, {
                  height: 40,
                }),
              ),
              /* #__PURE__*/ _jsx(FieldMessage, {
                id: 'message2',
                tone: 'positive',
                message: 'This is a positive message.',
              }),
            ),
          )),
      ),
    );
  },
  description: /* #__PURE__*/ _jsx(
    Alert,
    {
      tone: 'info',
    },
    void 0,
    /* #__PURE__*/ _jsx(
      Text,
      {
        weight: 'medium',
      },
      void 0,
      'This component is only required when building a custom field that isn\u2019t provided by Braid.',
    ),
  ),
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'The ',
    /* #__PURE__*/ _jsx(Strong, {}, void 0, 'id'),
    ' prop is required, but you should also ensure that the associated field has a matching ',
    /* #__PURE__*/ _jsx(Strong, {}, void 0, 'aria-describedby'),
    ' ',
    'prop.',
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
              href: '/components/FieldLabel',
            },
            void 0,
            'FieldLabel',
          ),
          ' ',
          '\u2014 For displaying labels above a custom field.',
        ),
      ),
    },
  ],
};
export default docs;

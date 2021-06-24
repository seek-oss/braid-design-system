import _jsx from '@babel/runtime/helpers/jsx';

let _Text;

import React from 'react';
import source from '../../utils/source.macro';
import { Secondary, Text, TextLink } from '../';
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example() {
    return source(
      _Text ||
        (_Text = /* #__PURE__*/ _jsx(
          Text,
          {
            size: 'large',
          },
          void 0,
          'The last word of this sentence is ',
          /* #__PURE__*/ _jsx(Secondary, {}, void 0, 'secondary.'),
        )),
    );
  },
  alternatives: [
    {
      name: 'Strong',
      description: 'For a stronger text treatment.',
    },
  ],
  additional: [
    {
      label: 'Note',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'This component must be nested within a',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Text',
          },
          void 0,
          'Text',
        ),
        ' or',
        ' ',
        /* #__PURE__*/ _jsx(
          TextLink,
          {
            href: '/components/Heading',
          },
          void 0,
          'Heading',
        ),
        ' component.',
      ),
    },
  ],
};
export default docs;

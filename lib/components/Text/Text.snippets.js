import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Text } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(/* #__PURE__*/ _jsx(Text, {}, void 0, 'Standard text')),
  },
  {
    name: 'Large',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          size: 'large',
        },
        void 0,
        'Large text',
      ),
    ),
  },
  {
    name: 'Small',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          size: 'small',
        },
        void 0,
        'Small text',
      ),
    ),
  },
  {
    name: 'Xsmall',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          size: 'xsmall',
        },
        void 0,
        'Xsmall text',
      ),
    ),
  },
  {
    name: 'Tone (critical)',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          tone: 'critical',
        },
        void 0,
        'Critical text',
      ),
    ),
  },
  {
    name: 'Tone (positive)',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          tone: 'positive',
        },
        void 0,
        'Positive text',
      ),
    ),
  },
  {
    name: 'Tone (secondary)',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          tone: 'secondary',
        },
        void 0,
        'Secondary text',
      ),
    ),
  },
  {
    name: 'Weight (strong)',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          weight: 'strong',
        },
        void 0,
        'Strong text',
      ),
    ),
  },
  {
    name: 'Weight (medium)',
    code: source(
      /* #__PURE__*/ _jsx(
        Text,
        {
          weight: 'medium',
        },
        void 0,
        'Medium text',
      ),
    ),
  },
];

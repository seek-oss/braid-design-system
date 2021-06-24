import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { IconHelp, TextLink, Textarea } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
      }),
    ),
  },
  {
    name: 'With additional labels',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
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
      }),
    ),
  },
  {
    name: 'With a description',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        description: 'More detailed description of field.',
      }),
    ),
  },
  {
    name: 'With a critical message',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        tone: 'critical',
        message: 'Critical message',
      }),
    ),
  },
  {
    name: 'With a positive message',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        tone: 'positive',
        message: 'Positive message',
      }),
    ),
  },
  {
    name: 'With a neutral message',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        tone: 'neutral',
        message: 'Neutral message',
      }),
    ),
  },
  {
    name: 'With fixed height of 5 lines',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        grow: false,
        lines: 5,
      }),
    ),
  },
  {
    name: 'With dynamic height, limited to 7 lines',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        grow: true,
        lineLimit: 7,
      }),
    ),
  },
  {
    name: 'With character limit',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        description: 'Character limit of 100',
        characterLimit: 100,
      }),
    ),
  },
  {
    name: 'With a highlighted range',
    code: source(
      /* #__PURE__*/ _jsx(Textarea, {
        label: 'Label',
        description: 'Characters 11-20 are highlighted',
        tone: 'critical',
        message: 'Critical message',
        highlightRanges: [
          {
            start: 11,
            end: 20,
          },
        ],
      }),
    ),
  },
];

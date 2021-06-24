import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Autosuggest, IconLocation } from '../../playroom/components';
import source from '../../utils/source.macro';
export var snippets = [
  {
    name: 'Standard',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        id: 'fruit',
        label: 'Fruit',
        suggestions: [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
          {
            text: 'Carrots',
          },
        ],
      }),
    ),
  },
  {
    name: 'Grouped suggestions',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        label: 'I like to eat',
        id: 'grouped',
        suggestions: [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
              },
              {
                text: 'Bananas',
              },
              {
                text: 'Carrots',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Broccoli',
              },
              {
                text: 'Carrots',
              },
              {
                text: 'Carrots',
              },
            ],
          },
        ],
      }),
    ),
  },
  {
    name: 'With mobile backdrop',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        showMobileBackdrop: true,
        id: 'mobile',
        label: 'Fruit',
        suggestions: [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
          {
            text: 'Carrots',
          },
        ],
      }),
    ),
  },
  {
    name: 'With error',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        label: 'I like to eat',
        id: 'error',
        tone: 'critical',
        message: 'You must make a selection',
        suggestions: [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
          {
            text: 'Carrots',
          },
        ],
      }),
    ),
  },
  {
    name: 'With description',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        label: 'Fruit',
        id: 'error',
        description:
          'Select your favourite fruit to eat from the available suggestions.',
        suggestions: [
          {
            text: 'Apples',
          },
          {
            text: 'Bananas',
          },
          {
            text: 'Carrots',
          },
        ],
      }),
    ),
  },
  {
    name: 'With icon',
    code: source(
      /* #__PURE__*/ _jsx(Autosuggest, {
        id: 'location',
        icon: /* #__PURE__*/ _jsx(IconLocation, {}),
        placeholder: 'Enter a location',
        suggestions: [
          {
            text: 'Adelaide',
          },
          {
            text: 'Brisbane',
          },
          {
            text: 'Darwin',
          },
          {
            text: 'Hobart',
          },
          {
            text: 'Melbourne',
          },
          {
            text: 'Perth',
          },
          {
            text: 'Sydney',
          },
        ],
      }),
    ),
  },
];

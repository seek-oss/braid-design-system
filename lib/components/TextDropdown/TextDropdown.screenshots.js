import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';
import React, { useState } from 'react';
import { Heading, Strong, Text, TextDropdown } from '..';

const Container = function Container(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/ _jsx(
    'div',
    {
      style: {
        maxWidth: '300px',
      },
    },
    void 0,
    children,
  );
};

Container.displayName = 'Container';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default',
      Container,
      Example: function Example(_ref2) {
        const id = _ref2.id;

        const _useState = useState('Developer'),
          _useState2 = _slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          /* #__PURE__*/ _jsx(TextDropdown, {
            label: 'Job Title',
            id,
            onChange: setValue,
            value,
            options: ['Developer', 'Designer', 'Product Manager'],
          }),
        );
      },
    },
    {
      label: 'With identifying values',
      Container,
      Example: function Example(_ref3) {
        const id = _ref3.id;

        const _useState3 = useState(2000),
          _useState4 = _slicedToArray(_useState3, 2),
          value = _useState4[0],
          setValue = _useState4[1];

        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          /* #__PURE__*/ _jsx(TextDropdown, {
            label: 'Location',
            id,
            onChange: setValue,
            value,
            options: [
              {
                text: 'Melbourne',
                value: 3000,
              },
              {
                text: 'Sydney',
                value: 2000,
              },
              {
                text: 'Brisbane',
                value: 4000,
              },
            ],
          }),
        );
      },
    },
    {
      label: 'Within strong text',
      Container,
      Example: function Example(_ref4) {
        const id = _ref4.id;

        const _useState5 = useState('Relevance'),
          _useState6 = _slicedToArray(_useState5, 2),
          value = _useState6[0],
          setValue = _useState6[1];

        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'Sort by',
          ' ',
          /* #__PURE__*/ _jsx(
            Strong,
            {},
            void 0,
            /* #__PURE__*/ _jsx(TextDropdown, {
              label: 'Sort order',
              id,
              onChange: setValue,
              value,
              options: ['Relevance', 'Keyword'],
            }),
          ),
        );
      },
    },
    {
      label: 'Within a heading',
      Container,
      Example: function Example(_ref5) {
        const id = _ref5.id;

        const _useState7 = useState('Sydney'),
          _useState8 = _slicedToArray(_useState7, 2),
          value = _useState8[0],
          setValue = _useState8[1];

        return /* #__PURE__*/ _jsx(
          Heading,
          {
            level: '2',
          },
          void 0,
          'Jobs in',
          ' ',
          /* #__PURE__*/ _jsx(TextDropdown, {
            label: 'Location',
            id,
            onChange: setValue,
            value,
            options: ['Melbourne', 'Sydney', 'Brisbane'],
          }),
        );
      },
    },
    {
      label: 'TextDropdown on Brand Background',
      background: 'brand',
      Container,
      Example: function Example(_ref6) {
        const id = _ref6.id;

        const _useState9 = useState('Designer'),
          _useState10 = _slicedToArray(_useState9, 2),
          value = _useState10[0],
          setValue = _useState10[1];

        return /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          /* #__PURE__*/ _jsx(TextDropdown, {
            label: 'Job Title',
            id,
            onChange: setValue,
            value,
            options: ['Developer', 'Designer', 'Product Manager'],
          }),
        );
      },
    },
  ],
};

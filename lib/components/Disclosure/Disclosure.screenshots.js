import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _jsx from '@babel/runtime/helpers/jsx';

let _Text, _Text2, _Text3;

import React, { useState } from 'react';
import { Disclosure, Text } from '..';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Collapsed Disclosure',
      Example: function Example(_ref) {
        const id = _ref.id;
        return /* #__PURE__*/ _jsx(
          Disclosure,
          {
            id,
            expandLabel: 'Show content',
            collapseLabel: 'Hide content',
          },
          void 0,
          _Text || (_Text = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Content')),
        );
      },
    },
    {
      label: 'Expanded Disclosure',
      Example: function Example(_ref2) {
        const id = _ref2.id;

        const _useState = useState(true),
          _useState2 = _slicedToArray(_useState, 2),
          expanded = _useState2[0],
          setExpanded = _useState2[1];

        return /* #__PURE__*/ _jsx(
          Disclosure,
          {
            id,
            expandLabel: 'Show content',
            collapseLabel: 'Hide content',
            expanded,
            onToggle: setExpanded,
          },
          void 0,
          _Text2 || (_Text2 = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Content')),
        );
      },
    },
    {
      label: 'Expanded Disclosure with custom space',
      Example: function Example(_ref3) {
        const id = _ref3.id;

        const _useState3 = useState(true),
          _useState4 = _slicedToArray(_useState3, 2),
          expanded = _useState4[0],
          setExpanded = _useState4[1];

        return /* #__PURE__*/ _jsx(
          Disclosure,
          {
            id,
            expandLabel: 'Show content',
            collapseLabel: 'Hide content',
            space: 'small',
            expanded,
            onToggle: setExpanded,
          },
          void 0,
          _Text3 || (_Text3 = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Content')),
        );
      },
    },
  ],
};

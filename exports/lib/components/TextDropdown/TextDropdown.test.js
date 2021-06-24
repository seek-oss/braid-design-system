import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BraidTestProvider, Text, TextDropdown } from '..';
describe('TextDropdown', function () {
  it('should support controlled state', function () {
    const TestCase = function TestCase() {
      const _useState = useState('Two'),
        _useState2 = _slicedToArray(_useState, 2),
        value = _useState2[0],
        setValue = _useState2[1];

      return /* #__PURE__*/ _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          /* #__PURE__*/ _jsx(TextDropdown, {
            id: 'content',
            label: 'Label',
            value,
            onChange: setValue,
            options: ['One', 'Two', 'Third'],
          }),
        ),
      );
    };

    const _render = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render.getByRole;

    const dropdown = getByRole('combobox');
    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Two');
    fireEvent.change(dropdown, {
      target: {
        selectedIndex: 2,
      },
    });
    expect(dropdown.options[dropdown.selectedIndex].value).toEqual('Third');
  });
});

import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

let _RadioItem,
  _RadioItem2,
  _RadioItem3,
  _RadioItem4,
  _RadioItem5,
  _RadioItem6,
  _RadioItem7,
  _RadioItem8,
  _RadioItem9,
  _RadioItem10,
  _RadioItem11,
  _RadioItem12,
  _RadioItem13,
  _RadioItem14,
  _RadioItem15,
  _TestCase,
  _TestCase2,
  _TestCase3,
  _TestCase4;

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, RadioGroup, RadioItem } from '..';
import userEvent from '@testing-library/user-event';

const TestCase = function TestCase() {
  const _useState = useState(''),
    _useState2 = _slicedToArray(_useState, 2),
    value = _useState2[0],
    setValue = _useState2[1];

  return /* #__PURE__*/ _jsx(
    BraidTestProvider,
    {},
    void 0,
    /* #__PURE__*/ _jsx(
      RadioGroup,
      {
        id: 'options',
        value,
        onChange: function onChange(e) {
          return setValue(e.currentTarget.value);
        },
        label: 'Options',
      },
      void 0,
      _RadioItem ||
        (_RadioItem = /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Option 1',
          value: '1',
        })),
      _RadioItem2 ||
        (_RadioItem2 = /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Option 2',
          value: '2',
        })),
      _RadioItem3 ||
        (_RadioItem3 = /* #__PURE__*/ _jsx(RadioItem, {
          label: 'Option 3',
          value: '3',
        })),
    ),
  );
};

TestCase.displayName = 'TestCase';
describe('RadioGroup', function () {
  it('associates the group with label correctly', function () {
    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
            },
            void 0,
            _RadioItem4 ||
              (_RadioItem4 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
              })),
            _RadioItem5 ||
              (_RadioItem5 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
              })),
          ),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    expect(getByLabelText('Options').tagName).toBe('FIELDSET');
  });
  it('associates radio items with their labels correctly', function () {
    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
            },
            void 0,
            _RadioItem6 ||
              (_RadioItem6 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
              })),
            _RadioItem7 ||
              (_RadioItem7 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
              })),
          ),
        ),
      ),
      getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('Option 1').tagName).toBe('INPUT');
    expect(getByLabelText('Option 1').getAttribute('value')).toBe('1');
    expect(getByLabelText('Option 2').tagName).toBe('INPUT');
    expect(getByLabelText('Option 2').getAttribute('value')).toBe('2');
  });
  it('associates radio items with group description correctly', function () {
    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
              description: 'More detail about group',
            },
            void 0,
            _RadioItem8 ||
              (_RadioItem8 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
              })),
            _RadioItem9 ||
              (_RadioItem9 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
              })),
          ),
        ),
      ),
      getByLabelText = _render3.getByLabelText;

    expect(getByLabelText('Option 1')).toHaveDescription(
      'More detail about group',
    );
    expect(getByLabelText('Option 2')).toHaveDescription(
      'More detail about group',
    );
  });
  it('associates radio items with group and item descriptions correctly', function () {
    const _render4 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
              description: 'More detail about group',
            },
            void 0,
            _RadioItem10 ||
              (_RadioItem10 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
                description: 'The first option',
              })),
            _RadioItem11 ||
              (_RadioItem11 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
                description: 'The second option',
              })),
          ),
        ),
      ),
      getByLabelText = _render4.getByLabelText;

    expect(getByLabelText('Option 1')).toHaveDescription(
      'More detail about group The first option',
    );
    expect(getByLabelText('Option 2')).toHaveDescription(
      'More detail about group The second option',
    );
  });
  it('associates radio items with group and item descriptions and a group message correctly', function () {
    const _render5 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
              description: 'More detail about group',
              message: 'Required',
            },
            void 0,
            _RadioItem12 ||
              (_RadioItem12 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
                description: 'The first option',
              })),
            _RadioItem13 ||
              (_RadioItem13 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
                description: 'The second option',
              })),
          ),
        ),
      ),
      getByLabelText = _render5.getByLabelText;

    expect(getByLabelText('Option 1')).toHaveDescription(
      'Required More detail about group The first option',
    );
    expect(getByLabelText('Option 2')).toHaveDescription(
      'Required More detail about group The second option',
    );
  });
  it('group and items are not marked as having a description without a message or description', function () {
    const _render6 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            RadioGroup,
            {
              id: 'options',
              value: '',
              onChange: function onChange() {},
              label: 'Options',
            },
            void 0,
            _RadioItem14 ||
              (_RadioItem14 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 1',
                value: '1',
              })),
            _RadioItem15 ||
              (_RadioItem15 = /* #__PURE__*/ _jsx(RadioItem, {
                label: 'Option 2',
                value: '2',
              })),
          ),
        ),
      ),
      getByLabelText = _render6.getByLabelText;

    expect(
      getByLabelText('Options').getAttribute('aria-describedby'),
    ).toBeNull();
    expect(
      getByLabelText('Option 2').getAttribute('aria-describedby'),
    ).toBeNull();
    expect(
      getByLabelText('Option 1').getAttribute('aria-describedby'),
    ).toBeNull();
  });
  it('select radio using space key', function () {
    const _render7 = render(
        _TestCase || (_TestCase = /* #__PURE__*/ _jsx(TestCase, {})),
      ),
      getByLabelText = _render7.getByLabelText;

    const option1 = getByLabelText('Option 1');
    const option2 = getByLabelText('Option 2');
    userEvent.type(option1, '{space}');
    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);
    userEvent.type(option2, '{space}');
    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });
  it('select radio using enter key', function () {
    const _render8 = render(
        _TestCase2 || (_TestCase2 = /* #__PURE__*/ _jsx(TestCase, {})),
      ),
      getByLabelText = _render8.getByLabelText;

    const option1 = getByLabelText('Option 1');
    const option2 = getByLabelText('Option 2');
    userEvent.type(option1, '{enter}');
    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);
    userEvent.type(option2, '{enter}');
    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });
  it('select radio clicking with mouse', function () {
    const _render9 = render(
        _TestCase3 || (_TestCase3 = /* #__PURE__*/ _jsx(TestCase, {})),
      ),
      getByLabelText = _render9.getByLabelText;

    const option1 = getByLabelText('Option 1');
    const option2 = getByLabelText('Option 2');
    userEvent.click(option1);
    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);
    userEvent.click(option2);
    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });
  it('should handle focus state correctly when tabbing', function () {
    const _render10 = render(
        _TestCase4 || (_TestCase4 = /* #__PURE__*/ _jsx(TestCase, {})),
      ),
      getByLabelText = _render10.getByLabelText;

    const option1 = getByLabelText('Option 1');
    const option2 = getByLabelText('Option 2');
    const option3 = getByLabelText('Option 3');
    expect(document.body).toHaveFocus();
    userEvent.tab();
    expect(option1).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
    expect(option1.checked).toBe(false);
    expect(option2.checked).toBe(false);
    expect(option3.checked).toBe(false);
    userEvent.tab({
      shift: true,
    });
    expect(option1).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
    userEvent.click(option2);
    expect(option2).toHaveFocus();
    userEvent.tab();
    expect(document.body).toHaveFocus();
    userEvent.tab({
      shift: true,
    });
    expect(option2).toHaveFocus();
  });
});

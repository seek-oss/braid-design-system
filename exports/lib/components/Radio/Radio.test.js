import _jsx from '@babel/runtime/helpers/jsx';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Radio } from '..';
describe('Radio', function () {
  it('associates field with label correctly', function () {
    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Radio, {
            id: 'field',
            label: 'My field',
            value: '',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });
  it('associates field with description correctly', function () {
    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Radio, {
            id: 'field',
            label: 'My field',
            description: 'More detail about field',
            value: '',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render2.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription(
      'More detail about field',
    );
  });
  it('field is not marked as having a description without a message or description', function () {
    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(Radio, {
            id: 'field',
            label: 'My field',
            value: '',
            onChange: function onChange() {},
            checked: false,
          }),
        ),
      ),
      getByLabelText = _render3.getByLabelText;

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });
});

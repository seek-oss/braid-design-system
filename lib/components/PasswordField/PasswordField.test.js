import _jsx from '@babel/runtime/helpers/jsx';

let _span, _span2;

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, PasswordField } from '..';
import userEvent from '@testing-library/user-event';
describe('PasswordField', function () {
  it('should render with password hidden', function () {
    const onChange = jest.fn();

    const _render = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'password',
            label: 'Password',
            value: '',
            onChange,
          }),
        ),
      ),
      getByLabelText = _render.getByLabelText;

    const input = getByLabelText('Password');
    expect(input.type).toBe('password');
  });
  it('should show the password as plain text when visibility button clicked', function () {
    const onChange = jest.fn();

    const _render2 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'password',
            label: 'Password',
            value: '',
            onChange,
          }),
        ),
      ),
      getByRole = _render2.getByRole,
      getByLabelText = _render2.getByLabelText;

    const input = getByLabelText('Password');
    const visibilityButton = getByRole('button');
    userEvent.click(visibilityButton);
    expect(input.type).toBe('text');
  });
  it('should call the onVisibilityToggle handler with the new visibility state when toggled', function () {
    const onChange = jest.fn();
    const onVisibilityToggle = jest.fn();

    const _render3 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'password',
            label: 'Password',
            value: '',
            onChange,
            onVisibilityToggle,
          }),
        ),
      ),
      getByRole = _render3.getByRole;

    const visibilityButton = getByRole('button');
    userEvent.click(visibilityButton);
    expect(onVisibilityToggle).toHaveBeenCalledWith(true);
    userEvent.click(visibilityButton);
    expect(onVisibilityToggle).toHaveBeenCalledWith(false);
  });
  it('should not show the visibility toggle button when disabled', function () {
    const onChange = jest.fn();

    const _render4 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'password',
            label: 'Password',
            disabled: true,
            value: '',
            onChange,
          }),
        ),
      ),
      queryByRole = _render4.queryByRole;

    const visibilityButton = queryByRole('button');
    expect(visibilityButton).not.toBeInTheDocument();
  });
  it('associates field with label correctly', function () {
    const _render5 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render5.getByLabelText;

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });
  it('associates field with message correctly', function () {
    const _render6 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            message: 'Required',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render6.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Required');
  });
  it('associates field with description correctly', function () {
    const _render7 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            description: 'More detail about field',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render7.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription(
      'More detail about field',
    );
  });
  it('associates field with custom description correctly', function () {
    const _render8 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          _span ||
            (_span = /* #__PURE__*/ _jsx(
              'span',
              {
                id: 'detail',
              },
              void 0,
              'Custom description',
            )),
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            'aria-describedby': 'detail',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render8.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription('Custom description');
  });
  it('associates field with multiple description elements correctly', function () {
    const _render9 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          _span2 ||
            (_span2 = /* #__PURE__*/ _jsx(
              'span',
              {
                id: 'detail',
              },
              void 0,
              'Custom description',
            )),
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            message: 'Required',
            description: 'More detail about field',
            'aria-describedby': 'detail',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render9.getByLabelText;

    expect(getByLabelText('My field')).toHaveDescription(
      'Custom description Required More detail about field',
    );
  });
  it('field is not marked as having a description without a message or description', function () {
    const _render10 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            value: '',
            onChange: function onChange() {},
          }),
        ),
      ),
      getByLabelText = _render10.getByLabelText;

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });
  it('field should be marked as disabled when disabled', function () {
    const _render11 = render(
        /* #__PURE__*/ _jsx(
          BraidTestProvider,
          {},
          void 0,
          /* #__PURE__*/ _jsx(PasswordField, {
            id: 'field',
            label: 'My field',
            value: '',
            onChange: function onChange() {},
            disabled: true,
          }),
        ),
      ),
      getByLabelText = _render11.getByLabelText;

    expect(getByLabelText('My field')).toHaveAttribute('disabled');
  });
});

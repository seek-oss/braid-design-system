import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BraidTestProvider, PasswordField } from '..';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

describe('PasswordField', () => {
  it('should render with password hidden', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="password"
          label="Password"
          value=""
          onChange={onChange}
        />
      </BraidTestProvider>,
    );

    const input = getByLabelText('Password') as HTMLInputElement;

    expect(input.type).toBe('password');
  });

  it('should show the password as plain text when visibility button clicked', () => {
    const onChange = jest.fn();
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="password"
          label="Password"
          value=""
          onChange={onChange}
        />
      </BraidTestProvider>,
    );

    const input = getByLabelText('Password') as HTMLInputElement;
    const visibilityButton = getByRole('button');

    userEvent.click(visibilityButton);
    expect(input.type).toBe('text');
  });

  it('should call the onVisibilityToggle handler with the new visibility state when toggled', () => {
    const onChange = jest.fn();
    const onVisibilityToggle = jest.fn();
    const { getByRole } = render(
      <BraidTestProvider>
        <PasswordField
          id="password"
          label="Password"
          value=""
          onChange={onChange}
          onVisibilityToggle={onVisibilityToggle}
        />
      </BraidTestProvider>,
    );

    const visibilityButton = getByRole('button');
    userEvent.click(visibilityButton);
    expect(onVisibilityToggle).toHaveBeenCalledWith(true);

    userEvent.click(visibilityButton);
    expect(onVisibilityToggle).toHaveBeenCalledWith(false);
  });

  it('should not show the visibility toggle button when disabled', () => {
    const onChange = jest.fn();
    const { queryByRole } = render(
      <BraidTestProvider>
        <PasswordField
          id="password"
          label="Password"
          disabled
          value=""
          onChange={onChange}
        />
      </BraidTestProvider>,
    );

    const visibilityButton = queryByRole('button');
    expect(visibilityButton).not.toBeInTheDocument();
  });
});

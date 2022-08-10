import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { PasswordField } from '..';
import userEvent from '@testing-library/user-event';

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

  it('should show the password as plain text when visibility button clicked', async () => {
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

    await userEvent.click(visibilityButton);
    expect(input.type).toBe('text');
  });

  it('should call the onVisibilityToggle handler with the new visibility state when toggled', async () => {
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
    await userEvent.click(visibilityButton);
    expect(onVisibilityToggle).toHaveBeenCalledWith(true);

    await userEvent.click(visibilityButton);
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

  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          label="My field"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          aria-label="My field"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with aria-labelledby correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <div id="fieldLabel">My field</div>
        <PasswordField
          id="field"
          aria-labelledby="fieldLabel"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          label="My field"
          message="Required"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription('Required');
  });

  it('associates field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          label="My field"
          description="More detail about field"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription(
      'More detail about field',
    );
  });

  it('associates field with custom description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <span id="detail">Custom description</span>
        <PasswordField
          id="field"
          label="My field"
          aria-describedby="detail"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription(
      'Custom description',
    );
  });

  it('associates field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <span id="detail">Custom description</span>
        <PasswordField
          id="field"
          label="My field"
          message="Required"
          description="More detail about field"
          aria-describedby="detail"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAccessibleDescription(
      'Custom description Required More detail about field',
    );
  });

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          label="My field"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });

  it('field should be marked as disabled when disabled', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          id="field"
          label="My field"
          value=""
          onChange={() => {}}
          disabled={true}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAttribute('disabled');
  });
});

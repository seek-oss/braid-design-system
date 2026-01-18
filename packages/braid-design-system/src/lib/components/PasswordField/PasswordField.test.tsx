import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PasswordField } from '..';
import { BraidTestProvider } from '../../../test';

describe('PasswordField', () => {
  it('should render with password hidden', () => {
    const onChange = vi.fn();
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField label="Password" value="" onChange={onChange} />
      </BraidTestProvider>,
    );

    const input = getByLabelText('Password') as HTMLInputElement;

    expect(input.type).toBe('password');
  });

  it('should show the password as plain text when visibility button clicked', async () => {
    const onChange = vi.fn();
    const { getByRole, getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField label="Password" value="" onChange={onChange} />
      </BraidTestProvider>,
    );

    const input = getByLabelText('Password') as HTMLInputElement;
    const visibilityButton = getByRole('button');

    await userEvent.click(visibilityButton);
    expect(input.type).toBe('text');
  });

  it('should call the onVisibilityToggle handler with the new visibility state when toggled', async () => {
    const onChange = vi.fn();
    const onVisibilityToggle = vi.fn();
    const { getByRole } = render(
      <BraidTestProvider>
        <PasswordField
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
    const onChange = vi.fn();
    const { queryByRole } = render(
      <BraidTestProvider>
        <PasswordField label="Password" disabled value="" onChange={onChange} />
      </BraidTestProvider>,
    );

    const visibilityButton = queryByRole('button');
    expect(visibilityButton).not.toBeInTheDocument();
  });

  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField aria-label="My field" value="" onChange={() => {}} />
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
        <PasswordField label="My field" value="" onChange={() => {}} />
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
          label="My field"
          value=""
          onChange={() => {}}
          disabled={true}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveAttribute('disabled');
  });

  it('field should not be accessible with tabindex of -1', async () => {
    render(
      <BraidTestProvider>
        <PasswordField
          label="Password"
          value=""
          onChange={() => {}}
          tabIndex={-1}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(document.body).toHaveFocus();
  });

  it('field should be accessible with tabindex of 0', async () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          label="Password"
          value=""
          onChange={() => {}}
          tabIndex={0}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Password')).toHaveFocus();
  });

  it('field should be accessible with a tabindex of undefined', async () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <PasswordField
          label="Password"
          value=""
          onChange={() => {}}
          tabIndex={undefined}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByLabelText('Password')).toHaveFocus();
  });
});

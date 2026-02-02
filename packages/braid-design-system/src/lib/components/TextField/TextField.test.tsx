import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '..';
import { BraidTestProvider } from '../../../test';

describe('TextField', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <TextField label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <TextField aria-label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with aria-labelledby correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <div id="fieldLabel">My field</div>
        <TextField
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
        <TextField
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
        <TextField
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
        <TextField
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
        <TextField
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
        <TextField label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });

  it('field should not be accessible with tabindex of -1', async () => {
    render(
      <BraidTestProvider>
        <TextField
          label="My field"
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
    const { getByRole } = render(
      <BraidTestProvider>
        <TextField label="My field" value="" onChange={() => {}} tabIndex={0} />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByRole('textbox')).toHaveFocus();
  });

  it('field should be accessible with a tabindex of undefined', async () => {
    const { getByRole } = render(
      <BraidTestProvider>
        <TextField
          label="My field"
          value=""
          onChange={() => {}}
          tabIndex={undefined}
        />
      </BraidTestProvider>,
    );

    expect(document.body).toHaveFocus();

    await userEvent.tab();

    expect(getByRole('textbox')).toHaveFocus();
  });
});

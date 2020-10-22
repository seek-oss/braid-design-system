import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Checkbox } from '..';

describe('Checkbox', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          value=""
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('INPUT');
  });

  it('associates field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          message="Required"
          value=""
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveDescription('Required');
  });

  it('associates field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          description="More detail about field"
          value=""
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveDescription(
      'More detail about field',
    );
  });

  it('associates field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          message="Required"
          description="More detail about field"
          value=""
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field')).toHaveDescription(
      'Required More detail about field',
    );
  });

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Checkbox
          id="field"
          label="My field"
          value=""
          onChange={() => {}}
          checked={false}
        />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });
});

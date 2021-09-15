import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Radio } from '..';

describe('Radio', () => {
  beforeAll(() => {
    jest.spyOn(console, 'warn').mockImplementation();
  });

  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Radio
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

  it('associates field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Radio
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

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Radio
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

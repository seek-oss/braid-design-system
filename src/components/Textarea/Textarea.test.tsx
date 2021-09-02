import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Textarea } from '..';

describe('Textarea', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Textarea id="field" label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('TEXTAREA');
  });

  it('associates field with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Textarea
          id="field"
          aria-label="My field"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('TEXTAREA');
  });

  it('associates field with aria-labelledby correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <div id="fieldLabel">My field</div>
        <Textarea
          id="field"
          aria-labelledby="fieldLabel"
          value=""
          onChange={() => {}}
        />
      </BraidTestProvider>,
    );

    expect(getByLabelText('My field').tagName).toBe('TEXTAREA');
  });

  it('associates field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Textarea
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
        <Textarea
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
        <Textarea
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
        <Textarea
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
        <Textarea id="field" label="My field" value="" onChange={() => {}} />
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My field').getAttribute('aria-describedby'),
    ).toBeNull();
  });
});

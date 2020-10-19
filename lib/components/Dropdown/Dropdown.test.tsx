import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider, Dropdown } from '..';

describe('Dropdown', () => {
  it('associates field with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown id="field" label="My dropdown" value="" onChange={() => {}}>
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown').tagName).toBe('SELECT');
  });

  it('associates field with message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown
          id="field"
          label="My dropdown"
          message="Required"
          value=""
          onChange={() => {}}
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown')).toHaveDescription('Required');
  });

  it('associates field with description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown
          id="field"
          label="My dropdown"
          description="More detail about field"
          value=""
          onChange={() => {}}
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown')).toHaveDescription(
      'More detail about field',
    );
  });

  it('associates field with custom description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <span id="detail">Custom description</span>
        <Dropdown
          id="field"
          label="My dropdown"
          aria-describedby="detail"
          value=""
          onChange={() => {}}
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown')).toHaveDescription(
      'Custom description',
    );
  });

  it('associates field with multiple description elements correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <span id="detail">Custom description</span>
        <Dropdown
          id="field"
          label="My dropdown"
          message="Required"
          description="More detail about field"
          aria-describedby="detail"
          value=""
          onChange={() => {}}
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown')).toHaveDescription(
      'Custom description Required More detail about field',
    );
  });

  it('field is not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown id="field" label="My dropdown" value="" onChange={() => {}}>
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('My dropdown').getAttribute('aria-describedby'),
    ).toBeNull();
  });
});

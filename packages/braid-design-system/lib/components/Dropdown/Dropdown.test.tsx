import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { Dropdown } from '..';

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

  it('associates field with aria-label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown
          id="field"
          aria-label="My dropdown"
          value=""
          onChange={() => {}}
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    expect(getByLabelText('My dropdown').tagName).toBe('SELECT');
  });

  it('associates field with aria-labelledby correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <div id="fieldLabel">My dropdown</div>
        <Dropdown
          id="field"
          aria-labelledby="fieldLabel"
          value=""
          onChange={() => {}}
        >
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

    expect(getByLabelText('My dropdown')).toHaveAccessibleDescription(
      'Required',
    );
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

    expect(getByLabelText('My dropdown')).toHaveAccessibleDescription(
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

    expect(getByLabelText('My dropdown')).toHaveAccessibleDescription(
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

    expect(getByLabelText('My dropdown')).toHaveAccessibleDescription(
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

  it("field has placeholder option selected when option isn't selected", () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown
          id="field"
          label="My dropdown"
          value=""
          onChange={() => {}}
          placeholder="Placeholder"
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    const select = getByLabelText('My dropdown') as HTMLSelectElement;

    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(2);

    expect(select.options[0].text).toEqual('Placeholder');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);

    expect(select.options[1].text).toEqual('1');
  });

  it('field still shows disabled placeholder option when another option is selected', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown
          id="field"
          label="My dropdown"
          value="1"
          onChange={() => {}}
          placeholder="Placeholder"
        >
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    const select = getByLabelText('My dropdown') as HTMLSelectElement;

    expect(select.selectedIndex).toBe(1);
    expect(select.options.length).toEqual(2);

    expect(select.options[0].text).toEqual('Placeholder');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);

    expect(select.options[1].text).toEqual('1');
  });

  it('field has blank option selected when value is blank', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown id="field" label="My dropdown" value="" onChange={() => {}}>
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    const select = getByLabelText('My dropdown') as HTMLSelectElement;

    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(2);

    expect(select.options[0].text).toEqual('');
    expect(select.options[0].value).toEqual('');
    expect(select.options[0].disabled).toEqual(true);

    expect(select.options[1].text).toEqual('1');
  });

  it('field should be missing blank option when an option is selected', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <Dropdown id="field" label="My dropdown" value="1" onChange={() => {}}>
          <option>1</option>
        </Dropdown>
      </BraidTestProvider>,
    );

    const select = getByLabelText('My dropdown') as HTMLSelectElement;

    expect(select.selectedIndex).toBe(0);
    expect(select.options.length).toEqual(1);
    expect(select.options[0].text).toEqual('1');
  });
});

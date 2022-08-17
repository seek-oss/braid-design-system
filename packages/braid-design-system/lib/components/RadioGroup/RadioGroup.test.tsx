import '@testing-library/jest-dom';
import React, { useState } from 'react';
import { render } from '@testing-library/react';
import { BraidTestProvider } from '../../../test';
import { RadioGroup, RadioItem } from '..';
import userEvent from '@testing-library/user-event';

const TestCase = () => {
  const [value, setValue] = useState('');
  return (
    <BraidTestProvider>
      <RadioGroup
        id="options"
        value={value}
        onChange={(e) => setValue(e.currentTarget.value)}
        label="Options"
      >
        <RadioItem label="Option 1" value="1" />
        <RadioItem label="Option 2" value="2" />
        <RadioItem label="Option 3" value="3" />
      </RadioGroup>
    </BraidTestProvider>
  );
};

describe('RadioGroup', () => {
  it('associates the group with label correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup id="options" value="" onChange={() => {}} label="Options">
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(getByLabelText('Options').tagName).toBe('FIELDSET');
  });

  it('associates radio items with their labels correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup id="options" value="" onChange={() => {}} label="Options">
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(getByLabelText('Option 1').tagName).toBe('INPUT');
    expect(getByLabelText('Option 1').getAttribute('value')).toBe('1');
    expect(getByLabelText('Option 2').tagName).toBe('INPUT');
    expect(getByLabelText('Option 2').getAttribute('value')).toBe('2');
  });

  it('associates radio items with group description correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup
          id="options"
          value=""
          onChange={() => {}}
          label="Options"
          description="More detail about group"
        >
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(getByLabelText('Option 1')).toHaveAccessibleDescription(
      'More detail about group',
    );
    expect(getByLabelText('Option 2')).toHaveAccessibleDescription(
      'More detail about group',
    );
  });

  it('associates radio items with group and item descriptions correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup
          id="options"
          value=""
          onChange={() => {}}
          label="Options"
          description="More detail about group"
        >
          <RadioItem
            label="Option 1"
            value="1"
            description="The first option"
          />
          <RadioItem
            label="Option 2"
            value="2"
            description="The second option"
          />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(getByLabelText('Option 1')).toHaveAccessibleDescription(
      'More detail about group The first option',
    );
    expect(getByLabelText('Option 2')).toHaveAccessibleDescription(
      'More detail about group The second option',
    );
  });

  it('associates radio items with group and item descriptions and a group message correctly', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup
          id="options"
          value=""
          onChange={() => {}}
          label="Options"
          description="More detail about group"
          message="Required"
        >
          <RadioItem
            label="Option 1"
            value="1"
            description="The first option"
          />
          <RadioItem
            label="Option 2"
            value="2"
            description="The second option"
          />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(getByLabelText('Option 1')).toHaveAccessibleDescription(
      'Required More detail about group The first option',
    );
    expect(getByLabelText('Option 2')).toHaveAccessibleDescription(
      'Required More detail about group The second option',
    );
  });

  it('group and items are not marked as having a description without a message or description', () => {
    const { getByLabelText } = render(
      <BraidTestProvider>
        <RadioGroup id="options" value="" onChange={() => {}} label="Options">
          <RadioItem label="Option 1" value="1" />
          <RadioItem label="Option 2" value="2" />
        </RadioGroup>
      </BraidTestProvider>,
    );

    expect(
      getByLabelText('Options').getAttribute('aria-describedby'),
    ).toBeNull();
    expect(
      getByLabelText('Option 2').getAttribute('aria-describedby'),
    ).toBeNull();
    expect(
      getByLabelText('Option 1').getAttribute('aria-describedby'),
    ).toBeNull();
  });

  it('select radio using space key', async () => {
    const { getByLabelText } = render(<TestCase />);

    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    await userEvent.type(option1, '{space}');

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    await userEvent.type(option2, '{space}');

    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });

  it('select radio using enter key', async () => {
    const { getByLabelText } = render(<TestCase />);

    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    await userEvent.type(option1, '{enter}');

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    await userEvent.type(option2, '{enter}');

    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });

  it('select radio clicking with mouse', async () => {
    const { getByLabelText } = render(<TestCase />);

    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;

    await userEvent.click(option1);

    expect(option1.checked).toBe(true);
    expect(option2.checked).toBe(false);

    await userEvent.click(option2);

    expect(option2.checked).toBe(true);
    expect(option1.checked).toBe(false);
  });

  it('should handle focus state correctly when tabbing', async () => {
    const { getByLabelText } = render(<TestCase />);

    const option1 = getByLabelText('Option 1') as HTMLInputElement;
    const option2 = getByLabelText('Option 2') as HTMLInputElement;
    const option3 = getByLabelText('Option 3') as HTMLInputElement;

    expect(document.body).toHaveFocus();

    await userEvent.tab();
    expect(option1).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();
    expect(option1.checked).toBe(false);
    expect(option2.checked).toBe(false);
    expect(option3.checked).toBe(false);

    await userEvent.tab({ shift: true });
    expect(option1).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();

    await userEvent.click(option2);
    expect(option2).toHaveFocus();

    await userEvent.tab();
    expect(document.body).toHaveFocus();

    await userEvent.tab({ shift: true });
    expect(option2).toHaveFocus();
  });
});

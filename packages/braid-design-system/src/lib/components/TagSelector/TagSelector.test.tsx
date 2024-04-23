import '@testing-library/jest-dom';
import 'html-validate/jest';
import type React from 'react';
import { BraidTestProvider } from '../../../entries/test';
import { TagSelector, type TagSelectorProps } from './TagSelector';
import { render } from '@testing-library/react';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { containerPrefix } from '../private/Announcement/Announcement';

const getAnnouncements = () =>
  document.body.querySelector(`[id*=${containerPrefix}]`)?.textContent || null;

function renderTagSelector({
  options,
  selectedTags: selectedTagsProp = [],
  ariaLabel,
  label,
}: Pick<TagSelectorProps, 'value' | 'options' | 'selectedTags' | 'label'> & {
  ariaLabel?: string;
}) {
  const selectHandler = jest.fn();
  const changeHandler = jest.fn();

  const TestCase = () => {
    const selectedTags = selectedTagsProp;

    const [value, setValue] = useState<string>('');

    return (
      <BraidTestProvider>
        <TagSelector
          id="Select tags"
          label={label}
          options={options}
          selectedTags={selectedTags}
          onSelect={(tag) => {
            setValue('');
            selectHandler(tag);
          }}
          value={value}
          onChange={(...args) => {
            setValue(...args);
            changeHandler(...args);
          }}
          ariaLabel={ariaLabel || undefined}
        />
      </BraidTestProvider>
    );
  };

  const { getByRole, getByLabelText, queryByLabelText } = render(<TestCase />);
  const input = getByRole('combobox');
  const getInputValue = () => input.getAttribute('value');

  return {
    input,
    getInputValue,
    selectHandler,
    changeHandler,
    getByLabelText,
    queryByLabelText,
  };
}

describe('TagSelector', () => {
  it('should honour aria-label if provided', () => {
    const { getByLabelText } = renderTagSelector({
      value: '',
      options: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
      ariaLabel: 'Actual Label',
      label: 'Select tags',
    });

    expect(getByLabelText('Actual Label')).toBeInTheDocument();
  });

  it('should select option on click', async () => {
    const { input, selectHandler, getInputValue, queryByLabelText } =
      renderTagSelector({
        value: '',
        options: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
      });

    await userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(selectHandler).not.toHaveBeenCalled();
    expect(getAnnouncements()).toBe(
      '1 option available. Use up and down arrow keys to navigate. Press enter to select',
    );

    const option = queryByLabelText('Apples');
    if (!option) {
      throw new Error('Option not found');
    }

    await userEvent.click(option);

    expect(getInputValue()).toBe('');
    expect(selectHandler).toHaveBeenCalledWith({
      description: 'Apples',
      id: 'apples',
    });
  });

  // Todo - ARIA labels
  describe('ARIA labels', () => {
    it('should associate the field label with the input', () => {
      const { queryByLabelText, input } = renderTagSelector({
        value: '',
        options: [],
        selectedTags: [],
        label: 'Fruit',
      });

      const result = queryByLabelText('Fruit');

      expect(result).toBe(input);
    });

    it('associates field with aria-label correctly', () => {
      const { getByLabelText } = render(
        <BraidTestProvider>
          <TagSelector
            id="id"
            label="Fruit"
            options={[]}
            selectedTags={[]}
            aria-label="Hidden field label"
            value=""
            onSelect={() => {}}
            onChange={() => {}}
          />
        </BraidTestProvider>,
      );

      expect(getByLabelText('Hidden field label').tagName).toBe('INPUT');
      expect(
        getByLabelText('Hidden field label').getAttribute('aria-labelledby'),
      ).toBeNull();
    });

    it('associates field with aria-labelledby correctly', () => {
      const { getByLabelText } = render(
        <BraidTestProvider>
          <div id="fieldLabel">My field</div>
          <TagSelector
            id="id"
            label="Fruit"
            options={[]}
            selectedTags={[]}
            aria-labelledby="fieldLabel"
            value=""
            onSelect={() => {}}
            onChange={() => {}}
          />
        </BraidTestProvider>,
      );

      expect(getByLabelText('My field').tagName).toBe('INPUT');
      expect(getByLabelText('My field').getAttribute('aria-label')).toBeNull();
    });

    it('should support standard options', async () => {
      const { input, queryByLabelText } = renderTagSelector({
        value: '',
        options: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
      });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );

      expect(queryByLabelText('Apples')).toBeInTheDocument();
    });
  });

  // Todo - keyboard access
  describe('keyboard access', () => {
    it("shouldn't select anything and close the dropdown on enter with no active option and no input", async () => {
      const { input, selectHandler, getInputValue, queryByLabelText } =
        renderTagSelector({
          value: '',
          options: [{ description: 'Apples', id: 'apples' }],
          selectedTags: [],
          label: 'Select tags',
        });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('');
      expect(selectHandler).not.toHaveBeenCalled();
      expect(queryByLabelText('Apples')).toBeNull(); // Ensure dropdown is closed
      expect(getAnnouncements()).toBeNull();
    });

    it('should select an option on enter after navigating the dropdown', async () => {
      const { input, selectHandler, getInputValue } = renderTagSelector({
        value: '',
        options: [
          { description: 'Apples', id: 'apples' },
          { description: 'Bananas', id: 'bananas' },
          { description: 'Carrots', id: 'carrots' },
        ],
        selectedTags: [],
        label: 'Select tags',
      });

      expect(getInputValue()).toBe('');

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 options available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(getAnnouncements()).toBeNull();
      expect(input).toHaveAttribute('aria-activedescendant', 'apples');

      await userEvent.keyboard('{arrowdown}');
      expect(getAnnouncements()).toBeNull();
      expect(input).toHaveAttribute('aria-activedescendant', 'bananas');

      await userEvent.keyboard('{arrowdown}');
      expect(getAnnouncements()).toBeNull();
      expect(input).toHaveAttribute('aria-activedescendant', 'carrots');

      // Ensure no changes have been committed yet
      expect(selectHandler).not.toHaveBeenCalled();

      await userEvent.keyboard('{enter}');

      expect(selectHandler).toHaveBeenCalledWith({
        description: 'Carrots',
        id: 'carrots',
      });
    });

    it('should first clear the suggestion preview and then reset the input when pressing escape', async () => {
      const { input, queryByLabelText, changeHandler, getInputValue } =
        renderTagSelector({
          value: '',
          options: [
            { description: 'Apples', id: 'apples' },
            { description: 'Bananas', id: 'bananas' },
            { description: 'Carrots', id: 'carrots' },
          ],
          selectedTags: [],
          label: 'Select tags',
        });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 options available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.paste('app');
      expect(changeHandler).toHaveBeenNthCalledWith(1, 'app');

      await userEvent.keyboard('{arrowdown}');
      expect(input).toHaveAttribute('aria-activedescendant', 'apples');

      await userEvent.keyboard('{Escape}');
      expect(getInputValue()).toBe('');
      expect(queryByLabelText('Apples')).toBe(null); // Ensure dropdown has closed
    });
  });

  // Todo - should select an option on enter after navigating

  // Todo - should show `noOptionsMessage` message when no options are provided
  // This functionality will need to be added to the component itself

  // Todo - should not show `noOptionsMessage` when options are provided

  // Todo - automatic selection
});

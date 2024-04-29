import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import type React from 'react';
import { BraidTestProvider } from '../../../entries/test';
import { TagSelector, type TagSelectorProps } from './TagSelector';
import { useState } from 'react';
import userEvent from '@testing-library/user-event';
import { containerPrefix } from '../private/Announcement/Announcement';

const getAnnouncements = () =>
  document.body.querySelector(`[id*=${containerPrefix}]`)?.textContent || null;

function renderTagSelector({
  value: initialValue,
  tagOptions,
  selectedTags,
  label,
  customTags = false,
  noOptionsMessage,
}: Pick<
  TagSelectorProps,
  'value' | 'tagOptions' | 'selectedTags' | 'label' | 'customTags'
> & {
  ariaLabel?: string;
  noOptionsMessage?: string;
}) {
  const selectHandler = jest.fn();
  const changeHandler = jest.fn();

  const TestCase = () => {
    const [value, setValue] = useState<string>(initialValue);

    return (
      <BraidTestProvider>
        <TagSelector
          id="Select tags"
          label={label}
          tagOptions={tagOptions}
          selectedTags={selectedTags}
          customTags={customTags}
          onSelect={(tag) => {
            setValue('');
            selectHandler(tag);
          }}
          value={value}
          onChange={(...args) => {
            setValue(...args);
            changeHandler(...args);
          }}
          onRemove={() => {}}
          noOptionsMessage={noOptionsMessage || undefined}
        />
      </BraidTestProvider>
    );
  };

  const {
    getByRole,
    queryByRole,
    queryByText,
    getByLabelText,
    queryByLabelText,
  } = render(<TestCase />);
  const input = getByRole('combobox');
  const getInputValue = () => input.getAttribute('value');

  return {
    input,
    queryByText,
    getByRole,
    queryByRole,
    getInputValue,
    selectHandler,
    changeHandler,
    getByLabelText,
    queryByLabelText,
  };
}

describe('TagSelector', () => {
  it('should render selected tags', () => {
    const { queryByText } = renderTagSelector({
      customTags: true,
      value: '',
      tagOptions: [],
      selectedTags: [
        { description: 'Apples', id: 'apples' },
        { description: 'Bananas', id: 'bananas' },
        { description: 'Carrots', id: 'carrots' },
      ],
      label: 'Select tags',
    });

    // Todo - maybe a more sophisticated check for if the tags are showing
    expect(queryByText('Apples')).toBeInTheDocument();
    expect(queryByText('Bananas')).toBeInTheDocument();
    expect(queryByText('Carrots')).toBeInTheDocument();
  });

  it('should toggle dropdown visibility on focus and blur', async () => {
    const { input, queryByLabelText } = renderTagSelector({
      value: '',
      tagOptions: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
      label: 'Select tags',
    });

    expect(queryByLabelText('Apples')).toBeNull();

    await userEvent.click(input);
    expect(queryByLabelText('Apples')).toBeInTheDocument();
    expect(getAnnouncements()).toBe(
      '1 option available. Use up and down arrow keys to navigate. Press enter to select',
    );

    fireEvent.blur(input);
    expect(queryByLabelText('Apples')).toBe(null);
    expect(getAnnouncements()).toBeNull();
  });

  it('should show text highlights', async () => {
    const { input, queryByText } = renderTagSelector({
      value: 'Appl',
      tagOptions: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
      label: 'Select tags',
    });

    await userEvent.click(input);

    const highlight = queryByText('Appl');
    expect(highlight && highlight.tagName).toBe('STRONG');
    expect(getAnnouncements()).toBe(
      '1 option available. Use up and down arrow keys to navigate. Press enter to select',
    );
  });

  it('should support options as a function', async () => {
    const { input, getInputValue, queryByLabelText } = renderTagSelector({
      value: 'Apples',
      tagOptions: (value) => [{ description: value, id: 'apples' }],
      selectedTags: [],
      label: 'Select tags',
    });

    expect(queryByLabelText('Apples')).toBeNull();
    expect(getInputValue()).toBe('Apples');

    await userEvent.click(input);

    expect(queryByLabelText('Apples')).toBeInTheDocument();
  });

  it('should support selectedTags as a function', async () => {
    const { getInputValue, queryByText } = renderTagSelector({
      customTags: true,
      value: 'Apples',
      tagOptions: [],
      selectedTags: (value) => [
        { description: `Selected ${value}`, id: 'apples' },
      ],
      label: 'Select tags',
    });

    expect(getInputValue()).toBe('Apples');
    expect(queryByText('Selected Apples')).toBeInTheDocument();
  });

  it('should select option on click', async () => {
    const { input, selectHandler, getInputValue, queryByLabelText } =
      renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
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
    expect(input).not.toHaveAttribute('aria-activedescendant');
    expect(selectHandler).toHaveBeenCalledWith({
      description: 'Apples',
      id: 'apples',
    });
  });

  describe('ARIA labels', () => {
    it('should associate the field label with the input', () => {
      const { queryByLabelText, input } = renderTagSelector({
        value: '',
        tagOptions: [],
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
            tagOptions={[]}
            selectedTags={[]}
            aria-label="Hidden field label"
            value=""
            onSelect={() => {}}
            onChange={() => {}}
            onRemove={() => {}}
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
            tagOptions={[]}
            selectedTags={[]}
            aria-labelledby="fieldLabel"
            value=""
            onSelect={() => {}}
            onChange={() => {}}
            onRemove={() => {}}
          />
        </BraidTestProvider>,
      );

      expect(getByLabelText('My field').tagName).toBe('INPUT');
      expect(getByLabelText('My field').getAttribute('aria-label')).toBeNull();
    });

    it('should support standard options', async () => {
      const { input, queryByLabelText } = renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
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

  describe('keyboard access', () => {
    it("shouldn't select anything and close the dropdown on enter with no active option and no input", async () => {
      const { input, selectHandler, getInputValue, queryByLabelText } =
        renderTagSelector({
          value: '',
          tagOptions: [{ description: 'Apples', id: 'apples' }],
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
        tagOptions: [
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
          tagOptions: [
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

      expect(input).toHaveFocus();
    });

    it('should select a suggestion on enter after navigating a single option', async () => {
      const { input, selectHandler } = renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(input).toHaveAttribute('aria-activedescendant', 'apples');

      await userEvent.keyboard('{enter}');

      expect(selectHandler).toHaveBeenCalledWith({
        description: 'Apples',
        id: 'apples',
      });
    });

    it("should submit the input's value if customTags are enabled with no active options when pressing enter", async () => {
      const { input, changeHandler } = renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
        customTags: true,
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.paste('Bananas');
      await userEvent.keyboard('{enter}');
      expect(changeHandler).toHaveBeenNthCalledWith(1, 'Bananas');
    });

    it('should hide dropdown but keep the input focussed with no active option and custom tags disabled when pressing enter', async () => {
      const { input, queryByLabelText } = renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );
      expect(queryByLabelText('Apples')).toBeInTheDocument();

      await userEvent.keyboard('{enter}');
      expect(queryByLabelText('Apples')).toBe(null); // Ensure dropdown has closed
      expect(input).toHaveFocus();
    });

    it('should show dropdown when it is hidden after input change', async () => {
      const { input, queryByLabelText } = renderTagSelector({
        value: '',
        tagOptions: [{ description: 'Apples', id: 'apples' }],
        selectedTags: [],
        label: 'Select tags',
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 option available. Use up and down arrow keys to navigate. Press enter to select',
      );
      expect(queryByLabelText('Apples')).toBeInTheDocument();

      await userEvent.keyboard('{Escape}');
      expect(queryByLabelText('Apples')).toBe(null); // Ensure dropdown has closed

      await userEvent.paste('app');
      expect(queryByLabelText('Apples')).toBeInTheDocument();
    });
  });

  it('should announce no options message when options are available', async () => {
    const { input, getByRole, queryByRole } = renderTagSelector({
      value: '',
      tagOptions: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
      label: 'Select tags',
    });

    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    await userEvent.click(input);
    expect(getByRole('option')).toHaveTextContent('Apples');
    expect(getAnnouncements()).toBe(
      '1 option available. Use up and down arrow keys to navigate. Press enter to select',
    );

    fireEvent.blur(input);
    expect(getAnnouncements()).toBeNull();
  });

  it('should announce no options message message when no options are available', async () => {
    const { input } = renderTagSelector({
      value: '',
      tagOptions: [],
      selectedTags: [],
      label: 'Select tags',
    });

    expect(getAnnouncements()).toBeNull();

    await userEvent.click(input);
    expect(getAnnouncements()).toBe('No options available');
  });

  it("should show and announce custom 'noOptionsMessage' if provided when no options are available", async () => {
    const { input, queryByRole, getByRole } = renderTagSelector({
      value: '',
      tagOptions: [],
      selectedTags: [],
      label: 'Select tags',
      noOptionsMessage: 'Custom no options message',
    });

    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    await userEvent.click(input);

    const noOptionsMessage = getByRole('listitem');
    expect(noOptionsMessage).toHaveTextContent('Custom no options message');
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBe('Custom no options message');

    fireEvent.blur(input);

    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();
  });
});

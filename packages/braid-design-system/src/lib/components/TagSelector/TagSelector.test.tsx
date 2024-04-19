import '@testing-library/jest-dom';
import 'html-validate/jest';
import type React from 'react';
import { BraidTestProvider } from '../../../entries/test';
import { type Tag, TagSelector, type TagSelectorProps } from './TagSelector';
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
}: Pick<TagSelectorProps, 'value' | 'options' | 'selectedTags'> & {
  ariaLabel?: string;
}) {
  const changeHandler = jest.fn();

  const TestCase = () => {
    const [selectedTags, setSelectedTags] = useState<Tag[]>(selectedTagsProp);

    const [value, setValue] = useState<string>('');

    return (
      <BraidTestProvider>
        <TagSelector
          options={options}
          selectedTags={selectedTags}
          onSelect={(tag) => {
            setSelectedTags((tags) =>
              tags.some((t) => t.id === tag.id)
                ? tags.filter((t) => t.id !== tag.id)
                : [...tags, tag],
            );
            setValue('');
          }}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          ariaLabel={ariaLabel || undefined}
        />
      </BraidTestProvider>
    );
  };

  const { getByRole, getByLabelText } = render(<TestCase />);
  const input = getByRole('combobox');
  const getInputValue = () => input.getAttribute('value');

  return { input, getInputValue, changeHandler, getByLabelText };
}

describe('TagSelector', () => {
  it('should honour aria-label if provided', () => {
    const { getByLabelText } = renderTagSelector({
      value: '',
      options: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
      ariaLabel: 'Actual Label',
    });

    expect(getByLabelText('Actual Label')).toBeInTheDocument();
  });

  // Todo - should select option on click
  it('should select option on click', async () => {
    const { input, changeHandler, getInputValue } = renderTagSelector({
      value: '',
      options: [{ description: 'Apples', id: 'apples' }],
      selectedTags: [],
    });

    await userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();
    // Announcements functionality will need to be added to the component itself
    expect(getAnnouncements()).toBe(
      '1 option available. Use up and down arrow keys to navigate. Press enter to select',
    );
  });

  // Todo - should pass through focus and blur events

  // Todo - should forward refs

  // Todo - ARIA labels

  // Todo - keyboard access

  // Todo - should select an option on enter after navigating

  // Todo - should show `noOptionsMessage` message when no options are provided
  // This functionality will need to be added to the component itself

  // Todo - should not show `noOptionsMessage` when options are provided

  // Todo - automatic selection
});

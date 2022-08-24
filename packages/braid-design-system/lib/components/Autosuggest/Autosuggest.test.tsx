import '@testing-library/jest-dom';
import React, { useState, useRef, useEffect, Dispatch } from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { Autosuggest, filterSuggestions } from '..';
import { AutosuggestProps } from './Autosuggest';
import { containerPrefix } from '../private/Announcement/Announcement';

const getAnnouncements = () =>
  document.body.querySelector(`[id*=${containerPrefix}]`)?.textContent || null;

function renderAutosuggest<Value>({
  value: initialValue,
  suggestions: suggestionsProp,
  automaticSelection,
  onFocus,
  onBlur,
}: Pick<
  AutosuggestProps<Value>,
  'value' | 'suggestions' | 'automaticSelection' | 'onFocus' | 'onBlur'
>) {
  const changeHandler = jest.fn();

  type Suggestions = AutosuggestProps<Value>['suggestions'];

  let suggestions: Suggestions = [];
  let setSuggestions: Dispatch<Suggestions> = () => {
    /* */
  };

  const TestCase = () => {
    const [value, setValue] = useState(initialValue);

    [suggestions, setSuggestions] = useState(() => suggestionsProp);

    return (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          automaticSelection={automaticSelection}
          value={value}
          onChange={(...args) => {
            setValue(...args);
            changeHandler(...args);
          }}
          suggestions={suggestions}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </BraidTestProvider>
    );
  };

  const { getByRole, queryByLabelText, queryByText, getByTestId } = render(
    <TestCase />,
  );
  const input = getByRole('combobox');
  const getInputValue = () => input.getAttribute('value');

  return {
    input,
    getInputValue,
    changeHandler,
    queryByLabelText,
    queryByText,
    getByTestId,
    setSuggestions: (x: Suggestions) => act(() => setSuggestions(x)),
  };
}

describe('Autosuggest', () => {
  it('should toggle suggestion visibility on focus and blur', async () => {
    const { input, queryByLabelText } = renderAutosuggest({
      value: { text: '' },
      suggestions: [{ text: 'Apples', value: 'apples' }],
    });

    expect(queryByLabelText('Apples')).toBe(null);
    expect(getAnnouncements()).toBeNull();

    await userEvent.click(input);
    expect(queryByLabelText('Apples')).toBeInTheDocument();
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    // Ensure no clear buttons are present
    expect(queryByLabelText('Clear suggestion')).not.toBeInTheDocument();

    fireEvent.blur(input);
    expect(queryByLabelText('Apples')).toBe(null);
    expect(getAnnouncements()).toBeNull();
  });

  it('should show text highlights', async () => {
    const { input, queryByText } = renderAutosuggest({
      value: { text: '' },
      suggestions: [
        {
          text: 'Apples',
          value: 'apples',
          highlights: [{ start: 0, end: 4 }],
        },
      ],
    });

    await userEvent.click(input);

    const highlight = queryByText('Appl');
    expect(highlight && highlight.tagName).toBe('STRONG');
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );
  });

  it('should support suggestions as a function', async () => {
    const { input, queryByText } = renderAutosuggest({
      value: { text: 'Apples' },
      suggestions: ({ text }) => [
        {
          text,
          value: 'apples',
          highlights: [{ start: 0, end: 6 }],
        },
      ],
    });

    await userEvent.click(input);

    const highlight = queryByText('Apples');
    expect(highlight && highlight.tagName).toBe('STRONG');
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );
  });

  it('should select suggestions on click', async () => {
    const { input, changeHandler, queryByLabelText, getInputValue } =
      renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });

    await userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    const suggestion = queryByLabelText('Apples');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    await userEvent.click(suggestion);

    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
    expect(getAnnouncements()).toBeNull();
  });

  it('should support custom suggestion labels', async () => {
    const { input, changeHandler, queryByLabelText, getInputValue } =
      renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            label: 'CUSTOM LABEL',
            value: 'apples',
          },
        ],
      });

    await userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    const suggestion = queryByLabelText('CUSTOM LABEL');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    await userEvent.click(suggestion);

    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
    expect(getAnnouncements()).toBeNull();
  });

  it('should keep the menu open when a selection is made if "hideSuggestionsOnSelection" is false', async () => {
    const TestCase = () => {
      const initialValue = 'appl';
      const [value, setValue] = useState({ text: initialValue });

      return (
        <BraidTestProvider>
          <Autosuggest
            id="fruit"
            label="Fruit"
            value={value}
            onChange={(newValue) => {
              setValue(newValue.value ? { text: '' } : newValue);
            }}
            hideSuggestionsOnSelection={false}
            suggestions={[
              {
                text: 'Apples',
                value: 'apples',
              },
            ]}
          />
        </BraidTestProvider>
      );
    };

    const { getByRole, queryByLabelText } = render(<TestCase />);
    const input = getByRole('combobox');
    const getInputValue = () => input.getAttribute('value');

    await userEvent.click(input);

    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    const suggestion = queryByLabelText('Apples');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    await userEvent.click(suggestion);

    expect(getInputValue()).toBe('');
    expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );
  });

  it('should pass through focus and blur events', async () => {
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();
    const { input } = renderAutosuggest({
      value: { text: '' },
      suggestions: [
        { text: 'Apples', value: 'apples', highlights: [{ start: 0, end: 4 }] },
      ],
      onFocus: focusHandler,
      onBlur: blurHandler,
    });

    expect(focusHandler).not.toHaveBeenCalled();
    expect(blurHandler).not.toHaveBeenCalled();

    await userEvent.click(input);
    expect(focusHandler).toHaveBeenCalledWith();

    fireEvent.blur(input);
    expect(blurHandler).toHaveBeenCalledWith();
  });

  it("should call 'onClear' handler when clearing suggestions", async () => {
    const clearHandler = jest.fn();
    let suggestions = [
      {
        text: 'Apples',
        value: 'apples',
        highlights: [{ start: 0, end: 4 }],
        onClear: clearHandler,
        clearLabel: 'Clear "Apples"',
      },
      {
        text: 'Bananas',
        value: 'bananas',
        highlights: [{ start: 0, end: 4 }],
        onClear: clearHandler,
        clearLabel: 'Clear "Bananas"',
      },
      {
        text: 'Carrots',
        value: 'carrots',
        highlights: [{ start: 0, end: 4 }],
      },
    ];
    const { input, queryByLabelText, changeHandler, setSuggestions } =
      renderAutosuggest({
        value: { text: '' },
        suggestions,
      });

    await userEvent.click(input);

    expect(getAnnouncements()).toBe(
      '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
    );
    expect(clearHandler).not.toHaveBeenCalled();

    const clearApples = queryByLabelText('Clear "Apples"');
    expect(clearApples).toBeInTheDocument();
    if (clearApples) {
      fireEvent.click(clearApples);
    }
    expect(clearHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
    suggestions = suggestions.filter(({ value }) => value !== 'apples');
    setSuggestions(suggestions);
    expect(getAnnouncements()).toBe(
      '2 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
    );
    clearHandler.mockClear();

    const clearBananas = queryByLabelText('Clear "Bananas"');
    expect(clearBananas).toBeInTheDocument();
    if (clearBananas) {
      fireEvent.click(clearBananas);
    }
    expect(clearHandler).toHaveBeenNthCalledWith(1, {
      text: 'Bananas',
      value: 'bananas',
    });
    suggestions = suggestions.filter(({ value }) => value !== 'bananas');
    setSuggestions(suggestions);
    clearHandler.mockClear();
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    expect(changeHandler).not.toHaveBeenCalled();
  });

  it('should forward refs', () => {
    const TestCase = () => {
      const inputRef = useRef<HTMLInputElement>(null);

      useEffect(() => {
        if (inputRef.current) {
          inputRef.current.setAttribute('data-foo', 'bar');
        }
      }, []);

      return (
        <BraidTestProvider>
          <Autosuggest
            id="id"
            label="Label"
            value={{ text: '' }}
            onChange={() => {}}
            suggestions={[]}
            ref={inputRef}
          />
        </BraidTestProvider>
      );
    };

    const { getByRole } = render(<TestCase />);
    const input = getByRole('combobox');
    expect(input.getAttribute('data-foo')).toBe('bar');
  });

  describe('ARIA labels', () => {
    it('should associate the field label with the input', () => {
      const { queryByLabelText, input } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
          },
        ],
      });

      const result = queryByLabelText('Fruit');

      expect(result).toBe(input);
    });

    it('should support standard suggestions', async () => {
      const { input, queryByLabelText } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
          },
        ],
      });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );
      expect(queryByLabelText('Apples')).toBeInTheDocument();
    });

    it('should support grouped suggestions', async () => {
      const { input, queryByLabelText, getByTestId } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
                value: 'apples',
              },
              {
                text: 'Bananas',
                value: 'bananas',
              },
              {
                text: 'Oranges',
                value: 'oranges',
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Carrots',
                value: 'carrots',
              },
              {
                text: 'Broccoli',
                value: 'broccoli',
              },
            ],
          },
          {
            label: 'Dessert',
            suggestions: [
              {
                text: 'Ice cream',
                value: 'ice-cream',
              },
            ],
          },
        ],
      });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '6 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      expect(queryByLabelText('Apples (Fruit)')).toBeInTheDocument();
      expect(queryByLabelText('Carrots (Vegetables)')).toBeInTheDocument();
      expect(queryByLabelText('Ice cream (Dessert)')).toBeInTheDocument();

      expect(getByTestId('group-heading-Fruit')).toBeInTheDocument();
      expect(getByTestId('group-heading-Vegetables')).toBeInTheDocument();
      expect(getByTestId('group-heading-Dessert')).toBeInTheDocument();
    });

    it('should support suggestions with descriptions', async () => {
      const { input, queryByLabelText } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            description: 'Juicy and delicious',
            value: 'apples',
          },
        ],
      });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );
      expect(
        queryByLabelText('Apples - Juicy and delicious'),
      ).toBeInTheDocument();
    });

    it('should support grouped suggestions with descriptions', async () => {
      const { input, queryByLabelText } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
                description: 'Juicy and delicious',
                value: 'apples',
              },
            ],
          },
        ],
      });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );
      expect(
        queryByLabelText('Apples - Juicy and delicious (Fruit)'),
      ).toBeInTheDocument();
    });
  });

  describe('keyboard access', () => {
    it("shouldn't select anything and close the list on enter if the user hasn't navigated the list", async () => {
      const { input, changeHandler, getInputValue, queryByLabelText } =
        renderAutosuggest({
          value: { text: '' },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [{ start: 0, end: 4 }],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [{ start: 0, end: 4 }],
            },
          ],
        });

      await userEvent.click(input);

      expect(getAnnouncements()).toBe(
        '2 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();

      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
      expect(getAnnouncements()).toBeNull();
    });

    it('should select a suggestion on enter after navigating the list', async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            description: 'Juicy and delicious',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            description: 'High in potassium',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            description: 'Orange and crunchy',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });

      expect(getInputValue()).toBe('');

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );
      await userEvent.keyboard('{arrowdown}');
      expect(getAnnouncements()).toBeNull();

      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      await userEvent.keyboard('{arrowup}');
      expect(getInputValue()).toBe('Bananas');

      // Ensure no changes have been committed yet
      expect(changeHandler).not.toHaveBeenCalled();

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Bananas',
        value: 'bananas',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should first clear the suggestion preview and then reset the input when pressing escape', async () => {
      const suggestions = [
        {
          text: 'Apples',
          value: 'apples',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Bananas',
          value: 'bananas',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Carrots',
          value: 'carrots',
          highlights: [{ start: 0, end: 4 }],
        },
      ];
      const {
        input,
        changeHandler,
        queryByLabelText,
        getInputValue,
        setSuggestions,
      } = renderAutosuggest({
        value: { text: '' },
        suggestions,
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.paste('app');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'app' });
      setSuggestions(filterSuggestions(suggestions, 'app'));
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );
      changeHandler.mockClear();

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{Escape}');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getInputValue()).toBe('app');
      expect(getAnnouncements()).toBeNull();

      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed

      await userEvent.keyboard('{Escape}');
      expect(getInputValue()).toBe('');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: '' });
      setSuggestions(filterSuggestions(suggestions, ''));
      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has re-opened
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{Escape}');
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed again
      expect(getAnnouncements()).toBeNull();
    });

    it('should select a suggestion on enter after navigating a single suggestion', async () => {
      const { input, changeHandler, getInputValue, queryByLabelText } =
        renderAutosuggest({
          value: { text: '' },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [{ start: 0, end: 4 }],
            },
          ],
        });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
      expect(getAnnouncements()).toBeNull();
    });

    it('should keep the menu open on selection if "hideSuggestionsOnSelection" is false', async () => {
      const TestCase = () => {
        const initialValue = 'appl';
        const [value, setValue] = useState({ text: initialValue });

        return (
          <BraidTestProvider>
            <Autosuggest
              id="fruit"
              label="Fruit"
              value={value}
              onChange={(newValue) => {
                setValue(newValue.value ? { text: '' } : newValue);
              }}
              hideSuggestionsOnSelection={false}
              suggestions={[
                {
                  text: 'Apples',
                  value: 'apples',
                },
              ]}
            />
          </BraidTestProvider>
        );
      };

      const { getByRole, queryByLabelText } = render(<TestCase />);
      const input = getByRole('combobox');
      const getInputValue = () => input.getAttribute('value');

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('');
      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );
    });

    it('should select a grouped suggestion on enter after navigating the list', async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
                value: 'apples',
                highlights: [{ start: 0, end: 4 }],
              },
              {
                text: 'Bananas',
                value: 'bananas',
                highlights: [{ start: 0, end: 4 }],
              },
            ],
          },
          {
            label: 'Vegetables',
            suggestions: [
              {
                text: 'Broccoli',
                value: 'broccoli',
                highlights: [{ start: 0, end: 4 }],
              },
              {
                text: 'Carrots',
                value: 'carrots',
                highlights: [{ start: 0, end: 4 }],
              },
            ],
          },
        ],
      });
      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '4 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Broccoli');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      await userEvent.keyboard('{arrowup}');
      expect(getInputValue()).toBe('Broccoli');

      await userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Broccoli');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Broccoli',
        value: 'broccoli',
      });
      expect(getAnnouncements()).toBeNull();
    });
  });

  it('should select a suggestion on enter after navigating to a single grouped suggestion', async () => {
    const { input, changeHandler } = renderAutosuggest({
      value: { text: '' },
      suggestions: [
        {
          label: 'Fruit',
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [{ start: 0, end: 4 }],
            },
          ],
        },
      ],
    });
    await userEvent.click(input);
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );
    await userEvent.keyboard('{arrowdown}');
    await userEvent.keyboard('{enter}');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
    expect(getAnnouncements()).toBeNull();
  });

  it('should support legacy no results messages via `suggestions`', async () => {
    // Hide deprecation warning from test log
    jest.spyOn(console, 'warn').mockImplementation(() => {});

    const TestCase = () => (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
          hideSuggestionsOnSelection={false}
          suggestions={{ message: 'Legacy no suggestions message' }}
        />
      </BraidTestProvider>
    );

    const { getByRole, queryByRole } = render(<TestCase />);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    const input = getByRole('combobox');
    await userEvent.click(input);
    expect(queryByRole('listitem')).toHaveTextContent(
      'Legacy no suggestions message',
    );
    expect(getAnnouncements()).toBe('Legacy no suggestions message');

    fireEvent.blur(input);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    // Restore console warnings
    jest.spyOn(console, 'warn').mockRestore();
  });

  it('should not show `noSuggestionsMessage` when suggestions are provided', async () => {
    const TestCase = () => (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
          hideSuggestionsOnSelection={false}
          suggestions={[
            {
              text: 'Apples',
              value: 'apples',
              highlights: [{ start: 0, end: 4 }],
            },
          ]}
          noSuggestionsMessage={{
            text: 'Custom no suggestions message.',
          }}
        />
      </BraidTestProvider>
    );

    const { getByRole, queryByRole } = render(<TestCase />);
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    const input = getByRole('combobox');
    await userEvent.click(input);
    expect(getByRole('option')).toHaveTextContent('Apples');
    expect(getAnnouncements()).toBe(
      '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
    );

    fireEvent.blur(input);
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();
  });

  it('should show `noSuggestionsMessage` without a description when no suggestions provided', async () => {
    const TestCase = () => (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
          hideSuggestionsOnSelection={false}
          suggestions={[]}
          noSuggestionsMessage={{
            text: 'Custom no suggestions message.',
          }}
        />
      </BraidTestProvider>
    );

    const { getByRole, queryByRole } = render(<TestCase />);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    const input = getByRole('combobox');
    await userEvent.click(input);
    expect(getByRole('listitem')).toHaveTextContent(
      'Custom no suggestions message.',
    );
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBe('Custom no suggestions message.');

    fireEvent.blur(input);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();
  });

  it('should show `noSuggestionsMessage` with a description when no suggestions provided', async () => {
    const TestCase = () => (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
          hideSuggestionsOnSelection={false}
          suggestions={[]}
          noSuggestionsMessage={{
            text: 'Custom no suggestions message.',
            description: 'Additional no suggestions description',
          }}
        />
      </BraidTestProvider>
    );

    const { getByRole, queryByRole } = render(<TestCase />);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();

    const input = getByRole('combobox');
    await userEvent.click(input);
    expect(getByRole('listitem')).toHaveTextContent(
      'Custom no suggestions message.Additional no suggestions description',
    );
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBe(
      'Custom no suggestions message. Additional no suggestions description',
    );

    fireEvent.blur(input);
    expect(queryByRole('listitem')).not.toBeInTheDocument();
    expect(queryByRole('option')).not.toBeInTheDocument();
    expect(getAnnouncements()).toBeNull();
  });

  describe('automaticSelection', () => {
    it("shouldn't select anything on enter if the user hasn't typed anything", async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });
      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );
      await userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getAnnouncements()).toBeNull();
    });

    it("shouldn't select anything on blur if the user hasn't typed anything", async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );
      fireEvent.blur(input);
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getAnnouncements()).toBeNull();
    });

    it("shouldn't select anything on blur if the field is populated and the user hasn't typed anything", async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: 'I already typed something' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Suggestion Apples is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );
      fireEvent.blur(input);
      expect(getInputValue()).toBe('I already typed something');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getAnnouncements()).toBeNull();
    });

    it("shouldn't select anything on blur if the suggestions are hidden", async () => {
      const suggestions = [
        {
          text: 'Apples',
          value: 'apples',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Bananas',
          value: 'bananas',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Carrots',
          value: 'carrots',
          highlights: [{ start: 0, end: 4 }],
        },
      ];

      const {
        input,
        changeHandler,
        getInputValue,
        queryByLabelText,
        setSuggestions,
      } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions,
      });

      expect(getInputValue()).toBe('');

      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.type(input, 'B');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'B',
      });
      setSuggestions(filterSuggestions(suggestions, 'B'));
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Suggestion Bananas is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');
      expect(getAnnouncements()).toBeNull();

      await userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(2, {
        text: 'Bananas',
        value: 'bananas',
      });
      expect(getAnnouncements()).toBeNull();

      // Wait a bit because we ignore blurs that happens too quickly
      // after pressing arrow down (to fix a bug in Chrome + VoiceOver)
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Ensure suggestions are hidden
      expect(queryByLabelText('Apples')).toBe(null);

      fireEvent.blur(input);

      // Ensure value hasn't changed
      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenCalledTimes(2);
      expect(getAnnouncements()).toBeNull();
    });

    it("shouldn't select anything on blur if the user clears the field", () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: 'abc' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });

      fireEvent.input(input, { target: { value: '' } });
      fireEvent.blur(input);
      expect(getInputValue()).toBe('');
      expect(changeHandler).toHaveBeenCalledWith({ text: '' });
      expect(getAnnouncements()).toBeNull();
    });

    it('should select the first suggestion on enter after typing something', async () => {
      const suggestions = [
        {
          text: 'Apples',
          value: 'apples',
          highlights: [{ start: 0, end: 4 }],
        },
      ];
      const { input, changeHandler, getInputValue, setSuggestions } =
        renderAutosuggest({
          automaticSelection: true,
          value: { text: '' },
          suggestions,
        });
      await userEvent.click(input);
      expect(getInputValue()).toBe('');
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      setSuggestions(filterSuggestions(suggestions, 'a'));
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Suggestion Apples is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );
      changeHandler.mockClear();

      await userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should select the first suggestion on enter after typing something when the suggestions are async', async () => {
      const {
        input,
        changeHandler,
        getInputValue,
        setSuggestions,
        queryByLabelText,
      } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [],
      });
      await userEvent.click(input);
      expect(getInputValue()).toBe('');
      expect(getAnnouncements()).toBeNull();

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      expect(getAnnouncements()).toBeNull();
      changeHandler.mockClear();

      // Simulate suggestions coming back from an API
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          setSuggestions([
            {
              text: 'Apples',
              value: 'apples',
              highlights: [{ start: 0, end: 4 }],
            },
          ]);

          resolve();
        }, 100);
      });
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Suggestion Apples is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );

      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has opened

      await userEvent.keyboard('{enter}');

      expect(queryByLabelText('Apples')).not.toBeInTheDocument(); // Ensure menu has closed

      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should allow you to navigate a suggestions list with a single item', async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });
      await userEvent.click(input);
      expect(getInputValue()).toBe('');
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Suggestion Apples is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );

      changeHandler.mockClear();

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      await userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should select the first suggestion on blur after typing something', async () => {
      const suggestions = [
        {
          text: 'Apples',
          value: 'apples',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Bananas',
          value: 'bananas',
          highlights: [{ start: 0, end: 4 }],
        },
        {
          text: 'Carrots',
          value: 'carrots',
          highlights: [{ start: 0, end: 4 }],
        },
      ];
      const { input, changeHandler, getInputValue, setSuggestions } =
        renderAutosuggest({
          automaticSelection: true,
          value: { text: '' },
          suggestions,
        });
      await userEvent.click(input);
      expect(getInputValue()).toBe('');
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      setSuggestions(filterSuggestions(suggestions, 'a'));
      expect(getAnnouncements()).toBe(
        '1 suggestion available. Suggestion Apples is automatically selected. Use up and down arrow keys to navigate. Press enter to select',
      );

      changeHandler.mockClear();

      fireEvent.blur(input);
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should initially highlight the first suggestion when navigating the list', async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });
      await userEvent.click(input);
      expect(getInputValue()).toBe('');
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );

      await userEvent.type(input, 'a');
      expect(getInputValue()).toBe('a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      await userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Carrots');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Carrots',
        value: 'carrots',
      });
      expect(getAnnouncements()).toBeNull();
    });

    it('should select the highlighted suggestion on blur after navigating the list', async () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
        automaticSelection: true,
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [{ start: 0, end: 4 }],
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [{ start: 0, end: 4 }],
          },
        ],
      });
      await userEvent.click(input);
      expect(getAnnouncements()).toBe(
        '3 suggestions available. Use up and down arrow keys to navigate. Press enter to select',
      );
      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      await userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      // Wait a bit because we ignore blurs that happens too quickly
      // after pressing arrow down (to fix a bug in Chrome + VoiceOver)
      await new Promise((resolve) => setTimeout(resolve, 300));

      fireEvent.blur(input);
      expect(getInputValue()).toBe('Carrots');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Carrots',
        value: 'carrots',
      });
      expect(getAnnouncements()).toBeNull();
    });
  });
});

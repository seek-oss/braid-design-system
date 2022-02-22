import '@testing-library/jest-dom/extend-expect';
import React, { useState, useRef, useEffect, Dispatch } from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { Autosuggest } from '..';
import { AutosuggestProps } from './Autosuggest';

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
  it('should toggle suggestion visibility on focus and blur', () => {
    const { input, queryByLabelText } = renderAutosuggest({
      value: { text: '' },
      suggestions: [{ text: 'Apples', value: 'apples' }],
    });

    expect(queryByLabelText('Apples')).toBe(null);

    userEvent.click(input);
    expect(queryByLabelText('Apples')).toBeInTheDocument();

    // Ensure no clear buttons are present
    expect(queryByLabelText('Clear suggestion')).not.toBeInTheDocument();

    fireEvent.blur(input);
    expect(queryByLabelText('Apples')).toBe(null);
  });

  it('should show text highlights', () => {
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

    userEvent.click(input);

    const highlight = queryByText('Appl');
    expect(highlight && highlight.tagName).toBe('STRONG');
  });

  it('should support suggestions as a function', () => {
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

    userEvent.click(input);

    const highlight = queryByText('Apples');
    expect(highlight && highlight.tagName).toBe('STRONG');
  });

  it('should select suggestions on click', () => {
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

    userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();

    const suggestion = queryByLabelText('Apples');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    userEvent.click(suggestion);

    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
  });

  it('should support custom suggestion labels', () => {
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

    userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();

    const suggestion = queryByLabelText('CUSTOM LABEL');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    userEvent.click(suggestion);

    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
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

    userEvent.click(input);

    const suggestion = queryByLabelText('Apples');
    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    userEvent.click(suggestion);

    expect(getInputValue()).toBe('');
    expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open
  });

  it('should pass through focus and blur events', () => {
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

    userEvent.click(input);
    expect(focusHandler).toHaveBeenCalledWith();

    fireEvent.blur(input);
    expect(blurHandler).toHaveBeenCalledWith();
  });

  it("should call 'onClear' handler when clearing suggestions", () => {
    const clearHandler = jest.fn();
    const { input, queryByLabelText, changeHandler } = renderAutosuggest({
      value: { text: '' },
      suggestions: [
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
      ],
    });

    userEvent.click(input);

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
    clearHandler.mockClear();

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

    it('should support standard suggestions', () => {
      const { input, queryByLabelText } = renderAutosuggest({
        value: { text: '' },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
          },
        ],
      });

      userEvent.click(input);

      expect(queryByLabelText('Apples')).toBeInTheDocument();
    });

    it('should support grouped suggestions', () => {
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

      userEvent.click(input);

      expect(queryByLabelText('Apples (Fruit)')).toBeInTheDocument();
      expect(queryByLabelText('Carrots (Vegetables)')).toBeInTheDocument();
      expect(queryByLabelText('Ice cream (Dessert)')).toBeInTheDocument();

      expect(getByTestId('group-heading-Fruit')).toBeInTheDocument();
      expect(getByTestId('group-heading-Vegetables')).toBeInTheDocument();
      expect(getByTestId('group-heading-Dessert')).toBeInTheDocument();
    });

    it('should support suggestions with descriptions', () => {
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

      userEvent.click(input);

      expect(
        queryByLabelText('Apples - Juicy and delicious'),
      ).toBeInTheDocument();
    });

    it('should support grouped suggestions with descriptions', () => {
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

      userEvent.click(input);

      expect(
        queryByLabelText('Apples - Juicy and delicious (Fruit)'),
      ).toBeInTheDocument();
    });
  });

  describe('keyboard access', () => {
    it("shouldn't select anything and close the list on enter if the user hasn't navigated the list", () => {
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

      userEvent.click(input);
      userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();

      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
    });

    it('should select a suggestion on enter after navigating the list', () => {
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

      userEvent.click(input);
      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      userEvent.keyboard('{arrowup}');
      expect(getInputValue()).toBe('Bananas');

      // Ensure no changes have been committed yet
      expect(changeHandler).not.toHaveBeenCalled();

      userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Bananas',
        value: 'bananas',
      });
    });

    it('should first clear the suggestion preview and then reset the input when pressing escape', async () => {
      const { input, changeHandler, queryByLabelText, getInputValue } =
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
            {
              text: 'Carrots',
              value: 'carrots',
              highlights: [{ start: 0, end: 4 }],
            },
          ],
        });

      userEvent.click(input);

      await userEvent.paste(input, 'app');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'app' });
      changeHandler.mockClear();

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{esc}');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getInputValue()).toBe('app');

      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed

      userEvent.keyboard('{esc}');
      expect(getInputValue()).toBe('');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: '' });
      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has re-opened

      userEvent.keyboard('{esc}');
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed again
    });

    it('should select a suggestion on enter after navigating a single suggestion', () => {
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

      userEvent.click(input);

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
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

      userEvent.click(input);

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('');
      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open
    });

    it('should select a grouped suggestion on enter after navigating the list', () => {
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
      userEvent.click(input);

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Broccoli');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      userEvent.keyboard('{arrowup}');
      expect(getInputValue()).toBe('Broccoli');

      userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Broccoli');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Broccoli',
        value: 'broccoli',
      });
    });
  });

  it('should select a suggestion on enter after navigating to a single grouped suggestion', () => {
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
    userEvent.click(input);
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{enter}');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
  });

  it('should support messages', () => {
    const TestCase = () => (
      <BraidTestProvider>
        <Autosuggest
          id="fruit"
          label="Fruit"
          value={{ text: '' }}
          onChange={() => {}}
          hideSuggestionsOnSelection={false}
          suggestions={{ message: 'No suggestions' }}
        />
      </BraidTestProvider>
    );

    const { getByRole, queryByText } = render(<TestCase />);
    expect(queryByText('No suggestions')).not.toBeInTheDocument();

    const input = getByRole('combobox');
    userEvent.click(input);
    expect(queryByText('No suggestions')).toBeInTheDocument();

    fireEvent.blur(input);
    expect(queryByText('No suggestions')).not.toBeInTheDocument();
  });

  describe('automaticSelection', () => {
    it("shouldn't select anything on enter if the user hasn't typed anything", () => {
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
      userEvent.click(input);
      userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it("shouldn't select anything on blur if the user hasn't typed anything", () => {
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

      userEvent.click(input);
      fireEvent.blur(input);
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it("shouldn't select anything on blur if the field is populated and the user hasn't typed anything", () => {
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

      userEvent.click(input);
      fireEvent.blur(input);
      expect(getInputValue()).toBe('I already typed something');
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it("shouldn't select anything on blur if the suggestions are hidden", async () => {
      const { input, changeHandler, getInputValue, queryByLabelText } =
        renderAutosuggest({
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

      expect(getInputValue()).toBe('');

      userEvent.click(input);

      userEvent.type(input, 'B');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'B',
      });

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(2, {
        text: 'Bananas',
        value: 'bananas',
      });

      // Wait a bit because we ignore blurs that happens too quickly
      // after pressing arrow down (to fix a bug in Chrome + VoiceOver)
      await new Promise((resolve) => setTimeout(resolve, 300));

      // Ensure suggestions are hidden
      expect(queryByLabelText('Apples')).toBe(null);

      fireEvent.blur(input);

      // Ensure value hasn't changed
      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenCalledTimes(2);
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
    });

    it('should select the first suggestion on enter after typing something', async () => {
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
      userEvent.click(input);
      expect(getInputValue()).toBe('');

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
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
      userEvent.click(input);
      expect(getInputValue()).toBe('');

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
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

      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has opened

      userEvent.keyboard('{enter}');

      expect(queryByLabelText('Apples')).not.toBeInTheDocument(); // Ensure menu has closed

      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
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
      userEvent.click(input);
      expect(getInputValue()).toBe('');

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Apples');

      userEvent.keyboard('{enter}');
      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
    });

    it('should select the first suggestion on blur after typing something', async () => {
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
      userEvent.click(input);
      expect(getInputValue()).toBe('');

      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      fireEvent.blur(input);
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
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
      userEvent.click(input);
      expect(getInputValue()).toBe('');

      await userEvent.type(input, 'a');
      expect(getInputValue()).toBe('a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Carrots');

      userEvent.keyboard('{enter}');

      expect(getInputValue()).toBe('Carrots');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Carrots',
        value: 'carrots',
      });
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
      userEvent.click(input);
      await userEvent.type(input, 'a');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'a' });
      changeHandler.mockClear();

      userEvent.keyboard('{arrowdown}');
      expect(getInputValue()).toBe('Bananas');

      userEvent.keyboard('{arrowdown}');
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
    });
  });
});

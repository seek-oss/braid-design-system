import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidProvider, Autosuggest } from '..';
import { wireframe } from '../../themes';
import { AutosuggestProps } from './Autosuggest';

afterEach(cleanup);

function renderAutosuggest<Value>({
  value: initialValue,
  suggestions,
  automaticSelection,
  onFocus,
  onBlur,
}: Pick<
  AutosuggestProps<Value>,
  'value' | 'suggestions' | 'automaticSelection' | 'onFocus' | 'onBlur'
>) {
  const changeHandler = jest.fn();
  const TestCase = () => {
    const [value, setValue] = useState(initialValue);

    return (
      <BraidProvider theme={wireframe}>
        <Autosuggest
          id="fruit"
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
      </BraidProvider>
    );
  };

  const { getByRole, queryByLabelText, queryByText } = render(<TestCase />);
  const input = getByRole('textbox');
  const getInputValue = () => input.getAttribute('value');

  return {
    input,
    getInputValue,
    changeHandler,
    queryByLabelText,
    queryByText,
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
    expect(queryByLabelText('Clear')).not.toBeInTheDocument();

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

  it('should select suggestions on click', () => {
    const {
      input,
      changeHandler,
      queryByLabelText,
      getInputValue,
    } = renderAutosuggest({
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
    if (suggestion) {
      fireEvent.click(suggestion);
    }

    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
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

  describe('keyboard access', () => {
    it("shouldn't select anything on enter if the user hasn't navigated the list", () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
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
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
    });

    it('should select a suggestion on enter after navigating the list', () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
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
      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Apples');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Bananas');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Carrots');

      fireEvent.keyDown(input, { key: 'ArrowUp' });
      expect(getInputValue()).toBe('Bananas');

      // Ensure no changes have been committed yet
      expect(changeHandler).not.toHaveBeenCalled();

      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Bananas',
        value: 'bananas',
      });
    });

    it('should first clear the suggestion preview and then reset the input when pressing escape', async () => {
      const {
        input,
        changeHandler,
        queryByLabelText,
        getInputValue,
      } = renderAutosuggest({
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

      await userEvent.type(input, 'app', { allAtOnce: true });
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: 'app' });
      changeHandler.mockClear();

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Apples');

      fireEvent.keyDown(input, { key: 'Escape' });
      expect(changeHandler).not.toHaveBeenCalled();
      expect(getInputValue()).toBe('app');

      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed

      fireEvent.keyDown(input, { key: 'Escape' });
      expect(getInputValue()).toBe('');
      expect(changeHandler).toHaveBeenNthCalledWith(1, { text: '' });
      expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has re-opened

      fireEvent.keyDown(input, { key: 'Escape' });
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed again
    });

    it('should select a suggestion on enter after navigating a single suggestion', () => {
      const { input, changeHandler, getInputValue } = renderAutosuggest({
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

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Apples');

      fireEvent.keyDown(input, { key: 'Enter' });

      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
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

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Apples');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Bananas');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Broccoli');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Carrots');

      fireEvent.keyDown(input, { key: 'ArrowUp' });
      expect(getInputValue()).toBe('Broccoli');

      fireEvent.keyDown(input, { key: 'Enter' });
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
    fireEvent.keyDown(input, { key: 'ArrowDown' });
    fireEvent.keyDown(input, { key: 'Enter' });
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
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
      fireEvent.keyDown(input, { key: 'Enter' });
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

      fireEvent.keyDown(input, { key: 'Enter' });
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

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Apples');

      fireEvent.keyDown(input, { key: 'Enter' });
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

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Bananas');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Carrots');

      fireEvent.keyDown(input, { key: 'Enter' });

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

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Bananas');

      fireEvent.keyDown(input, { key: 'ArrowDown' });
      expect(getInputValue()).toBe('Carrots');

      // Wait a bit because we ignore blurs that happens too quickly
      // after pressing arrow down (to fix a bug in Chrome + VoiceOver)
      await new Promise(resolve => setTimeout(resolve, 300));

      fireEvent.blur(input);
      expect(getInputValue()).toBe('Carrots');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Carrots',
        value: 'carrots',
      });
    });
  });
});

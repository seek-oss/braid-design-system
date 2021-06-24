import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _regeneratorRuntime from '@babel/runtime/regenerator';
import '@testing-library/jest-dom/extend-expect';
import React, { useState, useRef, useEffect } from 'react';
import { render, act, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider, Autosuggest } from '..';

function renderAutosuggest(_ref) {
  const initialValue = _ref.value,
    suggestionsProp = _ref.suggestions,
    automaticSelection = _ref.automaticSelection,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur;
  const changeHandler = jest.fn();
  let suggestions = [];

  let _setSuggestions = function setSuggestions() {
    /* */
  };

  const TestCase = function TestCase() {
    const _useState = useState(initialValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

    const _useState3 = useState(function () {
      return suggestionsProp;
    });

    const _useState4 = _slicedToArray(_useState3, 2);

    suggestions = _useState4[0];
    _setSuggestions = _useState4[1];
    return /* #__PURE__*/ _jsx(
      BraidTestProvider,
      {},
      void 0,
      /* #__PURE__*/ _jsx(Autosuggest, {
        id: 'fruit',
        label: 'Fruit',
        automaticSelection,
        value,
        onChange: function onChange() {
          setValue.apply(void 0, arguments);
          changeHandler.apply(void 0, arguments);
        },
        suggestions,
        onFocus,
        onBlur,
      }),
    );
  };

  const _render = render(/* #__PURE__*/ _jsx(TestCase, {})),
    getByRole = _render.getByRole,
    queryByLabelText = _render.queryByLabelText,
    queryByText = _render.queryByText,
    getByTestId = _render.getByTestId;

  const input = getByRole('combobox');

  const getInputValue = function getInputValue() {
    return input.getAttribute('value');
  };

  return {
    input,
    getInputValue,
    changeHandler,
    queryByLabelText,
    queryByText,
    getByTestId,
    setSuggestions: function setSuggestions(x) {
      return act(function () {
        return _setSuggestions(x);
      });
    },
  };
}

describe('Autosuggest', function () {
  it('should toggle suggestion visibility on focus and blur', function () {
    const _renderAutosuggest = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
          },
        ],
      }),
      input = _renderAutosuggest.input,
      queryByLabelText = _renderAutosuggest.queryByLabelText;

    expect(queryByLabelText('Apples')).toBe(null);
    userEvent.click(input);
    expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure no clear buttons are present

    expect(queryByLabelText('Clear suggestion')).not.toBeInTheDocument();
    fireEvent.blur(input);
    expect(queryByLabelText('Apples')).toBe(null);
  });
  it('should show text highlights', function () {
    const _renderAutosuggest2 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
          },
        ],
      }),
      input = _renderAutosuggest2.input,
      queryByText = _renderAutosuggest2.queryByText;

    userEvent.click(input);
    const highlight = queryByText('Appl');
    expect(highlight && highlight.tagName).toBe('STRONG');
  });
  it('should support suggestions as a function', function () {
    const _renderAutosuggest3 = renderAutosuggest({
        value: {
          text: 'Apples',
        },
        suggestions: function suggestions(_ref2) {
          const text = _ref2.text;
          return [
            {
              text,
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 6,
                },
              ],
            },
          ];
        },
      }),
      input = _renderAutosuggest3.input,
      queryByText = _renderAutosuggest3.queryByText;

    userEvent.click(input);
    const highlight = queryByText('Apples');
    expect(highlight && highlight.tagName).toBe('STRONG');
  });
  it('should select suggestions on click', function () {
    const _renderAutosuggest4 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
          },
        ],
      }),
      input = _renderAutosuggest4.input,
      changeHandler = _renderAutosuggest4.changeHandler,
      queryByLabelText = _renderAutosuggest4.queryByLabelText,
      getInputValue = _renderAutosuggest4.getInputValue;

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
  it('should support custom suggestion labels', function () {
    const _renderAutosuggest5 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            label: 'CUSTOM LABEL',
            value: 'apples',
          },
        ],
      }),
      input = _renderAutosuggest5.input,
      changeHandler = _renderAutosuggest5.changeHandler,
      queryByLabelText = _renderAutosuggest5.queryByLabelText,
      getInputValue = _renderAutosuggest5.getInputValue;

    userEvent.click(input);
    expect(getInputValue()).toBe('');
    expect(changeHandler).not.toHaveBeenCalled();
    const suggestion = queryByLabelText('CUSTOM LABEL');

    if (!suggestion) {
      throw new Error('Suggestion not found');
    }

    fireEvent.click(suggestion);
    expect(getInputValue()).toBe('Apples');
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
  });
  it(
    'should keep the menu open when a selection is made if "hideSuggestionsOnSelection" is false',
    /* #__PURE__*/ _asyncToGenerator(
      /* #__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        let TestCase,
          _render2,
          getByRole,
          queryByLabelText,
          input,
          getInputValue,
          suggestion;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                TestCase = function TestCase() {
                  const initialValue = 'appl';

                  const _useState5 = useState({
                      text: initialValue,
                    }),
                    _useState6 = _slicedToArray(_useState5, 2),
                    value = _useState6[0],
                    setValue = _useState6[1];

                  return /* #__PURE__*/ _jsx(
                    BraidTestProvider,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(Autosuggest, {
                      id: 'fruit',
                      label: 'Fruit',
                      value,
                      onChange: function onChange(newValue) {
                        setValue(
                          newValue.value
                            ? {
                                text: '',
                              }
                            : newValue,
                        );
                      },
                      hideSuggestionsOnSelection: false,
                      suggestions: [
                        {
                          text: 'Apples',
                          value: 'apples',
                        },
                      ],
                    }),
                  );
                };

                (_render2 = render(/* #__PURE__*/ _jsx(TestCase, {}))),
                  (getByRole = _render2.getByRole),
                  (queryByLabelText = _render2.queryByLabelText);
                input = getByRole('combobox');

                getInputValue = function getInputValue() {
                  return input.getAttribute('value');
                };

                userEvent.click(input);
                suggestion = queryByLabelText('Apples');

                if (suggestion) {
                  fireEvent.click(suggestion);
                }

                expect(getInputValue()).toBe('');
                expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      }),
    ),
  );
  it('should pass through focus and blur events', function () {
    const focusHandler = jest.fn();
    const blurHandler = jest.fn();

    const _renderAutosuggest6 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
          },
        ],
        onFocus: focusHandler,
        onBlur: blurHandler,
      }),
      input = _renderAutosuggest6.input;

    expect(focusHandler).not.toHaveBeenCalled();
    expect(blurHandler).not.toHaveBeenCalled();
    userEvent.click(input);
    expect(focusHandler).toHaveBeenCalledWith();
    fireEvent.blur(input);
    expect(blurHandler).toHaveBeenCalledWith();
  });
  it("should call 'onClear' handler when clearing suggestions", function () {
    const clearHandler = jest.fn();

    const _renderAutosuggest7 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            text: 'Apples',
            value: 'apples',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
            onClear: clearHandler,
            clearLabel: 'Clear "Apples"',
          },
          {
            text: 'Bananas',
            value: 'bananas',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
            onClear: clearHandler,
            clearLabel: 'Clear "Bananas"',
          },
          {
            text: 'Carrots',
            value: 'carrots',
            highlights: [
              {
                start: 0,
                end: 4,
              },
            ],
          },
        ],
      }),
      input = _renderAutosuggest7.input,
      queryByLabelText = _renderAutosuggest7.queryByLabelText,
      changeHandler = _renderAutosuggest7.changeHandler;

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
  it('should forward refs', function () {
    const TestCase = function TestCase() {
      const inputRef = useRef(null);
      useEffect(function () {
        if (inputRef.current) {
          inputRef.current.setAttribute('data-foo', 'bar');
        }
      }, []);
      return /* #__PURE__*/ _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ React.createElement(Autosuggest, {
          id: 'id',
          label: 'Label',
          value: {
            text: '',
          },
          onChange: function onChange() {},
          suggestions: [],
          ref: inputRef,
        }),
      );
    };

    const _render3 = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render3.getByRole;

    const input = getByRole('combobox');
    expect(input.getAttribute('data-foo')).toBe('bar');
  });
  describe('ARIA labels', function () {
    it('should associate the field label with the input', function () {
      const _renderAutosuggest8 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
            },
          ],
        }),
        queryByLabelText = _renderAutosuggest8.queryByLabelText,
        input = _renderAutosuggest8.input;

      const result = queryByLabelText('Fruit');
      expect(result).toBe(input);
    });
    it('should support standard suggestions', function () {
      const _renderAutosuggest9 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
            },
          ],
        }),
        input = _renderAutosuggest9.input,
        queryByLabelText = _renderAutosuggest9.queryByLabelText;

      userEvent.click(input);
      expect(queryByLabelText('Apples')).toBeInTheDocument();
    });
    it('should support grouped suggestions', function () {
      const _renderAutosuggest10 = renderAutosuggest({
          value: {
            text: '',
          },
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
        }),
        input = _renderAutosuggest10.input,
        queryByLabelText = _renderAutosuggest10.queryByLabelText,
        getByTestId = _renderAutosuggest10.getByTestId;

      userEvent.click(input);
      expect(queryByLabelText('Apples (Fruit)')).toBeInTheDocument();
      expect(queryByLabelText('Carrots (Vegetables)')).toBeInTheDocument();
      expect(queryByLabelText('Ice cream (Dessert)')).toBeInTheDocument();
      expect(getByTestId('group-heading-Fruit')).toBeInTheDocument();
      expect(getByTestId('group-heading-Vegetables')).toBeInTheDocument();
      expect(getByTestId('group-heading-Dessert')).toBeInTheDocument();
    });
    it('should support suggestions with descriptions', function () {
      const _renderAutosuggest11 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              description: 'Juicy and delicious',
              value: 'apples',
            },
          ],
        }),
        input = _renderAutosuggest11.input,
        queryByLabelText = _renderAutosuggest11.queryByLabelText;

      userEvent.click(input);
      expect(
        queryByLabelText('Apples - Juicy and delicious'),
      ).toBeInTheDocument();
    });
    it('should support grouped suggestions with descriptions', function () {
      const _renderAutosuggest12 = renderAutosuggest({
          value: {
            text: '',
          },
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
        }),
        input = _renderAutosuggest12.input,
        queryByLabelText = _renderAutosuggest12.queryByLabelText;

      userEvent.click(input);
      expect(
        queryByLabelText('Apples - Juicy and delicious (Fruit)'),
      ).toBeInTheDocument();
    });
  });
  describe('keyboard access', function () {
    it("shouldn't select anything and close the list on enter if the user hasn't navigated the list", function () {
      const _renderAutosuggest13 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest13.input,
        changeHandler = _renderAutosuggest13.changeHandler,
        getInputValue = _renderAutosuggest13.getInputValue,
        queryByLabelText = _renderAutosuggest13.queryByLabelText;

      userEvent.click(input);
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
    });
    it('should select a suggestion on enter after navigating the list', function () {
      const _renderAutosuggest14 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              description: 'Juicy and delicious',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              description: 'High in potassium',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Carrots',
              description: 'Orange and crunchy',
              value: 'carrots',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest14.input,
        changeHandler = _renderAutosuggest14.changeHandler,
        getInputValue = _renderAutosuggest14.getInputValue;

      expect(getInputValue()).toBe('');
      userEvent.click(input);
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Apples');
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Bananas');
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Carrots');
      fireEvent.keyDown(input, {
        key: 'ArrowUp',
      });
      expect(getInputValue()).toBe('Bananas'); // Ensure no changes have been committed yet

      expect(changeHandler).not.toHaveBeenCalled();
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
      expect(getInputValue()).toBe('Bananas');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Bananas',
        value: 'bananas',
      });
    });
    it(
      'should first clear the suggestion preview and then reset the input when pressing escape',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee2() {
          let _renderAutosuggest15,
            input,
            changeHandler,
            queryByLabelText,
            getInputValue;

          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  (_renderAutosuggest15 = renderAutosuggest({
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Bananas',
                        value: 'bananas',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Carrots',
                        value: 'carrots',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest15.input),
                    (changeHandler = _renderAutosuggest15.changeHandler),
                    (queryByLabelText = _renderAutosuggest15.queryByLabelText),
                    (getInputValue = _renderAutosuggest15.getInputValue);
                  userEvent.click(input);
                  _context2.next = 4;
                  return userEvent.paste(input, 'app');

                case 4:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'app',
                  });
                  changeHandler.mockClear();
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Apples');
                  fireEvent.keyDown(input, {
                    key: 'Escape',
                  });
                  expect(changeHandler).not.toHaveBeenCalled();
                  expect(getInputValue()).toBe('app');
                  expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed

                  fireEvent.keyDown(input, {
                    key: 'Escape',
                  });
                  expect(getInputValue()).toBe('');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: '',
                  });
                  expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has re-opened

                  fireEvent.keyDown(input, {
                    key: 'Escape',
                  });
                  expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed again

                case 18:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }),
      ),
    );
    it('should select a suggestion on enter after navigating a single suggestion', function () {
      const _renderAutosuggest16 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest16.input,
        changeHandler = _renderAutosuggest16.changeHandler,
        getInputValue = _renderAutosuggest16.getInputValue,
        queryByLabelText = _renderAutosuggest16.queryByLabelText;

      userEvent.click(input);
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Apples');
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
      expect(getInputValue()).toBe('Apples');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Apples',
        value: 'apples',
      });
      expect(queryByLabelText('Apples')).toBe(null); // Ensure menu has closed
    });
    it(
      'should keep the menu open on selection if "hideSuggestionsOnSelection" is false',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee3() {
          let TestCase,
            _render4,
            getByRole,
            queryByLabelText,
            input,
            getInputValue;

          return _regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch ((_context3.prev = _context3.next)) {
                case 0:
                  TestCase = function TestCase() {
                    const initialValue = 'appl';

                    const _useState7 = useState({
                        text: initialValue,
                      }),
                      _useState8 = _slicedToArray(_useState7, 2),
                      value = _useState8[0],
                      setValue = _useState8[1];

                    return /* #__PURE__*/ _jsx(
                      BraidTestProvider,
                      {},
                      void 0,
                      /* #__PURE__*/ _jsx(Autosuggest, {
                        id: 'fruit',
                        label: 'Fruit',
                        value,
                        onChange: function onChange(newValue) {
                          setValue(
                            newValue.value
                              ? {
                                  text: '',
                                }
                              : newValue,
                          );
                        },
                        hideSuggestionsOnSelection: false,
                        suggestions: [
                          {
                            text: 'Apples',
                            value: 'apples',
                          },
                        ],
                      }),
                    );
                  };

                  (_render4 = render(/* #__PURE__*/ _jsx(TestCase, {}))),
                    (getByRole = _render4.getByRole),
                    (queryByLabelText = _render4.queryByLabelText);
                  input = getByRole('combobox');

                  getInputValue = function getInputValue() {
                    return input.getAttribute('value');
                  };

                  userEvent.click(input);
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Apples');
                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(getInputValue()).toBe('');
                  expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu is still open

                case 10:
                case 'end':
                  return _context3.stop();
              }
            }
          }, _callee3);
        }),
      ),
    );
    it('should select a grouped suggestion on enter after navigating the list', function () {
      const _renderAutosuggest17 = renderAutosuggest({
          value: {
            text: '',
          },
          suggestions: [
            {
              label: 'Fruit',
              suggestions: [
                {
                  text: 'Apples',
                  value: 'apples',
                  highlights: [
                    {
                      start: 0,
                      end: 4,
                    },
                  ],
                },
                {
                  text: 'Bananas',
                  value: 'bananas',
                  highlights: [
                    {
                      start: 0,
                      end: 4,
                    },
                  ],
                },
              ],
            },
            {
              label: 'Vegetables',
              suggestions: [
                {
                  text: 'Broccoli',
                  value: 'broccoli',
                  highlights: [
                    {
                      start: 0,
                      end: 4,
                    },
                  ],
                },
                {
                  text: 'Carrots',
                  value: 'carrots',
                  highlights: [
                    {
                      start: 0,
                      end: 4,
                    },
                  ],
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest17.input,
        changeHandler = _renderAutosuggest17.changeHandler,
        getInputValue = _renderAutosuggest17.getInputValue;

      userEvent.click(input);
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Apples');
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Bananas');
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Broccoli');
      fireEvent.keyDown(input, {
        key: 'ArrowDown',
      });
      expect(getInputValue()).toBe('Carrots');
      fireEvent.keyDown(input, {
        key: 'ArrowUp',
      });
      expect(getInputValue()).toBe('Broccoli');
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
      expect(getInputValue()).toBe('Broccoli');
      expect(changeHandler).toHaveBeenNthCalledWith(1, {
        text: 'Broccoli',
        value: 'broccoli',
      });
    });
  });
  it('should select a suggestion on enter after navigating to a single grouped suggestion', function () {
    const _renderAutosuggest18 = renderAutosuggest({
        value: {
          text: '',
        },
        suggestions: [
          {
            label: 'Fruit',
            suggestions: [
              {
                text: 'Apples',
                value: 'apples',
                highlights: [
                  {
                    start: 0,
                    end: 4,
                  },
                ],
              },
            ],
          },
        ],
      }),
      input = _renderAutosuggest18.input,
      changeHandler = _renderAutosuggest18.changeHandler;

    userEvent.click(input);
    fireEvent.keyDown(input, {
      key: 'ArrowDown',
    });
    fireEvent.keyDown(input, {
      key: 'Enter',
    });
    expect(changeHandler).toHaveBeenNthCalledWith(1, {
      text: 'Apples',
      value: 'apples',
    });
  });
  it('should support messages', function () {
    const TestCase = function TestCase() {
      return /* #__PURE__*/ _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ _jsx(Autosuggest, {
          id: 'fruit',
          label: 'Fruit',
          value: {
            text: '',
          },
          onChange: function onChange() {},
          hideSuggestionsOnSelection: false,
          suggestions: {
            message: 'No suggestions',
          },
        }),
      );
    };

    const _render5 = render(/* #__PURE__*/ _jsx(TestCase, {})),
      getByRole = _render5.getByRole,
      queryByText = _render5.queryByText;

    expect(queryByText('No suggestions')).not.toBeInTheDocument();
    const input = getByRole('combobox');
    userEvent.click(input);
    expect(queryByText('No suggestions')).toBeInTheDocument();
    fireEvent.blur(input);
    expect(queryByText('No suggestions')).not.toBeInTheDocument();
  });
  describe('automaticSelection', function () {
    it("shouldn't select anything on enter if the user hasn't typed anything", function () {
      const _renderAutosuggest19 = renderAutosuggest({
          automaticSelection: true,
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Carrots',
              value: 'carrots',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest19.input,
        changeHandler = _renderAutosuggest19.changeHandler,
        getInputValue = _renderAutosuggest19.getInputValue;

      userEvent.click(input);
      fireEvent.keyDown(input, {
        key: 'Enter',
      });
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
    });
    it("shouldn't select anything on blur if the user hasn't typed anything", function () {
      const _renderAutosuggest20 = renderAutosuggest({
          automaticSelection: true,
          value: {
            text: '',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Carrots',
              value: 'carrots',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest20.input,
        changeHandler = _renderAutosuggest20.changeHandler,
        getInputValue = _renderAutosuggest20.getInputValue;

      userEvent.click(input);
      fireEvent.blur(input);
      expect(getInputValue()).toBe('');
      expect(changeHandler).not.toHaveBeenCalled();
    });
    it("shouldn't select anything on blur if the field is populated and the user hasn't typed anything", function () {
      const _renderAutosuggest21 = renderAutosuggest({
          automaticSelection: true,
          value: {
            text: 'I already typed something',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Carrots',
              value: 'carrots',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest21.input,
        changeHandler = _renderAutosuggest21.changeHandler,
        getInputValue = _renderAutosuggest21.getInputValue;

      userEvent.click(input);
      fireEvent.blur(input);
      expect(getInputValue()).toBe('I already typed something');
      expect(changeHandler).not.toHaveBeenCalled();
    });
    it(
      "shouldn't select anything on blur if the suggestions are hidden",
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee4() {
          let _renderAutosuggest22,
            input,
            changeHandler,
            getInputValue,
            queryByLabelText;

          return _regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  (_renderAutosuggest22 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Bananas',
                        value: 'bananas',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Carrots',
                        value: 'carrots',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest22.input),
                    (changeHandler = _renderAutosuggest22.changeHandler),
                    (getInputValue = _renderAutosuggest22.getInputValue),
                    (queryByLabelText = _renderAutosuggest22.queryByLabelText);
                  expect(getInputValue()).toBe('');
                  userEvent.click(input);
                  userEvent.type(input, 'B');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'B',
                  });
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Bananas');
                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(getInputValue()).toBe('Bananas');
                  expect(changeHandler).toHaveBeenNthCalledWith(2, {
                    text: 'Bananas',
                    value: 'bananas',
                  }); // Wait a bit because we ignore blurs that happens too quickly
                  // after pressing arrow down (to fix a bug in Chrome + VoiceOver)

                  _context4.next = 12;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 300);
                  });

                case 12:
                  // Ensure suggestions are hidden
                  expect(queryByLabelText('Apples')).toBe(null);
                  fireEvent.blur(input); // Ensure value hasn't changed

                  expect(getInputValue()).toBe('Bananas');
                  expect(changeHandler).toHaveBeenCalledTimes(2);

                case 16:
                case 'end':
                  return _context4.stop();
              }
            }
          }, _callee4);
        }),
      ),
    );
    it("shouldn't select anything on blur if the user clears the field", function () {
      const _renderAutosuggest23 = renderAutosuggest({
          automaticSelection: true,
          value: {
            text: 'abc',
          },
          suggestions: [
            {
              text: 'Apples',
              value: 'apples',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Bananas',
              value: 'bananas',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
            {
              text: 'Carrots',
              value: 'carrots',
              highlights: [
                {
                  start: 0,
                  end: 4,
                },
              ],
            },
          ],
        }),
        input = _renderAutosuggest23.input,
        changeHandler = _renderAutosuggest23.changeHandler,
        getInputValue = _renderAutosuggest23.getInputValue;

      fireEvent.input(input, {
        target: {
          value: '',
        },
      });
      fireEvent.blur(input);
      expect(getInputValue()).toBe('');
      expect(changeHandler).toHaveBeenCalledWith({
        text: '',
      });
    });
    it(
      'should select the first suggestion on enter after typing something',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee5() {
          let _renderAutosuggest24, input, changeHandler, getInputValue;

          return _regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch ((_context5.prev = _context5.next)) {
                case 0:
                  (_renderAutosuggest24 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest24.input),
                    (changeHandler = _renderAutosuggest24.changeHandler),
                    (getInputValue = _renderAutosuggest24.getInputValue);
                  userEvent.click(input);
                  expect(getInputValue()).toBe('');
                  _context5.next = 5;
                  return userEvent.type(input, 'a');

                case 5:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear();
                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(getInputValue()).toBe('Apples');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Apples',
                    value: 'apples',
                  });

                case 10:
                case 'end':
                  return _context5.stop();
              }
            }
          }, _callee5);
        }),
      ),
    );
    it(
      'should select the first suggestion on enter after typing something when the suggestions are async',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee6() {
          let _renderAutosuggest25,
            input,
            changeHandler,
            getInputValue,
            setSuggestions,
            queryByLabelText;

          return _regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch ((_context6.prev = _context6.next)) {
                case 0:
                  (_renderAutosuggest25 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [],
                  })),
                    (input = _renderAutosuggest25.input),
                    (changeHandler = _renderAutosuggest25.changeHandler),
                    (getInputValue = _renderAutosuggest25.getInputValue),
                    (setSuggestions = _renderAutosuggest25.setSuggestions),
                    (queryByLabelText = _renderAutosuggest25.queryByLabelText);
                  userEvent.click(input);
                  expect(getInputValue()).toBe('');
                  _context6.next = 5;
                  return userEvent.type(input, 'a');

                case 5:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear(); // Simulate suggestions coming back from an API

                  _context6.next = 9;
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      setSuggestions([
                        {
                          text: 'Apples',
                          value: 'apples',
                          highlights: [
                            {
                              start: 0,
                              end: 4,
                            },
                          ],
                        },
                      ]);
                      resolve();
                    }, 100);
                  });

                case 9:
                  expect(queryByLabelText('Apples')).toBeInTheDocument(); // Ensure menu has opened

                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(queryByLabelText('Apples')).not.toBeInTheDocument(); // Ensure menu has closed

                  expect(getInputValue()).toBe('Apples');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Apples',
                    value: 'apples',
                  });

                case 14:
                case 'end':
                  return _context6.stop();
              }
            }
          }, _callee6);
        }),
      ),
    );
    it(
      'should allow you to navigate a suggestions list with a single item',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee7() {
          let _renderAutosuggest26, input, changeHandler, getInputValue;

          return _regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch ((_context7.prev = _context7.next)) {
                case 0:
                  (_renderAutosuggest26 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest26.input),
                    (changeHandler = _renderAutosuggest26.changeHandler),
                    (getInputValue = _renderAutosuggest26.getInputValue);
                  userEvent.click(input);
                  expect(getInputValue()).toBe('');
                  _context7.next = 5;
                  return userEvent.type(input, 'a');

                case 5:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear();
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Apples');
                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(getInputValue()).toBe('Apples');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Apples',
                    value: 'apples',
                  });

                case 12:
                case 'end':
                  return _context7.stop();
              }
            }
          }, _callee7);
        }),
      ),
    );
    it(
      'should select the first suggestion on blur after typing something',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee8() {
          let _renderAutosuggest27, input, changeHandler, getInputValue;

          return _regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch ((_context8.prev = _context8.next)) {
                case 0:
                  (_renderAutosuggest27 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Bananas',
                        value: 'bananas',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Carrots',
                        value: 'carrots',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest27.input),
                    (changeHandler = _renderAutosuggest27.changeHandler),
                    (getInputValue = _renderAutosuggest27.getInputValue);
                  userEvent.click(input);
                  expect(getInputValue()).toBe('');
                  _context8.next = 5;
                  return userEvent.type(input, 'a');

                case 5:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear();
                  fireEvent.blur(input);
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Apples',
                    value: 'apples',
                  });

                case 9:
                case 'end':
                  return _context8.stop();
              }
            }
          }, _callee8);
        }),
      ),
    );
    it(
      'should initially highlight the first suggestion when navigating the list',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee9() {
          let _renderAutosuggest28, input, changeHandler, getInputValue;

          return _regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch ((_context9.prev = _context9.next)) {
                case 0:
                  (_renderAutosuggest28 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Bananas',
                        value: 'bananas',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Carrots',
                        value: 'carrots',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest28.input),
                    (changeHandler = _renderAutosuggest28.changeHandler),
                    (getInputValue = _renderAutosuggest28.getInputValue);
                  userEvent.click(input);
                  expect(getInputValue()).toBe('');
                  _context9.next = 5;
                  return userEvent.type(input, 'a');

                case 5:
                  expect(getInputValue()).toBe('a');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear();
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Bananas');
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Carrots');
                  fireEvent.keyDown(input, {
                    key: 'Enter',
                  });
                  expect(getInputValue()).toBe('Carrots');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Carrots',
                    value: 'carrots',
                  });

                case 15:
                case 'end':
                  return _context9.stop();
              }
            }
          }, _callee9);
        }),
      ),
    );
    it(
      'should select the highlighted suggestion on blur after navigating the list',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee10() {
          let _renderAutosuggest29, input, changeHandler, getInputValue;

          return _regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch ((_context10.prev = _context10.next)) {
                case 0:
                  (_renderAutosuggest29 = renderAutosuggest({
                    automaticSelection: true,
                    value: {
                      text: '',
                    },
                    suggestions: [
                      {
                        text: 'Apples',
                        value: 'apples',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Bananas',
                        value: 'bananas',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                      {
                        text: 'Carrots',
                        value: 'carrots',
                        highlights: [
                          {
                            start: 0,
                            end: 4,
                          },
                        ],
                      },
                    ],
                  })),
                    (input = _renderAutosuggest29.input),
                    (changeHandler = _renderAutosuggest29.changeHandler),
                    (getInputValue = _renderAutosuggest29.getInputValue);
                  userEvent.click(input);
                  _context10.next = 4;
                  return userEvent.type(input, 'a');

                case 4:
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'a',
                  });
                  changeHandler.mockClear();
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Bananas');
                  fireEvent.keyDown(input, {
                    key: 'ArrowDown',
                  });
                  expect(getInputValue()).toBe('Carrots'); // Wait a bit because we ignore blurs that happens too quickly
                  // after pressing arrow down (to fix a bug in Chrome + VoiceOver)

                  _context10.next = 12;
                  return new Promise(function (resolve) {
                    return setTimeout(resolve, 300);
                  });

                case 12:
                  fireEvent.blur(input);
                  expect(getInputValue()).toBe('Carrots');
                  expect(changeHandler).toHaveBeenNthCalledWith(1, {
                    text: 'Carrots',
                    value: 'carrots',
                  });

                case 15:
                case 'end':
                  return _context10.stop();
              }
            }
          }, _callee10);
        }),
      ),
    );
  });
});

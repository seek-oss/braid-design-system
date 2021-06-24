import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';
import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['suggestion', 'highlighted', 'selected', 'onHover'],
  _excluded2 = [
    'id',
    'value',
    'suggestions',
    'onChange',
    'automaticSelection',
    'showMobileBackdrop',
    'scrollToTopOnMobile',
    'hideSuggestionsOnSelection',
    'onFocus',
    'onBlur',
    'placeholder',
    'type',
    'onClear',
    'translations',
  ];

function ownKeys(object, enumerableOnly) {
  const keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    let symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (let i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  let it =
    (typeof Symbol !== 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (!it) {
    if (
      Array.isArray(o) ||
      (it = _unsupportedIterableToArray(o)) ||
      (allowArrayLike && o && typeof o.length === 'number')
    ) {
      if (it) {
        o = it;
      }
      let i = 0;
      const F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) {
            return { done: true };
          }
          return { done: false, value: o[i++] };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F,
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
    );
  }
  let normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      const step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it.return != null) {
          it.return();
        }
      } finally {
        if (didErr) {
          throw err;
        }
      }
    },
  };
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) {
    return;
  }
  if (typeof o === 'string') {
    return _arrayLikeToArray(o, minLen);
  }
  let n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) {
    n = o.constructor.name;
  }
  if (n === 'Map' || n === 'Set') {
    return Array.from(o);
  }
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
    return _arrayLikeToArray(o, minLen);
  }
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) {
    len = arr.length;
  }
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

import React, {
  Fragment,
  useRef,
  useReducer,
  useCallback,
  useEffect,
  forwardRef,
} from 'react';
import parseHighlights from 'autosuggest-highlight/parse';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Strong } from '../Strong/Strong';
import { HiddenVisually } from '../HiddenVisually/HiddenVisually';
import { Announcement } from '../private/Announcement/Announcement';
import { Field } from '../private/Field/Field';
import { ClearButton } from '../iconButtons/ClearButton/ClearButton';
import { touchableText, useText } from '../../hooks/typography';
import { getNextIndex } from '../private/getNextIndex';
import { normalizeKey } from '../private/normalizeKey';
import { ClearField } from '../private/Field/ClearField';
import { smoothScroll } from '../private/smoothScroll';
import { useScrollIntoView } from './useScrollIntoView';
import { useBreakpoint } from '../useBreakpoint/useBreakpoint';
import { RemoveScroll } from 'react-remove-scroll';
import { createAccessbilityProps, getItemId } from './createAccessbilityProps';
import { autosuggest } from '../../translations/en';
import * as styles from './Autosuggest.css';
// Action type IDs (allows action type names to be minified)
const INPUT_FOCUS = 0;
const INPUT_BLUR = 1;
const INPUT_CHANGE = 2;
const INPUT_ARROW_UP = 3;
const INPUT_ARROW_DOWN = 4;
const INPUT_ESCAPE = 5;
const INPUT_ENTER = 6;
const SUGGESTION_MOUSE_CLICK = 7;
const SUGGESTION_MOUSE_ENTER = 8;
const HAS_SUGGESTIONS_CHANGED = 9;

function SuggestionItem(_ref) {
  let _suggestion$label;

  const suggestion = _ref.suggestion,
    highlighted = _ref.highlighted,
    selected = _ref.selected,
    onHover = _ref.onHover,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const _suggestion$highlight = suggestion.highlights,
    highlights = _suggestion$highlight === void 0 ? [] : _suggestion$highlight,
    onClear = suggestion.onClear,
    clearLabel = suggestion.clearLabel;
  const label =
    (_suggestion$label = suggestion.label) !== null &&
    _suggestion$label !== void 0
      ? _suggestion$label
      : suggestion.text;
  const suggestionParts = parseHighlights(
    label,
    highlights.map(function (_ref2) {
      const start = _ref2.start,
        end = _ref2.end;
      return [start, end];
    }),
  );
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: 'li',
        cursor: 'pointer',
        onMouseDown: function onMouseDown(event) {
          // Without this `onClick` will not fire due to the input blur event
          event.preventDefault();
        },
        onMouseMove: onHover,
        onTouchStart: onHover,
      },
      restProps,
    ),
    /* #__PURE__*/ _jsx(
      Box,
      {
        component: 'span',
        display: 'flex',
        justifyContent: 'spaceBetween',
        background: highlighted ? 'selection' : undefined,
        paddingX: 'small',
        paddingRight: onClear ? 'none' : undefined,
      },
      void 0,
      /* #__PURE__*/ _jsx(
        Box,
        {
          className: touchableText.standard,
        },
        void 0,
        /* #__PURE__*/ _jsx(
          Text,
          {
            baseline: false,
          },
          void 0,
          suggestionParts.map(function (_ref3, index) {
            const highlight = _ref3.highlight,
              text = _ref3.text;
            return selected || highlight
              ? /* #__PURE__*/ _jsx(Strong, {}, index, text)
              : /* #__PURE__*/ _jsx(Fragment, {}, index, text);
          }),
        ),
        suggestion.description
          ? /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'small',
                tone: 'secondary',
                baseline: false,
              },
              void 0,
              suggestion.description,
            )
          : null,
      ),
      typeof onClear === 'function'
        ? /* #__PURE__*/ _jsx(
            Box,
            {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 'touchable',
              height: 'touchable',
            },
            void 0,
            /* #__PURE__*/ _jsx(ClearButton, {
              label: clearLabel || 'Clear suggestion',
              onClick: function onClick(event) {
                event.preventDefault();
                event.stopPropagation();
                onClear(valueFromSuggestion(suggestion));
              },
            }),
          )
        : null,
    ),
  );
}

SuggestionItem.displayName = 'SuggestionItem';

function GroupHeading(_ref4) {
  const children = _ref4.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      paddingX: 'small',
      borderRadius: 'standard',
      className: [
        styles.groupHeading,
        touchableText.xsmall,
        useText({
          size: 'xsmall',
          baseline: false,
          weight: 'strong',
          tone: 'formAccent',
        }),
      ],
      'data-testid':
        process.env.NODE_ENV !== 'production'
          ? 'group-heading-'.concat(children)
          : undefined,
    },
    void 0,
    children,
  );
}

GroupHeading.displayName = 'GroupHeading';

function normaliseSuggestions(suggestions) {
  let index = 0;
  const normalisedSuggestions = [];
  const groupHeadingIndexes = new Map();
  const groupHeadingForSuggestion = new Map();

  let _iterator = _createForOfIteratorHelper(suggestions),
    _step;

  try {
    const _loop = function _loop() {
      const item = _step.value;

      if ('suggestions' in item) {
        groupHeadingIndexes.set(index, item.label);
        item.suggestions.forEach(function (suggestion) {
          groupHeadingForSuggestion.set(suggestion, item.label);
        });
        index = normalisedSuggestions.push.apply(
          normalisedSuggestions,
          _toConsumableArray(item.suggestions),
        );
      } else {
        index = normalisedSuggestions.push(item);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return {
    normalisedSuggestions,
    groupHeadingIndexes,
    groupHeadingForSuggestion,
  };
}

function valueFromSuggestion(suggestion) {
  return 'value' in suggestion
    ? {
        text: suggestion.text,
        value: suggestion.value,
      }
    : {
        text: suggestion.text,
      };
}

const noop = function noop() {
  /**/
};

const fallbackValue = {
  text: '',
};
const fallbackSuggestions = [];
export var Autosuggest = /* #__PURE__*/ forwardRef(function (
  _ref5,
  forwardedRef,
) {
  let _Text;

  const id = _ref5.id,
    _ref5$value = _ref5.value,
    value = _ref5$value === void 0 ? fallbackValue : _ref5$value,
    _ref5$suggestions = _ref5.suggestions,
    suggestionsProp =
      _ref5$suggestions === void 0 ? fallbackSuggestions : _ref5$suggestions,
    _ref5$onChange = _ref5.onChange,
    onChange = _ref5$onChange === void 0 ? noop : _ref5$onChange,
    _ref5$automaticSelect = _ref5.automaticSelection,
    automaticSelection =
      _ref5$automaticSelect === void 0 ? false : _ref5$automaticSelect,
    _ref5$showMobileBackd = _ref5.showMobileBackdrop,
    showMobileBackdrop =
      _ref5$showMobileBackd === void 0 ? false : _ref5$showMobileBackd,
    _ref5$scrollToTopOnMo = _ref5.scrollToTopOnMobile,
    scrollToTopOnMobile =
      _ref5$scrollToTopOnMo === void 0 ? true : _ref5$scrollToTopOnMo,
    _ref5$hideSuggestions = _ref5.hideSuggestionsOnSelection,
    hideSuggestionsOnSelection =
      _ref5$hideSuggestions === void 0 ? true : _ref5$hideSuggestions,
    _ref5$onFocus = _ref5.onFocus,
    _onFocus = _ref5$onFocus === void 0 ? noop : _ref5$onFocus,
    _ref5$onBlur = _ref5.onBlur,
    _onBlur = _ref5$onBlur === void 0 ? noop : _ref5$onBlur,
    placeholder = _ref5.placeholder,
    _ref5$type = _ref5.type,
    type = _ref5$type === void 0 ? 'text' : _ref5$type,
    onClear = _ref5.onClear,
    _ref5$translations = _ref5.translations,
    translations =
      _ref5$translations === void 0 ? autosuggest : _ref5$translations,
    restProps = _objectWithoutProperties(_ref5, _excluded2);

  const suggestionsPropValue =
    typeof suggestionsProp === 'function'
      ? suggestionsProp(value)
      : suggestionsProp;
  const suggestions = Array.isArray(suggestionsPropValue)
    ? suggestionsPropValue
    : [];
  const message =
    'message' in suggestionsPropValue
      ? suggestionsPropValue.message
      : undefined;
  const hasItems = suggestions.length > 0 || Boolean(message); // We need a ref regardless so we can imperatively
  // focus the field when clicking the clear button

  const defaultRef = useRef(null);
  const inputRef = forwardedRef || defaultRef;
  const fireChange = useCallback(
    function (suggestion) {
      return onChange(valueFromSuggestion(suggestion));
    },
    [onChange],
  );
  const rootRef = useRef(null);
  const menuRef = useRef(null);
  const justPressedArrowRef = useRef(false);

  const _normaliseSuggestions = normaliseSuggestions(suggestions),
    normalisedSuggestions = _normaliseSuggestions.normalisedSuggestions,
    groupHeadingIndexes = _normaliseSuggestions.groupHeadingIndexes,
    groupHeadingForSuggestion = _normaliseSuggestions.groupHeadingForSuggestion;

  const suggestionCount = normalisedSuggestions.length;
  const hasSuggestions = suggestionCount > 0;

  const reducer = function reducer(state, action) {
    switch (action.type) {
      case INPUT_ARROW_DOWN: {
        if (hasSuggestions) {
          const nextIndex = getNextIndex(
            1,
            state.highlightedIndex,
            suggestionCount,
          );
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              showSuggestionsIfAvailable: true,
              previewValue: normalisedSuggestions[nextIndex],
              highlightedIndex: nextIndex,
            },
          );
        }
      }

      case INPUT_ARROW_UP: {
        if (hasSuggestions) {
          const _nextIndex = getNextIndex(
            -1,
            state.highlightedIndex,
            suggestionCount,
          );

          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              showSuggestionsIfAvailable: true,
              previewValue: normalisedSuggestions[_nextIndex],
              highlightedIndex: _nextIndex,
            },
          );
        }
      }

      case INPUT_CHANGE: {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            showSuggestionsIfAvailable: true,
            inputChangedSinceFocus: true,
            previewValue: null,
            highlightedIndex:
              hasSuggestions && automaticSelection && value.text.length > 0
                ? 0
                : null,
          },
        );
      }

      case INPUT_FOCUS: {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            showSuggestionsIfAvailable: true,
            inputChangedSinceFocus: false,
            isFocused: true,
          },
        );
      }

      case INPUT_BLUR: {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            showSuggestionsIfAvailable: false,
            previewValue: null,
            highlightedIndex: null,
            isFocused: false,
          },
        );
      }

      case INPUT_ESCAPE: {
        if (value.text) {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              showSuggestionsIfAvailable: false,
              previewValue: null,
              highlightedIndex: null,
            },
          );
        } else if (hasItems) {
          return _objectSpread(
            _objectSpread({}, state),
            {},
            {
              showSuggestionsIfAvailable: !state.showSuggestionsIfAvailable,
              previewValue: null,
            },
          );
        }

        return state;
      }

      case INPUT_ENTER:
      case SUGGESTION_MOUSE_CLICK: {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            showSuggestionsIfAvailable: !hideSuggestionsOnSelection,
            previewValue: null,
            highlightedIndex: null,
          },
        );
      }

      case SUGGESTION_MOUSE_ENTER: {
        return _objectSpread(
          _objectSpread({}, state),
          {},
          {
            highlightedIndex: action.value,
          },
        );
      }

      case HAS_SUGGESTIONS_CHANGED: {
        return automaticSelection
          ? _objectSpread(
              _objectSpread({}, state),
              {},
              {
                highlightedIndex:
                  hasSuggestions && value.text.length > 0 ? 0 : null,
              },
            )
          : state;
      }

      default: {
        // eslint-disable-next-line no-console
        console.error(new Error('Invalid Autosuggest action: '.concat(action)));
        return state;
      }
    }
  };

  const _useReducer = useReducer(reducer, {
      showSuggestionsIfAvailable: false,
      inputChangedSinceFocus: false,
      previewValue: null,
      highlightedIndex: null,
      isFocused: false,
    }),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    _useReducer2$ = _useReducer2[0],
    showSuggestionsIfAvailable = _useReducer2$.showSuggestionsIfAvailable,
    inputChangedSinceFocus = _useReducer2$.inputChangedSinceFocus,
    previewValue = _useReducer2$.previewValue,
    highlightedIndex = _useReducer2$.highlightedIndex,
    isFocused = _useReducer2$.isFocused,
    dispatch = _useReducer2[1];

  const isOpen = showSuggestionsIfAvailable && hasItems;
  const highlightedItem =
    typeof highlightedIndex === 'number'
      ? document.getElementById(getItemId(id, highlightedIndex))
      : null;
  useScrollIntoView(highlightedItem, menuRef.current);
  useEffect(
    function () {
      dispatch({
        type: HAS_SUGGESTIONS_CHANGED,
      });
    },
    [hasSuggestions],
  );
  const breakpoint = useBreakpoint();
  const inputProps = {
    value: previewValue ? previewValue.text : value.text,
    type: type === 'search' ? type : 'text',
    placeholder,
    onChange: function onChange(e) {
      const inputValue = e.target.value;
      dispatch({
        type: INPUT_CHANGE,
      });
      fireChange({
        text: inputValue,
      });
    },
    onFocus: function onFocus() {
      if (rootRef.current && scrollToTopOnMobile && breakpoint === 'mobile') {
        smoothScroll(rootRef.current);
      }

      dispatch({
        type: INPUT_FOCUS,
      });

      _onFocus();
    },
    onBlur: function onBlur() {
      if (justPressedArrowRef.current === true) {
        return;
      }

      if (previewValue) {
        fireChange(previewValue);
      } else if (
        isOpen &&
        automaticSelection &&
        inputChangedSinceFocus &&
        value.text.length > 0 &&
        suggestionCount > 0
      ) {
        fireChange(normalisedSuggestions[0]);
      }

      dispatch({
        type: INPUT_BLUR,
      });

      _onBlur();
    },
    onKeyDown: function onKeyDown(event) {
      const targetKey = normalizeKey(event); // Fix bug in Chrome + VoiceOver where the
      // input is blurred when pressing arrow up/down

      if (/^Arrow(Up|Down$)/.test(targetKey)) {
        justPressedArrowRef.current = true;
        setTimeout(function () {
          justPressedArrowRef.current = false;
        }, 150);
      }

      switch (targetKey) {
        case 'ArrowDown': {
          event.preventDefault();
          dispatch({
            type: INPUT_ARROW_DOWN,
          });
          return;
        }

        case 'ArrowUp': {
          event.preventDefault();
          dispatch({
            type: INPUT_ARROW_UP,
          });
          return;
        }

        case 'Escape': {
          event.preventDefault();

          if (previewValue === null && value.text) {
            fireChange({
              text: '',
            });
          }

          dispatch({
            type: INPUT_ESCAPE,
          });
          return;
        }

        case 'Enter': {
          if (typeof highlightedIndex === 'number') {
            event.preventDefault();
            fireChange(normalisedSuggestions[highlightedIndex]);
          }

          dispatch({
            type: INPUT_ENTER,
          });
          return;
        }

        default: {
          return;
        }
      }
    },
  };
  const a11y = createAccessbilityProps({
    id,
    isOpen,
    highlightedIndex,
  });
  const clearable = Boolean(
    typeof onClear !== 'undefined' &&
      typeof value !== 'undefined' &&
      value.text.length > 0,
  );
  const announcements = [];
  const hasAutomaticSelection =
    automaticSelection && previewValue === null && highlightedIndex === 0; // Announce when the field is focused and no selections have been manually highlighted

  if (
    isFocused &&
    isOpen &&
    (highlightedIndex === null || hasAutomaticSelection)
  ) {
    if (message) {
      announcements.push(message);
    }

    if (hasSuggestions) {
      announcements.push(
        translations.suggestionsAvailableAnnouncement(suggestionCount),
      );

      if (hasAutomaticSelection) {
        announcements.push(
          translations.suggestionAutoSelectedAnnouncement(
            normalisedSuggestions[0].text,
          ),
        );
      }

      announcements.push(translations.suggestionInstructions);
    } else {
      announcements.push(translations.noSuggestionsAvailableAnnouncement);
    }
  }

  return /* #__PURE__*/ _jsx(
    Fragment,
    {},
    void 0,
    showMobileBackdrop
      ? /* #__PURE__*/ _jsx(Box, {
          position: 'fixed',
          zIndex: 'dropdownBackdrop',
          transition: 'fast',
          display: ['block', 'none'],
          pointerEvents: isOpen ? undefined : 'none',
          top: 0,
          left: 0,
          opacity: !isOpen ? 0 : undefined,
          className: [
            styles.backdrop,
            isOpen ? styles.backdropVisible : undefined,
          ],
        })
      : null,
    /* #__PURE__*/ React.createElement(
      Box,
      showMobileBackdrop && isOpen
        ? {
            position: 'relative',
            zIndex: 'dropdown',
          }
        : null,
      /* #__PURE__*/ React.createElement(
        Box,
        {
          position: 'relative',
          ref: rootRef,
        },
        /* #__PURE__*/ React.createElement(
          Field,
          _extends({}, restProps, {
            id,
            labelId: a11y.labelProps.id,
            value: value.text,
            prefix: undefined,
            secondaryIcon: onClear
              ? /* #__PURE__*/ _jsx(ClearField, {
                  hide: !clearable,
                  onClear,
                  inputRef,
                })
              : null,
          }),
          function (overlays, fieldProps, icon, secondaryIcon) {
            return /* #__PURE__*/ _jsx(
              Box,
              {
                width: 'full',
              },
              void 0,
              /* #__PURE__*/ React.createElement(
                Box,
                _extends(
                  {
                    component: 'input',
                  },
                  fieldProps,
                  a11y.inputProps,
                  inputProps,
                  {
                    position: 'relative',
                    ref: inputRef,
                  },
                ),
              ),
              icon,
              /* #__PURE__*/ React.createElement(
                RemoveScroll,
                {
                  ref: menuRef,
                  enabled: isOpen,
                  forwardProps: true,
                },
                /* #__PURE__*/ React.createElement(
                  Box,
                  _extends(
                    {
                      component: 'ul',
                      display: isOpen ? 'block' : 'none',
                      position: 'absolute',
                      zIndex: 'dropdown',
                      background: 'card',
                      borderRadius: 'standard',
                      boxShadow: 'medium',
                      width: 'full',
                      marginTop: 'xxsmall',
                      paddingY: 'xxsmall',
                      className: styles.menu,
                    },
                    a11y.menuProps,
                  ),
                  isOpen && message
                    ? /* #__PURE__*/ _jsx(
                        Box,
                        {
                          component: 'li',
                          paddingX: 'small',
                          className: touchableText.standard,
                        },
                        void 0,
                        _Text ||
                          (_Text = /* #__PURE__*/ _jsx(
                            Text,
                            {
                              tone: 'secondary',
                              baseline: false,
                            },
                            void 0,
                            message,
                          )),
                      )
                    : null,
                  isOpen && hasSuggestions
                    ? normalisedSuggestions.map(function (suggestion, index) {
                        let _suggestion$label2;

                        const text = suggestion.text;
                        const groupHeading = groupHeadingIndexes.get(index);
                        return /* #__PURE__*/ _jsx(
                          Fragment,
                          {},
                          index + text,
                          groupHeading
                            ? /* #__PURE__*/ _jsx(
                                GroupHeading,
                                {},
                                void 0,
                                groupHeading,
                              )
                            : null,
                          /* #__PURE__*/ React.createElement(
                            SuggestionItem,
                            _extends(
                              {
                                suggestion,
                                highlighted: highlightedIndex === index,
                                selected: value === suggestion,
                                onClick: function onClick() {
                                  fireChange(suggestion);
                                  dispatch({
                                    type: SUGGESTION_MOUSE_CLICK,
                                  });
                                },
                                onHover: function onHover() {
                                  dispatch({
                                    type: SUGGESTION_MOUSE_ENTER,
                                    value: index,
                                  });
                                },
                              },
                              a11y.getItemProps({
                                index,
                                label:
                                  (_suggestion$label2 = suggestion.label) !==
                                    null && _suggestion$label2 !== void 0
                                    ? _suggestion$label2
                                    : suggestion.text,
                                description: suggestion.description,
                                groupHeading: groupHeadingForSuggestion.get(
                                  suggestion,
                                ),
                              }),
                            ),
                          ),
                        );
                      })
                    : null,
                ),
              ),
              overlays,
              secondaryIcon,
            );
          },
        ),
      ),
      /* #__PURE__*/ React.createElement(
        HiddenVisually,
        a11y.assistiveDescriptionProps,
        translations.assistiveDescription,
      ),
      /* #__PURE__*/ _jsx(Announcement, {}, void 0, announcements.join('. ')),
    ),
  );
}); // @ts-expect-error

Autosuggest.displayName = 'Autosuggest';

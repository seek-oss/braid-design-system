import _jsx from '@babel/runtime/helpers/jsx';
import _defineProperty from '@babel/runtime/helpers/defineProperty';

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

import React from 'react';
import source from '../../utils/source.macro';
import {
  Autosuggest,
  filterSuggestions,
  TextLink,
  Text,
  Strong,
  Box,
  Alert,
} from '../';
export var makeSuggestions = function makeSuggestions(suggestions) {
  const initialValue =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return suggestions.map(function (suggestion, i) {
    return _objectSpread(
      _objectSpread(
        {},
        typeof suggestion === 'string'
          ? {
              text: suggestion,
            }
          : suggestion,
      ),
      {},
      {
        value: i + initialValue,
      },
    );
  });
};
const docs = {
  category: 'Content',
  migrationGuide: true,
  Example: function Example(_ref) {
    const id = _ref.id,
      setDefaultState = _ref.setDefaultState,
      getState = _ref.getState,
      setState = _ref.setState,
      resetState = _ref.resetState;
    return source(
      /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        setDefaultState('value', {
          text: '',
        }),
        /* #__PURE__*/ _jsx(Autosuggest, {
          label: 'I like to eat',
          id,
          value: getState('value'),
          onChange: setState('value'),
          onClear: function onClear() {
            return resetState('value');
          },
          suggestions: filterSuggestions([
            {
              text: 'Apples',
              value: 1,
            },
            {
              text: 'Bananas',
              value: 2,
            },
            {
              text: 'Broccoli',
              value: 3,
            },
            {
              text: 'Carrots',
              value: 4,
            },
          ]),
        }),
      ),
    );
  },
  accessibility: /* #__PURE__*/ _jsx(
    Text,
    {},
    void 0,
    'Follows the',
    ' ',
    /* #__PURE__*/ _jsx(
      TextLink,
      {
        href: 'https://www.w3.org/TR/wai-aria-1.2/#combobox',
      },
      void 0,
      'WAI-ARIA Combobox Pattern.',
    ),
  ),
  alternatives: [
    {
      name: 'Dropdown',
      description: 'For smaller lists.',
    },
    {
      name: 'TextField',
      description: 'For free text.',
    },
  ],
  additional: [
    {
      label: 'Client-side filtering',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'The logic for filtering suggestions typically lives on the server rather than the client because it\u2019s impractical to send all possible suggestions over the network. However, when prototyping in Playroom or working with smaller datasets, you may want to perform this filtering on the client instead. For this case, we provide a',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'filterSuggestions'),
          ' function to make this as painless as possible.',
        ),
        /* #__PURE__*/ _jsx(
          Alert,
          {
            tone: 'info',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Text,
            {},
            void 0,
            'All examples on this page use the',
            ' ',
            /* #__PURE__*/ _jsx(Strong, {}, void 0, 'filterSuggestions'),
            ' function to demonstrate real-world filtering behaviour, but this can be safely omitted if the filtering is being performed server-side.',
          ),
        ),
      ),
    },
    {
      label: 'Automatic selection',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You can automatically select the first suggestion when blurring the field using the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'automaticSelection'),
          ' prop. Note that this only occurs when text has been entered into the field to prevent irrelevant suggestions being selected.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'This is designed for scenarios where you\u2019re effectively selecting an item from a list rather than entering free text, e.g. selecting a location.',
        ),
      ),
      Example: function Example(_ref2) {
        const id = _ref2.id,
          setDefaultState = _ref2.setDefaultState,
          getState = _ref2.getState,
          setState = _ref2.setState,
          resetState = _ref2.resetState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            /* #__PURE__*/ _jsx(Autosuggest, {
              automaticSelection: true,
              label: 'I like to eat',
              id,
              value: getState('value'),
              onChange: setState('value'),
              onClear: function onClear() {
                return resetState('value');
              },
              suggestions: filterSuggestions([
                {
                  text: 'Apples',
                  value: 1,
                },
                {
                  text: 'Bananas',
                  value: 2,
                },
                {
                  text: 'Broccoli',
                  value: 3,
                },
                {
                  text: 'Carrots',
                  value: 4,
                },
              ]),
            }),
          ),
        );
      },
    },
    {
      label: 'Grouped suggestions',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Suggestion items can optionally be nested into groups.',
      ),
      Example: function Example(_ref3) {
        const id = _ref3.id,
          setDefaultState = _ref3.setDefaultState,
          getState = _ref3.getState,
          setState = _ref3.setState,
          resetState = _ref3.resetState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            /* #__PURE__*/ _jsx(Autosuggest, {
              label: 'I like to eat',
              id,
              value: getState('value'),
              onChange: setState('value'),
              onClear: function onClear() {
                return resetState('value');
              },
              suggestions: filterSuggestions([
                {
                  label: 'Fruit',
                  suggestions: [
                    {
                      text: 'Apples',
                      value: 1,
                    },
                    {
                      text: 'Bananas',
                      value: 2,
                    },
                  ],
                },
                {
                  label: 'Vegetables',
                  suggestions: [
                    {
                      text: 'Broccoli',
                      value: 3,
                    },
                    {
                      text: 'Carrots',
                      value: 4,
                    },
                  ],
                },
              ]),
            }),
          ),
        );
      },
    },
    {
      label: 'Suggestion descriptions',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Suggestion items can optionally contain a description.',
      ),
      Example: function Example(_ref4) {
        const id = _ref4.id,
          setDefaultState = _ref4.setDefaultState,
          getState = _ref4.getState,
          setState = _ref4.setState,
          resetState = _ref4.resetState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            /* #__PURE__*/ _jsx(Autosuggest, {
              label: 'I like to eat',
              id,
              value: getState('value'),
              onChange: setState('value'),
              onClear: function onClear() {
                return resetState('value');
              },
              suggestions: filterSuggestions([
                {
                  text: 'Apples',
                  description: 'Juicy and delicious',
                  value: 1,
                },
                {
                  text: 'Bananas',
                  description: 'High in potassium',
                  value: 2,
                },
                {
                  text: 'Broccoli',
                  description: 'Looks like a tree',
                  value: 3,
                },
                {
                  text: 'Carrots',
                  description: 'Orange and crunchy',
                  value: 4,
                },
              ]),
            }),
          ),
        );
      },
    },
    {
      label: 'Clearable suggestions',
      description: /* #__PURE__*/ _jsx(
        Text,
        {},
        void 0,
        'Suggestion items can be made clearable using the',
        ' ',
        /* #__PURE__*/ _jsx(Strong, {}, void 0, 'onClear'),
        ' property on suggestion objects. This is particularly useful for giving users the ability to clear recent entries.',
      ),
      Example: function Example(_ref5) {
        const id = _ref5.id,
          setDefaultState = _ref5.setDefaultState,
          getState = _ref5.getState,
          setState = _ref5.setState,
          resetState = _ref5.resetState,
          toggleState = _ref5.toggleState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            setDefaultState('Apples', true),
            setDefaultState('Bananas', true),
            setDefaultState('Broccoli', true),
            /* #__PURE__*/ _jsx(Autosuggest, {
              label: 'I like to eat',
              id,
              value: getState('value'),
              onChange: setState('value'),
              onClear: function onClear() {
                return resetState('value');
              },
              suggestions: filterSuggestions(
                [
                  {
                    text: 'Apples',
                    value: 1,
                    onClear: function onClear() {
                      return toggleState('Apples');
                    },
                  },
                  {
                    text: 'Bananas',
                    value: 2,
                    onClear: function onClear() {
                      return toggleState('Bananas');
                    },
                  },
                  {
                    text: 'Broccoli',
                    value: 3,
                    onClear: function onClear() {
                      return toggleState('Broccoli');
                    },
                  },
                ].filter(function (suggestion) {
                  return getState(suggestion.text);
                }),
              ),
            }),
          ),
        );
      },
    },
    {
      label: 'Mobile support',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You can optionally display an overlay behind the field on mobile using the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'showMobileBackdrop'),
          ' prop. Note that, for this visual style to work, the field needs to be on a dark background.',
        ),
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'You can also scroll the field to the top of the viewport on focus using the ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'scrollToTopOnMobile'),
          ' prop.',
        ),
      ),
      background: 'brand',
      Example: function Example(_ref6) {
        const id = _ref6.id,
          setDefaultState = _ref6.setDefaultState,
          getState = _ref6.getState,
          setState = _ref6.setState,
          resetState = _ref6.resetState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            /* #__PURE__*/ _jsx(
              Box,
              {
                height: 'full',
                background: 'brand',
              },
              void 0,
              /* #__PURE__*/ _jsx(Autosuggest, {
                showMobileBackdrop: true,
                scrollToTopOnMobile: true,
                label: 'I like to eat',
                id,
                value: getState('value'),
                onChange: setState('value'),
                onClear: function onClear() {
                  return resetState('value');
                },
                suggestions: filterSuggestions([
                  {
                    text: 'Apples',
                    value: 1,
                  },
                  {
                    text: 'Bananas',
                    value: 2,
                  },
                  {
                    text: 'Broccoli',
                    value: 3,
                  },
                  {
                    text: 'Carrots',
                    value: 4,
                  },
                ]),
              }),
            ),
          ),
        );
      },
    },
    {
      label: 'Messaging when no suggestions are available',
      description: /* #__PURE__*/ React.createElement(
        React.Fragment,
        null,
        /* #__PURE__*/ _jsx(
          Text,
          {},
          void 0,
          'If no suggestions are available and you\u2019d like to provide messaging to the user, you can provide an object with a',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'message'),
          ' property to the',
          ' ',
          /* #__PURE__*/ _jsx(Strong, {}, void 0, 'suggestions'),
          ' prop.',
        ),
      ),
      Example: function Example(_ref7) {
        const id = _ref7.id,
          setDefaultState = _ref7.setDefaultState,
          getState = _ref7.getState,
          setState = _ref7.setState,
          resetState = _ref7.resetState;
        return source(
          /* #__PURE__*/ React.createElement(
            React.Fragment,
            null,
            setDefaultState('value', {
              text: '',
            }),
            /* #__PURE__*/ _jsx(Autosuggest, {
              showMobileBackdrop: true,
              scrollToTopOnMobile: true,
              label: 'I like to eat',
              id,
              value: getState('value'),
              onChange: setState('value'),
              onClear: function onClear() {
                return resetState('value');
              },
              suggestions: function suggestions(value) {
                const filteredSuggestions = filterSuggestions(
                  [
                    {
                      text: 'Apples',
                      value: 1,
                    },
                    {
                      text: 'Bananas',
                      value: 2,
                    },
                    {
                      text: 'Broccoli',
                      value: 3,
                    },
                    {
                      text: 'Carrots',
                      value: 4,
                    },
                  ],
                  value,
                );
                return filteredSuggestions.length > 0
                  ? filteredSuggestions
                  : {
                      message: 'No results found.',
                    };
              },
            }),
          ),
        );
      },
    },
  ],
};
export default docs;

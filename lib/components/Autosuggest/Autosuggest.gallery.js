import _jsx from '@babel/runtime/helpers/jsx';
import _toConsumableArray from '@babel/runtime/helpers/toConsumableArray';

let _IconSearch;

import React from 'react';
import { Autosuggest, filterSuggestions, IconSearch } from '../';
import { makeSuggestions } from './Autosuggest.docs';
import source from '../../utils/source.macro';
export var galleryItems = [
  {
    label: 'Standard suggestions',
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
          setDefaultState('showRecent', true),
          /* #__PURE__*/ _jsx(Autosuggest, {
            label: 'I like to eat',
            id,
            value: getState('value'),
            onChange: setState('value'),
            onClear: function onClear() {
              return resetState('value');
            },
            suggestions: filterSuggestions(
              [].concat(
                _toConsumableArray(
                  getState('showRecent') && getState('value').text === ''
                    ? [
                        {
                          text: 'Apples',
                          onClear: function onClear() {
                            return setState('showRecent', false);
                          },
                        },
                      ]
                    : [],
                ),
                _toConsumableArray(
                  makeSuggestions(
                    [].concat(
                      _toConsumableArray(
                        getState('value').text !== '' ? ['Apples'] : [],
                      ),
                      ['Bananas', 'Broccoli', 'Carrots'],
                    ),
                  ),
                ),
              ),
            ),
          }),
        ),
      );
    },
  },
  {
    label: 'Grouped suggestions',
    Example: function Example(_ref2) {
      const id = _ref2.id,
        getState = _ref2.getState,
        setState = _ref2.setState,
        setDefaultState = _ref2.setDefaultState,
        resetState = _ref2.resetState;
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
                suggestions: makeSuggestions(['Apples', 'Bananas']),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(['Broccoli', 'Carrots'], 2),
              },
            ]),
          }),
        ),
      );
    },
  },
  {
    label: 'Standard suggestions with descriptions',
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
          setDefaultState('showRecent', true),
          /* #__PURE__*/ _jsx(Autosuggest, {
            label: 'I like to eat',
            id,
            value: getState('value'),
            onChange: setState('value'),
            onClear: function onClear() {
              return resetState('value');
            },
            suggestions: filterSuggestions(
              [].concat(
                _toConsumableArray(
                  getState('showRecent') && getState('value').text === ''
                    ? [
                        {
                          text: 'Apples',
                          description: 'Juicy and delicious',
                          onClear: function onClear() {
                            return setState('showRecent', false);
                          },
                        },
                      ]
                    : [],
                ),
                _toConsumableArray(
                  makeSuggestions(
                    [].concat(
                      _toConsumableArray(
                        getState('value').text !== ''
                          ? [
                              {
                                text: 'Apples',
                                description: 'Juicy and delicious',
                              },
                            ]
                          : [],
                      ),
                      [
                        {
                          text: 'Bananas',
                          description: 'High in potassium',
                        },
                        {
                          text: 'Broccoli',
                          description: 'Looks like a tree',
                        },
                        {
                          text: 'Carrots',
                          description: 'Orange and crunchy',
                        },
                      ],
                    ),
                  ),
                ),
              ),
            ),
          }),
        ),
      );
    },
  },
  {
    label: 'Grouped suggestions with descriptions',
    Example: function Example(_ref4) {
      const id = _ref4.id,
        getState = _ref4.getState,
        setState = _ref4.setState,
        setDefaultState = _ref4.setDefaultState,
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
                label: 'Fruit',
                suggestions: makeSuggestions([
                  {
                    text: 'Apples',
                    description: 'Juicy and delicious',
                  },
                  {
                    text: 'Bananas',
                    description: 'High in potassium',
                  },
                ]),
              },
              {
                label: 'Vegetables',
                suggestions: makeSuggestions(
                  [
                    {
                      text: 'Broccoli',
                      description: 'Looks like a tree',
                    },
                    {
                      text: 'Carrots',
                      description: 'Orange and crunchy',
                    },
                  ],
                  2,
                ),
              },
            ]),
          }),
        ),
      );
    },
  },
  {
    label: 'Standard suggestions with an icon',
    Example: function Example(_ref5) {
      const id = _ref5.id,
        getState = _ref5.getState,
        setState = _ref5.setState,
        setDefaultState = _ref5.setDefaultState,
        resetState = _ref5.resetState;
      return source(
        /* #__PURE__*/ React.createElement(
          React.Fragment,
          null,
          setDefaultState('value', {
            text: '',
          }),
          /* #__PURE__*/ _jsx(Autosuggest, {
            label: 'I like to eat',
            icon:
              _IconSearch ||
              (_IconSearch = /* #__PURE__*/ _jsx(IconSearch, {})),
            id,
            value: getState('value'),
            onChange: setState('value'),
            onClear: function onClear() {
              return resetState('value');
            },
            suggestions: filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            ),
          }),
        ),
      );
    },
  },
  {
    label: 'With a critical message',
    Example: function Example(_ref6) {
      const id = _ref6.id,
        getState = _ref6.getState,
        setState = _ref6.setState,
        setDefaultState = _ref6.setDefaultState,
        resetState = _ref6.resetState;
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
            tone: 'critical',
            message: 'You must make a selection',
            suggestions: filterSuggestions(
              makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']),
            ),
          }),
        ),
      );
    },
  },
];

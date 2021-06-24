import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _jsx from "@babel/runtime/helpers/jsx";

var _IconSearch;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React, { useState } from 'react';
import { Autosuggest, filterSuggestions, IconSearch } from '../';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px'
    }
  }, void 0, children);
};

Container.displayName = "Container";
export var makeSuggestions = function makeSuggestions(suggestions) {
  var initialValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return suggestions.map(function (suggestion, i) {
    return _objectSpread(_objectSpread({}, typeof suggestion === 'string' ? {
      text: suggestion
    } : suggestion), {}, {
      value: i + initialValue
    });
  });
};
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Standard suggestions',
    Container: Container,
    Example: function Example(_ref2) {
      var id = _ref2.id;

      var _useState = useState({
        text: ''
      }),
          _useState2 = _slicedToArray(_useState, 2),
          value = _useState2[0],
          setValue = _useState2[1];

      var _useState3 = useState(true),
          _useState4 = _slicedToArray(_useState3, 2),
          showRecent = _useState4[0],
          setShowRecent = _useState4[1];

      return /*#__PURE__*/_jsx(Autosuggest, {
        label: "I like to eat",
        id: id,
        value: value,
        onChange: setValue,
        onClear: function onClear() {
          return setValue({
            text: ''
          });
        },
        suggestions: filterSuggestions([].concat(_toConsumableArray(showRecent && value.text === '' ? [{
          text: 'Apples',
          onClear: function onClear() {
            return setShowRecent(false);
          }
        }] : []), _toConsumableArray(makeSuggestions([].concat(_toConsumableArray(value.text !== '' ? ['Apples'] : []), ['Bananas', 'Broccoli', 'Carrots'])))))
      });
    }
  }, {
    label: 'Standard suggestions with automatic selection',
    Container: Container,
    Example: function Example(_ref3) {
      var id = _ref3.id;

      var _useState5 = useState({
        text: ''
      }),
          _useState6 = _slicedToArray(_useState5, 2),
          value = _useState6[0],
          setValue = _useState6[1];

      return /*#__PURE__*/_jsx(Autosuggest, {
        automaticSelection: true,
        label: "I like to eat",
        id: id,
        value: value,
        onChange: setValue,
        onClear: function onClear() {
          return setValue({
            text: ''
          });
        },
        suggestions: filterSuggestions(makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']))
      });
    }
  }, {
    label: 'Grouped suggestions',
    Container: Container,
    Example: function Example(_ref4) {
      var id = _ref4.id;

      var _useState7 = useState({
        text: ''
      }),
          _useState8 = _slicedToArray(_useState7, 2),
          value = _useState8[0],
          setValue = _useState8[1];

      return /*#__PURE__*/_jsx(Autosuggest, {
        label: "I like to eat",
        id: id,
        value: value,
        onChange: setValue,
        onClear: function onClear() {
          return setValue({
            text: ''
          });
        },
        suggestions: filterSuggestions([{
          label: 'Fruit',
          suggestions: makeSuggestions(['Apples', 'Bananas'])
        }, {
          label: 'Vegetables',
          suggestions: makeSuggestions(['Broccoli', 'Carrots'], 2)
        }])
      });
    }
  }, {
    label: 'Standard suggestions with an icon',
    Container: Container,
    Example: function Example(_ref5) {
      var id = _ref5.id;

      var _useState9 = useState({
        text: ''
      }),
          _useState10 = _slicedToArray(_useState9, 2),
          value = _useState10[0],
          setValue = _useState10[1];

      return /*#__PURE__*/_jsx(Autosuggest, {
        label: "I like to eat",
        id: id,
        value: value,
        icon: _IconSearch || (_IconSearch = /*#__PURE__*/_jsx(IconSearch, {})),
        onChange: setValue,
        onClear: function onClear() {
          return setValue({
            text: ''
          });
        },
        suggestions: filterSuggestions(makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']))
      });
    }
  }, {
    label: 'Autosuggest with error',
    Container: Container,
    Example: function Example(_ref6) {
      var id = _ref6.id;

      var _useState11 = useState({
        text: ''
      }),
          _useState12 = _slicedToArray(_useState11, 2),
          value = _useState12[0],
          setValue = _useState12[1];

      return /*#__PURE__*/_jsx(Autosuggest, {
        label: "I like to eat",
        id: id,
        value: value,
        onChange: setValue,
        onClear: function onClear() {
          return setValue({
            text: ''
          });
        },
        tone: "critical",
        message: "You must make a selection",
        suggestions: filterSuggestions(makeSuggestions(['Apples', 'Bananas', 'Broccoli', 'Carrots']))
      });
    }
  }]
};
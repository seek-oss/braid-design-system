import _typeof from "@babel/runtime/helpers/typeof";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import assert from 'assert';
import matchHighlights from 'autosuggest-highlight/match';

function matchSuggestion(suggestion, query) {
  var _suggestion$label;

  var groupMatches = matchHighlights((_suggestion$label = suggestion.label) !== null && _suggestion$label !== void 0 ? _suggestion$label : suggestion.text, query);
  return !groupMatches.length ? null : _objectSpread(_objectSpread({}, suggestion), {}, {
    highlights: groupMatches.map(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          start = _ref2[0],
          end = _ref2[1];

      return {
        start: start,
        end: end
      };
    })
  });
}

function filterSuggestions() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  assert([1, 2].includes(args.length), "Invalid number of arguments passed to \"filterSuggestions\". Expected 1 or 2, got ".concat(args.length)); // We need to manually curry the function here because it's generic

  if (args.length === 1) {
    return function (inputValue) {
      return filter(args[0], inputValue);
    };
  } else if (args.length === 2) {
    return filter(args[0], args[1]);
  }

  function filter(suggestions, inputValue) {
    assert(typeof inputValue === 'string' || _typeof(inputValue) === 'object' && inputValue !== null && 'text' in inputValue, 'The second argument to "filterSuggestions" must be a string or an Autosuggest value object, e.g. { text: "Hello world" }');
    var query = (typeof inputValue === 'string' ? inputValue : inputValue.text).trim();

    if (query === '') {
      return suggestions;
    }

    var filteredSuggestions = [];
    suggestions.forEach(function (suggestion) {
      if ('suggestions' in suggestion) {
        var filteredGroupSuggestions = [];
        suggestion.suggestions.forEach(function (groupSuggestion) {
          var filteredSuggestion = matchSuggestion(groupSuggestion, query);

          if (filteredSuggestion) {
            filteredGroupSuggestions.push(filteredSuggestion);
          }
        });

        if (filteredGroupSuggestions.length) {
          filteredSuggestions.push(_objectSpread(_objectSpread({}, suggestion), {}, {
            suggestions: filteredGroupSuggestions
          }));
        }
      } else {
        var filteredSuggestion = matchSuggestion(suggestion, query);

        if (filteredSuggestion) {
          filteredSuggestions.push(filteredSuggestion);
        }
      }
    });
    return filteredSuggestions;
  }
}

export { filterSuggestions };
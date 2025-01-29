import assert from 'assert';

import {
  type AutosuggestValue,
  type Suggestion,
  type Suggestions,
  type GroupedSuggestions,
  highlightSuggestions,
} from './Autosuggest';

type FilterableSuggestion<Value> = Omit<Suggestion<Value>, 'highlights'>;
type FilterableGroupedSuggestions<Value> = Omit<
  GroupedSuggestions<Value>,
  'suggestions'
> & { suggestions: Array<FilterableSuggestion<Value>> };

function matchSuggestion<Value>(suggestion: Suggestion<Value>, query: string) {
  const highlights = highlightSuggestions(
    suggestion.label ?? suggestion.text,
    query,
  );
  return highlights.length
    ? {
        ...suggestion,
        highlights,
      }
    : null;
}

type InputValue<Value> = string | AutosuggestValue<Value>;
type FilterableSuggestions<Value> = Array<
  FilterableSuggestion<Value> | FilterableGroupedSuggestions<Value>
>;

function filterSuggestions<Value>(
  suggestions: FilterableSuggestions<Value>,
): (inputValue: InputValue<Value>) => Suggestions<Value>;
function filterSuggestions<Value>(
  suggestions: FilterableSuggestions<Value>,
  inputValue: InputValue<Value>,
): Suggestions<Value>;
function filterSuggestions<Value>(...args: any[]) {
  assert(
    [1, 2].includes(args.length),
    `Invalid number of arguments passed to "filterSuggestions". Expected 1 or 2, got ${args.length}`,
  );

  // We need to manually curry the function here because it's generic
  if (args.length === 1) {
    return (inputValue: InputValue<Value>) => filter(args[0], inputValue);
  } else if (args.length === 2) {
    return filter(args[0], args[1]);
  }

  function filter(
    suggestions: FilterableSuggestions<Value>,
    inputValue: InputValue<Value>,
  ) {
    assert(
      typeof inputValue === 'string' ||
        (typeof inputValue === 'object' &&
          inputValue !== null &&
          'text' in inputValue),
      'The second argument to "filterSuggestions" must be a string or an Autosuggest value object, e.g. { text: "Hello world" }',
    );

    const query = (
      typeof inputValue === 'string' ? inputValue : inputValue.text
    ).trim();

    if (query === '') {
      return suggestions;
    }

    const filteredSuggestions: Array<
      Suggestion<Value> | GroupedSuggestions<Value>
    > = [];

    suggestions.forEach((suggestion) => {
      if ('suggestions' in suggestion) {
        const filteredGroupSuggestions: Array<Suggestion<Value>> = [];

        suggestion.suggestions.forEach((groupSuggestion) => {
          const filteredSuggestion = matchSuggestion(groupSuggestion, query);

          if (filteredSuggestion) {
            filteredGroupSuggestions.push(filteredSuggestion);
          }
        });

        if (filteredGroupSuggestions.length) {
          filteredSuggestions.push({
            ...suggestion,
            suggestions: filteredGroupSuggestions,
          });
        }
      } else {
        const filteredSuggestion = matchSuggestion(suggestion, query);

        if (filteredSuggestion) {
          filteredSuggestions.push(filteredSuggestion);
        }
      }
    });

    return filteredSuggestions;
  }
}

export { filterSuggestions };

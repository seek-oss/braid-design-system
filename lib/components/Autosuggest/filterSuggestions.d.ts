import { AutosuggestValue, Suggestion, Suggestions, GroupedSuggestions } from './Autosuggest';
declare type FilterableSuggestion<Value> = Omit<Suggestion<Value>, 'highlights'>;
declare type FilterableGroupedSuggestions<Value> = Omit<GroupedSuggestions<Value>, 'suggestions'> & {
    suggestions: Array<FilterableSuggestion<Value>>;
};
declare type InputValue<Value> = string | AutosuggestValue<Value>;
declare type FilterableSuggestions<Value> = Array<FilterableSuggestion<Value> | FilterableGroupedSuggestions<Value>>;
declare function filterSuggestions<Value>(suggestions: FilterableSuggestions<Value>): (inputValue: InputValue<Value>) => Suggestions<Value>;
declare function filterSuggestions<Value>(suggestions: FilterableSuggestions<Value>, inputValue: InputValue<Value>): Suggestions<Value>;
export { filterSuggestions };

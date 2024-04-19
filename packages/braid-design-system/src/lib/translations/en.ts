export interface AutosuggestTranslations {
  assistiveDescription: string;
  suggestionInstructions: string;
  suggestionsAvailableAnnouncement: (suggestionCount: number) => string;
  noSuggestionsAvailableAnnouncement: string;
  suggestionAutoSelectedAnnouncement: (suggestion: string) => string;
}

export const autosuggest: AutosuggestTranslations = {
  assistiveDescription: 'Suggestions will appear below the field as you type',
  suggestionInstructions:
    'Use up and down arrow keys to navigate. Press enter to select',
  suggestionsAvailableAnnouncement: (suggestionCount) =>
    `${suggestionCount} suggestion${
      suggestionCount === 1 ? '' : 's'
    } available`,
  noSuggestionsAvailableAnnouncement: 'No suggestions available',
  suggestionAutoSelectedAnnouncement: (suggestion) =>
    `Suggestion ${suggestion} is automatically selected`,
};

export interface TagSelectorTranslations {
  optionInstructions: string;
  optionsAvailableAnnouncement: (optionCount: number) => string;
  noOptionsAvailableAnnouncement: string;
}

export const tagSelector: TagSelectorTranslations = {
  optionInstructions:
    'Use up and down arrow keys to navigate. Press enter to select',
  optionsAvailableAnnouncement: (optionCount) =>
    `${optionCount} option${optionCount === 1 ? '' : 's'} available`,
  noOptionsAvailableAnnouncement: 'No options available',
};

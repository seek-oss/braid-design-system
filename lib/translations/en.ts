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

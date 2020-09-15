export interface AutosuggestTranslations {
  assistiveDescription: string;
  suggestionsAvailableAnnouncement: (suggestionCount: number) => string;
  noSuggestionsAvailableAnnouncement: string;
  suggestionAutoSelectedAnnouncement: (suggestion: string) => string;
}

export const autosuggest: AutosuggestTranslations = {
  assistiveDescription: 'Suggestions will appear below the field as you type',
  suggestionsAvailableAnnouncement: (suggestionCount) =>
    `${suggestionCount} suggestion${
      suggestionCount === 1 ? '' : 's'
    } available, use up and down arrow keys to navigate. Press enter to select`,
  noSuggestionsAvailableAnnouncement: 'No suggestions available',
  suggestionAutoSelectedAnnouncement: (suggestion) =>
    `Suggestion ${suggestion} is automatically selected`,
};

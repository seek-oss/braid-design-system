export var autosuggest = {
  assistiveDescription: 'Suggestions will appear below the field as you type',
  suggestionInstructions: 'Use up and down arrow keys to navigate. Press enter to select',
  suggestionsAvailableAnnouncement: function suggestionsAvailableAnnouncement(suggestionCount) {
    return "".concat(suggestionCount, " suggestion").concat(suggestionCount === 1 ? '' : 's', " available");
  },
  noSuggestionsAvailableAnnouncement: 'No suggestions available',
  suggestionAutoSelectedAnnouncement: function suggestionAutoSelectedAnnouncement(suggestion) {
    return "Suggestion ".concat(suggestion, " is automatically selected");
  }
};
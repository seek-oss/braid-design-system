export interface AutosuggestTranslations {
    assistiveDescription: string;
    suggestionInstructions: string;
    suggestionsAvailableAnnouncement: (suggestionCount: number) => string;
    noSuggestionsAvailableAnnouncement: string;
    suggestionAutoSelectedAnnouncement: (suggestion: string) => string;
}
export declare const autosuggest: AutosuggestTranslations;

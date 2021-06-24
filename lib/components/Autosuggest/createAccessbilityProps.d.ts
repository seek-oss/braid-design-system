export declare const getItemId: (id: string, index: number) => string;
interface AutosuggestProps {
    id: string;
    highlightedIndex: number | null;
    isOpen: boolean;
}
export declare const createAccessbilityProps: ({ id, highlightedIndex, isOpen, }: AutosuggestProps) => {
    labelProps: {
        id: string;
    };
    inputProps: {
        readonly id: string;
        readonly role: "combobox";
        readonly 'aria-haspopup': "listbox";
        readonly 'aria-owns': string | undefined;
        readonly 'aria-controls': string;
        readonly 'aria-expanded': boolean;
        readonly 'aria-labelledby': string;
        readonly 'aria-autocomplete': "list";
        readonly 'aria-activedescendant': string | undefined;
        readonly 'aria-describedby': string;
        readonly autoComplete: "off";
        readonly spellCheck: false;
    };
    assistiveDescriptionProps: {
        readonly id: string;
    };
    menuProps: {
        readonly id: string;
        readonly role: "listbox";
    };
    getItemProps: ({ index, label, description, groupHeading, }: {
        index: number;
        label: string;
        description?: string | undefined;
        groupHeading?: string | undefined;
    }) => {
        readonly id: string;
        readonly role: "option";
        readonly 'aria-selected': boolean;
        readonly 'aria-label': string;
    };
};
export {};

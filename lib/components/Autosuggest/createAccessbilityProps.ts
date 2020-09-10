export const getItemId = (id: string, index: number) => `${id}-item-${index}`;

interface AutosuggestProps {
  id: string;
  highlightedIndex: number | null;
  isOpen: boolean;
  suggestionsLabel?: string;
}
export const createAccessbilityProps = ({
  id,
  highlightedIndex,
  isOpen,
  suggestionsLabel,
}: AutosuggestProps) => {
  const menuId = `${id}-menu`;
  const labelId = `${id}-label`;

  return {
    labelProps: {
      id: labelId,
    },
    inputProps: {
      id,
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-owns': isOpen ? menuId : undefined, // backwards compatibility for screenreaders implementing ARIA 1.0
      'aria-controls': menuId,
      'aria-expanded': isOpen,
      'aria-labelledby': labelId,
      'aria-autocomplete': 'both',
      'aria-activedescendant':
        typeof highlightedIndex === 'number'
          ? getItemId(id, highlightedIndex)
          : undefined,
      autoComplete: 'off', // https://stackoverflow.com/questions/47775041/disable-autofill-in-chrome-63/47822599
      spellCheck: false,
    } as const,
    menuProps: {
      id: menuId,
      role: 'listbox',
      'aria-label': suggestionsLabel ? suggestionsLabel : undefined,
    } as const,
    getItemProps: ({
      index,
      label,
      description,
      groupHeading,
    }: {
      index: number;
      label: string;
      description?: string;
      groupHeading?: string;
    }) =>
      ({
        id: getItemId(id, index),
        role: 'option',
        'aria-selected': index === highlightedIndex,
        'aria-label': `${label}${description ? ` - ${description}` : ''}${
          groupHeading ? ` (${groupHeading})` : ''
        }`,
      } as const),
  };
};

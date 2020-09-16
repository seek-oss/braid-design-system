export const getItemId = (id: string, index: number) => `${id}-item-${index}`;

interface AutosuggestProps {
  id: string;
  highlightedIndex: number | null;
  isOpen: boolean;
}
export const createAccessbilityProps = ({
  id,
  highlightedIndex,
  isOpen,
}: AutosuggestProps) => {
  const menuId = `${id}-menu`;
  const labelId = `${id}-label`;
  const assistiveDescriptionId = `${id}-aria-description`;

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
      'aria-autocomplete': 'list',
      'aria-activedescendant':
        typeof highlightedIndex === 'number'
          ? getItemId(id, highlightedIndex)
          : undefined,
      'aria-describedby': assistiveDescriptionId,
      autoComplete: 'off', // https://stackoverflow.com/questions/47775041/disable-autofill-in-chrome-63/47822599
      spellCheck: false,
    } as const,
    assistiveDescriptionProps: {
      id: assistiveDescriptionId,
    } as const,
    menuProps: {
      id: menuId,
      role: 'listbox',
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

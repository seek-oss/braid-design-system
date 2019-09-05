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

  return {
    rootProps: {
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-expanded': isOpen,
      'aria-owns': isOpen ? menuId : undefined,
      'aria-labelledby': labelId,
    } as const,
    labelProps: {
      id: labelId,
    },
    inputProps: {
      id,
      autoComplete: 'off', // https://stackoverflow.com/questions/47775041/disable-autofill-in-chrome-63/47822599
      spellCheck: false,
      'aria-autocomplete': 'list',
      'aria-controls': menuId,
      'aria-activedescendant':
        typeof highlightedIndex === 'number'
          ? getItemId(id, highlightedIndex)
          : undefined,
    } as const,
    menuProps: {
      id: menuId,
      role: 'listbox',
      'aria-labelledby': labelId,
    } as const,
    getItemProps: ({
      index,
      label,
      groupHeading,
    }: {
      index: number;
      label: string;
      groupHeading?: string;
    }) =>
      ({
        id: getItemId(id, index),
        role: 'option',
        'aria-selected': index === highlightedIndex,
        'aria-label': `${label}${groupHeading ? ` (${groupHeading})` : ''}`,
      } as const),
  };
};

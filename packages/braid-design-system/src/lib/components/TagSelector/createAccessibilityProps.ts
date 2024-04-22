interface TagSelectorProps {
  id: string;
  activeOption: string | undefined;
  isFocused: boolean;
}

export const createAccessibilityProps = ({
  id,
  activeOption,
  isFocused,
}: TagSelectorProps) => {
  const menuId = `${id}-menu`;
  const assistiveDescriptionId = `${id}-aria-description`;

  return {
    inputProps: {
      id,
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-owns': isFocused ? menuId : undefined,
      'aria-controls': menuId,
      'aria-expanded': isFocused,
      'aria-autocomplete': 'list',
      'aria-activedescendant': activeOption,
      'aria-describedby': assistiveDescriptionId,
      autoComplete: 'off',
      spellCheck: false,
    } as const,

    getDropdownOptionProps: ({
      optionId,
      description,
    }: {
      optionId: string;
      description: string;
    }) => ({
      id: optionId,
      role: 'option',
      'aria-label': description,
    }),
  };
};

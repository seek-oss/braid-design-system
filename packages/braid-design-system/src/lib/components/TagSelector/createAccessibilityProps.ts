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
      // 'listbox' may not be the correct role here
      'aria-haspopup': 'true',
      'aria-owns': isFocused ? menuId : undefined,
      'aria-controls': menuId,
      'aria-expanded': isFocused,
      'aria-autocomplete': 'list',
      // Todo - potentially remove "checkbox-" prefix
      'aria-activedescendant': `checkbox-${activeOption}`,
      'aria-describedby': assistiveDescriptionId,
      autoComplete: 'off',
      spellCheck: false,
    } as const,
  };
};

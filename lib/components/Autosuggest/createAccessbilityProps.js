export var getItemId = function getItemId(id, index) {
  return "".concat(id, "-item-").concat(index);
};
export var createAccessbilityProps = function createAccessbilityProps(_ref) {
  var id = _ref.id,
      highlightedIndex = _ref.highlightedIndex,
      isOpen = _ref.isOpen;
  var menuId = "".concat(id, "-menu");
  var labelId = "".concat(id, "-label");
  var assistiveDescriptionId = "".concat(id, "-aria-description");
  return {
    labelProps: {
      id: labelId
    },
    inputProps: {
      id: id,
      role: 'combobox',
      'aria-haspopup': 'listbox',
      'aria-owns': isOpen ? menuId : undefined,
      // backwards compatibility for screenreaders implementing ARIA 1.0
      'aria-controls': menuId,
      'aria-expanded': isOpen,
      'aria-labelledby': labelId,
      'aria-autocomplete': 'list',
      'aria-activedescendant': typeof highlightedIndex === 'number' ? getItemId(id, highlightedIndex) : undefined,
      'aria-describedby': assistiveDescriptionId,
      autoComplete: 'off',
      // https://stackoverflow.com/questions/47775041/disable-autofill-in-chrome-63/47822599
      spellCheck: false
    },
    assistiveDescriptionProps: {
      id: assistiveDescriptionId
    },
    menuProps: {
      id: menuId,
      role: 'listbox'
    },
    getItemProps: function getItemProps(_ref2) {
      var index = _ref2.index,
          label = _ref2.label,
          description = _ref2.description,
          groupHeading = _ref2.groupHeading;
      return {
        id: getItemId(id, index),
        role: 'option',
        'aria-selected': index === highlightedIndex,
        'aria-label': "".concat(label).concat(description ? " - ".concat(description) : '').concat(groupHeading ? " (".concat(groupHeading, ")") : '')
      };
    }
  };
};
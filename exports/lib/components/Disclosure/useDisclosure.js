import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import { useState } from 'react';
export var useDisclosure = function useDisclosure(_ref) {
  const id = _ref.id,
    expandedProp = _ref.expanded,
    onToggle = _ref.onToggle;

  const _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    expandedFallback = _useState2[0],
    setExpandedFallback = _useState2[1];

  const expanded =
    expandedProp !== null && expandedProp !== void 0
      ? expandedProp
      : expandedFallback;
  return {
    buttonProps: {
      'aria-controls': id,
      'aria-expanded': expanded,
      onClick: function onClick() {
        const newValue = !expanded;

        if (expandedProp === undefined) {
          setExpandedFallback(newValue);
        }

        if (typeof onToggle === 'function') {
          onToggle(newValue);
        }
      },
    },
    contentProps: {
      id,
    },
    expanded,
  };
};

import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "label", "stateName", "expanded", "onToggle", "size", "tone"];
import React from 'react';
import { useFallbackState } from '../../playroom/playroomState';
import { useFallbackId } from '../../playroom/utils';
import { AccordionItem as BraidAccordionItem } from './AccordionItem';
export var AccordionItem = function AccordionItem(_ref) {
  var id = _ref.id,
      label = _ref.label,
      stateName = _ref.stateName,
      expanded = _ref.expanded,
      onToggle = _ref.onToggle,
      size = _ref.size,
      tone = _ref.tone,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();

  var _useFallbackState = useFallbackState(stateName, expanded, onToggle, false),
      _useFallbackState2 = _slicedToArray(_useFallbackState, 2),
      state = _useFallbackState2[0],
      handleChange = _useFallbackState2[1];

  return /*#__PURE__*/React.createElement(BraidAccordionItem, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    expanded: state,
    onToggle: handleChange,
    label: typeof label !== 'boolean' ? label : '',
    size: typeof size === 'boolean' ? undefined : size,
    tone: typeof tone === 'boolean' ? undefined : tone
  }, restProps));
};
AccordionItem.displayName = "AccordionItem";
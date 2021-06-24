import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var _IconChevron;

import React, { useContext } from 'react';
import assert from 'assert';
import { Overlay } from '../private/Overlay/Overlay';
import { Box } from '../Box/Box';
import { IconChevron } from '../icons';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './TextDropdown.css';
export function parseSimpleToComplexOption(option) {
  return typeof option !== 'string' && typeof option !== 'number' && 'text' in option && 'value' in option ? option : {
    value: option,
    text: String(option)
  };
}
export function TextDropdown(_ref) {
  var id = _ref.id,
      value = _ref.value,
      _onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      options = _ref.options,
      label = _ref.label,
      data = _ref.data;
  assert(function () {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    var inText = useContext(TextContext); // eslint-disable-next-line react-hooks/rules-of-hooks

    var inHeading = useContext(HeadingContext);
    return inText || inHeading;
  }(), 'TextDropdown components must be rendered within a Text or Heading component. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/TextDropdown');
  var parsedOptions = options.map(parseSimpleToComplexOption);

  var _parsedOptions$filter = parsedOptions.filter(function (o) {
    return value === o.value;
  }),
      _parsedOptions$filter2 = _slicedToArray(_parsedOptions$filter, 1),
      currentText = _parsedOptions$filter2[0];

  if (!currentText || !currentText.text) {
    throw new Error("The provided value of \"".concat(value, "\" does not exist in the provided `options` list."));
  }

  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "inlineBlock",
    position: "relative"
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Box, {
    pointerEvents: "none",
    userSelect: "none"
  }, void 0, currentText.text, " ", _IconChevron || (_IconChevron = /*#__PURE__*/_jsx(IconChevron, {
    alignY: "lowercase"
  }))), /*#__PURE__*/_jsx(Box, {
    component: "select",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "full",
    opacity: 0,
    className: styles.select,
    "aria-label": label,
    title: label,
    id: id,
    value: String(value),
    onChange: function onChange(ev) {
      if (typeof _onChange === 'function') {
        var newValue = parsedOptions[ev.currentTarget.selectedIndex].value;

        _onChange(newValue);
      }
    },
    onBlur: onBlur
  }, void 0, /*#__PURE__*/_jsx("optgroup", {
    label: label
  }, void 0, parsedOptions.map(function (option) {
    return /*#__PURE__*/_jsx("option", {
      value: String(option.value)
    }, String(option.value), option.text);
  }))), /*#__PURE__*/_jsx(Overlay, {
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    transition: "fast",
    onlyVisibleForKeyboardNavigation: true,
    className: styles.focusOverlay
  }));
}
TextDropdown.displayName = "TextDropdown";
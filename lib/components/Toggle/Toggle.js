import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";

var _IconTick;

import React from 'react';
import { Box } from '../Box/Box';
import { FieldOverlay } from '../private/FieldOverlay/FieldOverlay';
import { Text } from '../Text/Text';
import { IconTick } from '../icons';
import { virtualTouchable } from '../private/touchable/virtualTouchable';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Toggle.css';

var handleChange = function handleChange(onChange) {
  return function (event) {
    if (typeof onChange === 'function') {
      onChange(event.target.checked);
    }
  };
};

export var Toggle = function Toggle(_ref) {
  var id = _ref.id,
      on = _ref.on,
      onChange = _ref.onChange,
      label = _ref.label,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'left' : _ref$align,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'standard' : _ref$size,
      data = _ref.data;
  var showBorder = useBackgroundLightness() === 'light';
  return /*#__PURE__*/React.createElement(Box, _extends({
    position: "relative",
    zIndex: 0,
    display: "flex",
    flexDirection: align === 'left' ? undefined : 'rowReverse',
    className: styles.root
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Box, {
    component: "input",
    type: "checkbox",
    id: id,
    checked: on,
    onChange: handleChange(onChange),
    position: "absolute",
    zIndex: 1,
    cursor: "pointer",
    opacity: 0,
    className: [styles.realField, styles.realFieldPosition[size], styles.fieldSize[size]]
  }), /*#__PURE__*/_jsx(Box, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
    className: [styles.slideContainerBase, styles.slideContainerSize[size], styles.fieldSize[size]]
  }, void 0, /*#__PURE__*/_jsx(Box, {
    position: "absolute",
    width: "full",
    overflow: "hidden",
    borderRadius: "full",
    className: [styles.slideTrack[size], styles.slideTrackBackground]
  }, void 0, /*#__PURE__*/_jsx(Box, {
    position: "absolute",
    width: "full",
    height: "full",
    background: "formAccent",
    transition: "fast",
    className: styles.slideTrackSelected
  })), /*#__PURE__*/_jsx(Box, {
    position: "absolute",
    background: "input",
    boxShadow: showBorder ? 'borderField' : undefined,
    transition: "fast",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "full",
    className: styles.slider[size]
  }, void 0, /*#__PURE__*/_jsx(FieldOverlay, {
    className: styles.icon
  }, void 0, _IconTick || (_IconTick = /*#__PURE__*/_jsx(IconTick, {
    tone: "formAccent",
    size: "fill"
  }))), /*#__PURE__*/_jsx(FieldOverlay, {
    variant: "focus",
    borderRadius: "full",
    className: styles.focusOverlay
  }), /*#__PURE__*/_jsx(FieldOverlay, {
    variant: "hover",
    borderRadius: "full",
    className: styles.hoverOverlay
  }))), /*#__PURE__*/_jsx(Box, {
    component: "label",
    htmlFor: id,
    paddingLeft: align === 'left' ? 'xsmall' : undefined,
    paddingRight: align === 'right' || align === 'justify' ? 'xsmall' : undefined,
    flexGrow: align === 'justify' ? 1 : undefined,
    userSelect: "none",
    cursor: "pointer",
    className: [styles.label[size], virtualTouchable()]
  }, void 0, /*#__PURE__*/_jsx(Text, {
    baseline: false,
    weight: on ? 'strong' : undefined,
    size: size
  }, void 0, label)));
};
Toggle.displayName = "Toggle";
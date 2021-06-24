import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box, Text } from '../../';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { atoms } from '../../../atoms/atoms';
import wireframe from '../../../themes/wireframe';
import * as styles from './Placeholder.css';

var resolveToPxIfUnitless = function resolveToPxIfUnitless(value) {
  return typeof value === 'string' && /[0-9]$/.test(value) ? "".concat(value, "px") : value;
};

export var Placeholder = function Placeholder(_ref) {
  var label = _ref.label,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 'auto' : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 120 : _ref$height,
      _ref$shape = _ref.shape,
      shape = _ref$shape === void 0 ? 'rectangle' : _ref$shape;
  var theme = useBackgroundLightness() === 'light' ? styles.lightTheme : styles.darkTheme;
  return /*#__PURE__*/_jsx(Box, {
    position: "relative",
    overflow: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: shape === 'round' ? 'full' : undefined,
    className: [wireframe.vanillaTheme, theme, styles.box],
    style: {
      width: resolveToPxIfUnitless(width),
      height: resolveToPxIfUnitless(height)
    }
  }, void 0, label ? /*#__PURE__*/_jsx(Box, {
    paddingX: "xsmall",
    paddingY: "xxsmall"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    size: "small",
    weight: "strong",
    align: "center",
    baseline: false
  }, void 0, /*#__PURE__*/_jsx(Box, {
    className: styles.label
  }, void 0, label))) : /*#__PURE__*/_jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: atoms({
      reset: 'svg',
      position: 'absolute',
      width: 'full',
      height: 'full'
    })
  }, void 0, /*#__PURE__*/_jsx("line", {
    className: styles.line,
    x1: 0,
    y1: 0,
    x2: "100%",
    y2: "100%"
  }), /*#__PURE__*/_jsx("line", {
    className: styles.line,
    x1: "100%",
    y1: 0,
    x2: 0,
    y2: "100%"
  })));
};
Placeholder.displayName = "Placeholder";
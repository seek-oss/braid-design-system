import _extends from "@babel/runtime/helpers/extends";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _jsx from "@babel/runtime/helpers/jsx";
var _excluded = ["value", "onChange", "onBlur", "onFocus", "onPaste", "placeholder", "characterLimit", "highlightRanges", "lines", "lineLimit", "grow"],
    _excluded2 = ["className", "borderRadius", "background"];
import React, { forwardRef, useState, useRef, useCallback } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { formatRanges } from './formatRanges';
import { Field } from '../private/Field/Field';
import * as styles from './Textarea.css';

var renderCount = function renderCount(_ref) {
  var characterLimit = _ref.characterLimit,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value;
  var inputLength = String(value).length;

  if (typeof characterLimit === 'undefined' || inputLength < Math.ceil(characterLimit * 0.7 / 10) * 10) {
    return null;
  }

  var diff = characterLimit - inputLength;
  var valid = diff >= 0;
  return /*#__PURE__*/_jsx(Text, {
    size: "small",
    tone: valid ? 'secondary' : 'critical'
  }, void 0, diff);
};

renderCount.displayName = "renderCount";

var pxToInt = function pxToInt(str) {
  return typeof str === 'string' ? parseInt(str.replace('px', ''), 10) : 0;
};

var calculateLines = function calculateLines(target, lines, lineLimit) {
  var _window$getComputedSt = window.getComputedStyle(target),
      paddingBottom = _window$getComputedSt.paddingBottom,
      paddingTop = _window$getComputedSt.paddingTop,
      lineHeight = _window$getComputedSt.lineHeight; // If line height is not a pixel value (e.g. 'normal' or unitless),
  // bail out of grow behaviour as we cannot calculate accurately.


  if (!lineHeight.endsWith('px')) {
    return lines;
  }

  var padding = pxToInt(paddingTop) + pxToInt(paddingBottom);
  var currentRows = Math.floor((target.scrollHeight - padding) / pxToInt(lineHeight));

  if (target && target.value === '') {
    return lines;
  }

  return typeof lineLimit === 'number' && currentRows > lineLimit ? lineLimit : currentRows;
};

export var Textarea = /*#__PURE__*/forwardRef(function (_ref2, ref) {
  var value = _ref2.value,
      _onChange = _ref2.onChange,
      onBlur = _ref2.onBlur,
      onFocus = _ref2.onFocus,
      onPaste = _ref2.onPaste,
      placeholder = _ref2.placeholder,
      characterLimit = _ref2.characterLimit,
      _ref2$highlightRanges = _ref2.highlightRanges,
      highlightRangesProp = _ref2$highlightRanges === void 0 ? [] : _ref2$highlightRanges,
      _ref2$lines = _ref2.lines,
      lines = _ref2$lines === void 0 ? 3 : _ref2$lines,
      lineLimit = _ref2.lineLimit,
      _ref2$grow = _ref2.grow,
      grow = _ref2$grow === void 0 ? true : _ref2$grow,
      restProps = _objectWithoutProperties(_ref2, _excluded);

  var _useState = useState(lines),
      _useState2 = _slicedToArray(_useState, 2),
      rows = _useState2[0],
      setRows = _useState2[1];

  var highlightsRef = useRef(null);
  var updateScroll = useCallback(function (scrollTop) {
    if (highlightsRef.current) {
      highlightsRef.current.scrollTop = scrollTop;
    }
  }, [highlightsRef]);
  var inputLength = String(value).length;
  var excessCharactersRange = characterLimit && inputLength > characterLimit ? [{
    start: characterLimit
  }] : [];
  var highlightRanges = [].concat(excessCharactersRange, _toConsumableArray(highlightRangesProp));
  var hasHighlights = highlightRanges.length > 0;
  return /*#__PURE__*/React.createElement(Field, _extends({}, restProps, {
    value: value,
    icon: undefined,
    prefix: undefined,
    labelId: undefined,
    secondaryMessage: renderCount({
      characterLimit: characterLimit,
      value: value
    })
  }), function (overlays, _ref3) {
    var className = _ref3.className,
        borderRadius = _ref3.borderRadius,
        background = _ref3.background,
        fieldProps = _objectWithoutProperties(_ref3, _excluded2);

    return /*#__PURE__*/_jsx(Box, {
      position: "relative",
      width: "full",
      zIndex: 0,
      background: background,
      borderRadius: borderRadius
    }, void 0, hasHighlights ? /*#__PURE__*/React.createElement(Box, _extends({
      ref: highlightsRef,
      position: "absolute",
      overflow: "hidden",
      pointerEvents: "none",
      width: "full",
      height: "full",
      "aria-hidden": "true",
      top: 0,
      left: 0,
      className: [styles.highlights, className]
    }, fieldProps), formatRanges(String(value), highlightRanges)) : null, /*#__PURE__*/React.createElement(Box, _extends({
      component: "textarea",
      position: "relative",
      zIndex: 1,
      rows: rows,
      value: value,
      onChange: function onChange(e) {
        if (grow) {
          setRows(calculateLines(e.currentTarget, lines, lineLimit));
        }

        if (typeof _onChange === 'function') {
          _onChange(e);
        }

        if (hasHighlights) {
          updateScroll(e.currentTarget.scrollTop);
        }
      },
      onBlur: onBlur,
      onFocus: onFocus,
      onPaste: onPaste,
      onScroll: hasHighlights ? function (event) {
        return updateScroll(event.currentTarget.scrollTop);
      } : undefined,
      placeholder: placeholder,
      className: [styles.field, className]
    }, fieldProps, {
      ref: ref
    })), overlays);
  });
});
Textarea.displayName = 'Textarea';
import _extends from "@babel/runtime/helpers/extends";
import _typeof from "@babel/runtime/helpers/typeof";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { useEffect, forwardRef, useRef } from 'react';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { IconMinus, IconTick } from '../../icons';
import buildDataAttributes from '../buildDataAttributes';
import { Box } from '../../Box/Box';
import * as styles from './InlineField.css';
const tones = ['neutral', 'critical'];

const Indicator = function Indicator(_ref) {
  const type = _ref.type,
      checked = _ref.checked,
      _ref$hover = _ref.hover,
      hover = _ref$hover === void 0 ? false : _ref$hover,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  const isCheckbox = type === 'checkbox';

  const iconTone = function () {
    if (disabled) {
      return 'secondary';
    }

    if (hover) {
      return 'formAccent';
    }
  }();

  return isCheckbox ? /* #__PURE__*/_jsx(Box, {
    height: "full" // Needed for IE11
    ,
    transition: "fast",
    position: "relative",
    className: styles.checkboxIndicator
  }, void 0, /* #__PURE__*/_jsx(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== 'mixed' ? 0 : undefined
  }, void 0, /* #__PURE__*/_jsx(IconMinus, {
    size: "fill",
    tone: iconTone
  })), /* #__PURE__*/_jsx(Box, {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transition: "fast",
    opacity: checked !== true ? 0 : undefined
  }, void 0, /* #__PURE__*/_jsx(IconTick, {
    size: "fill",
    tone: iconTone
  }))) : /* #__PURE__*/_jsx(Box, {
    background: disabled ? 'formAccentDisabled' : 'formAccent',
    transition: "fast",
    width: "full",
    height: "full",
    borderRadius: "full",
    className: styles.radioIndicator
  });
};

export var StyledInput = /* #__PURE__*/forwardRef(function (_ref2, forwardedRef) {
  const id = _ref2.id,
      name = _ref2.name,
      value = _ref2.value,
      checked = _ref2.checked,
      data = _ref2.data,
      onChange = _ref2.onChange,
      type = _ref2.type,
      _ref2$tone = _ref2.tone,
      tone = _ref2$tone === void 0 ? 'neutral' : _ref2$tone,
      _ref2$disabled = _ref2.disabled,
      disabled = _ref2$disabled === void 0 ? false : _ref2$disabled,
      required = _ref2.required,
      tabIndex = _ref2.tabIndex,
      _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'standard' : _ref2$size,
      ariaDescribedBy = _ref2['aria-describedby'],
      ariaLabelledBy = _ref2['aria-labelledby'],
      ariaLabel = _ref2['aria-label'];
  // We need a ref regardless so we can imperatively
  // focus the field when clicking the clear button
  const defaultRef = useRef(null);
  const ref = forwardedRef || defaultRef;
  const indeterminateRef = useRef(false);

  if (tones.indexOf(tone) === -1) {
    throw new Error("Invalid tone: ".concat(tone));
  }

  const isCheckbox = type === 'checkbox';
  const fieldBorderRadius = isCheckbox ? 'standard' : 'full';
  const accentBackground = disabled ? 'formAccentDisabled' : 'formAccent';
  const showFieldBorder = useBackgroundLightness() === 'light' && (tone !== 'critical' || disabled);
  const isMixed = isCheckbox && checked === 'mixed';
  useEffect(function () {
    if (ref && _typeof(ref) === 'object' && ref.current && isCheckbox) {
      ref.current.indeterminate = isMixed;
      indeterminateRef.current = isMixed;
    }
  }, [ref, isMixed, isCheckbox]); // Internal consumers of this private component must constrain
  // this in a position relative container. This is left as a
  // fragment to support sibling selectors to the input in
  // InlineField (and other possible future use cases).

  return /* #__PURE__*/React.createElement(React.Fragment, null, /* #__PURE__*/React.createElement(Box, _extends({
    component: "input",
    type,
    id,
    name,
    value,
    onChange: isMixed ? function (e) {
      if (ref && _typeof(ref) === 'object' && ref.current) {
        ref.current.indeterminate = indeterminateRef.current;
      }

      if (typeof onChange === 'function') {
        onChange(e);
      }
    } : onChange,
    checked: checked === 'mixed' ? false : checked,
    position: "absolute",
    zIndex: 1,
    className: [styles.realField, styles.realFieldPosition[size], isMixed ? styles.isMixed : undefined],
    cursor: !disabled ? 'pointer' : undefined,
    opacity: 0,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledBy,
    "aria-label": ariaLabel,
    "aria-checked": isMixed ? 'mixed' : checked,
    "aria-required": required,
    disabled,
    ref,
    tabIndex
  }, data ? buildDataAttributes(data) : undefined)), /* #__PURE__*/_jsx(Box, {
    flexShrink: 0,
    position: "relative",
    className: [styles.fakeFieldBase, styles.fakeFieldSize[size]],
    background: disabled ? 'inputDisabled' : 'input',
    borderRadius: fieldBorderRadius
  }, void 0, /* #__PURE__*/_jsx(FieldOverlay, {
    variant: disabled ? 'disabled' : 'default',
    borderRadius: fieldBorderRadius,
    visible: showFieldBorder
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "critical",
    borderRadius: fieldBorderRadius,
    visible: tone === 'critical' && !disabled
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: tone === 'critical' && isCheckbox ? tone : undefined,
    background: isCheckbox ? accentBackground : undefined,
    borderRadius: fieldBorderRadius,
    className: styles.selected
  }, void 0, /* #__PURE__*/_jsx(Indicator, {
    type,
    disabled,
    checked
  })), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "focus",
    borderRadius: fieldBorderRadius,
    className: styles.focusOverlay
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "hover",
    borderRadius: fieldBorderRadius,
    className: styles.hoverOverlay
  }, void 0, /* #__PURE__*/_jsx(Indicator, {
    type,
    hover: true,
    checked: true
  }))));
});
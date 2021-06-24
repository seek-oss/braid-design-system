import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _jsx from "@babel/runtime/helpers/jsx";

function ownKeys(object, enumerableOnly) { const keys = Object.keys(object); if (Object.getOwnPropertySymbols) { let symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (let i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import assert from 'assert';
import React, { Fragment } from 'react';
import clsx from 'clsx';
import { Box } from '../../Box/Box';
import { useBackgroundLightness } from '../../Box/BackgroundContext';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { FieldOverlay } from '../FieldOverlay/FieldOverlay';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes from '../buildDataAttributes';
import { useText, touchableText } from '../../../hooks/typography';
import { Text } from '../../Text/Text';
import { mergeIds } from '../mergeIds';
import * as styles from './Field.css';
export var Field = function Field(_ref) {
  const id = _ref.id,
      value = _ref.value,
      labelId = _ref.labelId,
      name = _ref.name,
      disabled = _ref.disabled,
      autoComplete = _ref.autoComplete,
      label = _ref.label,
      secondaryLabel = _ref.secondaryLabel,
      tertiaryLabel = _ref.tertiaryLabel,
      description = _ref.description,
      children = _ref.children,
      message = _ref.message,
      secondaryMessage = _ref.secondaryMessage,
      _ref$reserveMessageSp = _ref.reserveMessageSpace,
      reserveMessageSpace = _ref$reserveMessageSp === void 0 ? false : _ref$reserveMessageSp,
      tone = _ref.tone,
      ariaDescribedBy = _ref['aria-describedby'],
      data = _ref.data,
      secondaryIcon = _ref.secondaryIcon,
      autoFocus = _ref.autoFocus,
      icon = _ref.icon,
      prefix = _ref.prefix,
      required = _ref.required;
  assert(prefix === undefined || typeof prefix === 'string', 'Prefix must be a string');
  const messageId = "".concat(id, "-message");
  const descriptionId = description ? "".concat(id, "-description") : undefined;
  const fieldBackground = disabled ? 'inputDisabled' : 'input';
  const showFieldBorder = useBackgroundLightness() === 'light' && (tone !== 'critical' || disabled);
  const hasValue = typeof value === 'string' ? value.length > 0 : value != null;

  const overlays = /* #__PURE__*/_jsx(Fragment, {}, void 0, /* #__PURE__*/_jsx(FieldOverlay, {
    variant: disabled ? 'disabled' : 'default',
    visible: showFieldBorder
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "critical",
    visible: tone === 'critical' && !disabled
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "focus",
    className: styles.focusOverlay
  }), /* #__PURE__*/_jsx(FieldOverlay, {
    variant: "hover",
    className: styles.hoverOverlay
  }));

  const fieldPadding = 'small';
  return /* #__PURE__*/_jsx(Stack, {
    space: "xsmall"
  }, void 0, label ? /* #__PURE__*/_jsx(FieldLabel, {
    id: labelId,
    htmlFor: id,
    label,
    secondaryLabel,
    tertiaryLabel,
    description,
    descriptionId
  }) : null, /* #__PURE__*/_jsx(Box, {
    position: "relative",
    background: fieldBackground,
    borderRadius: "standard",
    display: "flex",
    className: secondaryIcon ? styles.secondaryIconSpace : undefined
  }, void 0, children(overlays, _objectSpread(_objectSpread({
    id,
    name,
    background: fieldBackground,
    width: 'full',
    paddingLeft: fieldPadding,
    paddingRight: secondaryIcon ? undefined : fieldPadding,
    borderRadius: 'standard',
    outline: 'none',
    'aria-describedby': mergeIds(ariaDescribedBy, message || secondaryMessage ? messageId : undefined, descriptionId),
    'aria-required': required,
    disabled,
    autoComplete,
    autoFocus
  }, buildDataAttributes(data)), {}, {
    className: clsx(styles.field, styles.placeholderColor, useText({
      backgroundContext: fieldBackground,
      tone: hasValue ? 'neutral' : 'secondary',
      size: 'standard',
      baseline: false
    }), touchableText.standard, icon && !prefix ? styles.iconSpace : null)
  }), icon ? /* #__PURE__*/_jsx(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    height: "touchable",
    width: "touchable",
    pointerEvents: "none",
    top: 0,
    left: 0
  }, void 0, /* #__PURE__*/_jsx(Text, {
    baseline: false,
    tone: prefix ? 'secondary' : undefined
  }, void 0, icon)) : null, secondaryIcon ? /* #__PURE__*/_jsx(Box, {
    position: "absolute",
    width: "touchable",
    height: "touchable",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: 0,
    right: 0
  }, void 0, secondaryIcon) : null, prefix ? /* #__PURE__*/_jsx(Box, {
    component: "label",
    htmlFor: id,
    display: "flex",
    alignItems: "center",
    paddingLeft: icon ? undefined : fieldPadding,
    height: "touchable",
    flexShrink: 0,
    className: icon ? styles.iconSpace : null
  }, void 0, /* #__PURE__*/_jsx(Text, {
    tone: "secondary",
    baseline: false
  }, void 0, prefix), /* #__PURE__*/_jsx(Box, {
    padding: fieldPadding,
    paddingRight: "none",
    height: "full"
  }, void 0, /* #__PURE__*/_jsx(Box, {
    height: "full",
    className: styles.verticalDivider
  }))) : null)), message || secondaryMessage || reserveMessageSpace ? /* #__PURE__*/_jsx(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    secondaryMessage,
    reserveMessageSpace
  }) : null);
};
Field.displayName = "Field";
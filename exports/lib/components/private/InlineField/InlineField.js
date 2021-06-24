import _jsx from "@babel/runtime/helpers/jsx";
import React, { forwardRef } from 'react';
import { Box } from '../../Box/Box';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { Text } from '../../Text/Text';
import { virtualTouchable } from '../touchable/virtualTouchable';
import { mergeIds } from '../mergeIds';
import { Inline } from '../../Inline/Inline';
import { StyledInput } from './StyledInput';
import * as styles from './InlineField.css';
export var InlineField = /* #__PURE__*/forwardRef(function (_ref, forwardedRef) {
  const id = _ref.id,
      name = _ref.name,
      value = _ref.value,
      checked = _ref.checked,
      data = _ref.data,
      onChange = _ref.onChange,
      label = _ref.label,
      type = _ref.type,
      children = _ref.children,
      description = _ref.description,
      badge = _ref.badge,
      message = _ref.message,
      _ref$reserveMessageSp = _ref.reserveMessageSpace,
      reserveMessageSpace = _ref$reserveMessageSp === void 0 ? false : _ref$reserveMessageSp,
      _ref$tone = _ref.tone,
      tone = _ref$tone === void 0 ? 'neutral' : _ref$tone,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      required = _ref.required,
      _ref$inList = _ref.inList,
      inList = _ref$inList === void 0 ? false : _ref$inList,
      tabIndex = _ref.tabIndex,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'standard' : _ref$size,
      ariaDescribedBy = _ref['aria-describedby'];
  const messageId = "".concat(id, "-message");
  const descriptionId = "".concat(id, "-description");
  const hasMessage = message || reserveMessageSpace;
  return /* #__PURE__*/_jsx(Box, {
    position: "relative",
    zIndex: 0,
    className: styles.root
  }, void 0, /* #__PURE__*/_jsx(Box, {
    display: "flex"
  }, void 0, /* #__PURE__*/React.createElement(StyledInput, {
    type,
    id,
    checked,
    name,
    value,
    data,
    onChange,
    disabled,
    tone,
    tabIndex,
    required,
    "aria-describedby": mergeIds(ariaDescribedBy, message ? messageId : undefined, description ? descriptionId : undefined),
    size,
    ref: forwardedRef
  }), /* #__PURE__*/_jsx(Box, {
    paddingLeft: "small",
    flexGrow: 1
  }, void 0, /* #__PURE__*/_jsx(Inline, {
    space: "small"
  }, void 0, /* #__PURE__*/_jsx(Box, {
    component: "label",
    htmlFor: id,
    userSelect: "none",
    display: "block",
    className: [styles.labelBase, styles.labelOffset[size], virtualTouchable()]
  }, void 0, /* #__PURE__*/_jsx(Text, {
    weight: checked && !inList ? 'strong' : undefined,
    tone: disabled ? 'secondary' : undefined,
    size
  }, void 0, label)), badge ? /* #__PURE__*/_jsx(Box, {
    className: styles.badgeOffset[size]
  }, void 0, badge) : null), description ? /* #__PURE__*/_jsx(Box, {
    paddingTop: "small"
  }, void 0, /* #__PURE__*/_jsx(Text, {
    tone: "secondary",
    size,
    id: descriptionId
  }, void 0, description)) : null, children ? /* #__PURE__*/_jsx(Box, {
    display: "none",
    paddingTop: "small",
    className: styles.children
  }, void 0, children) : null)), hasMessage ? /* #__PURE__*/_jsx(Box, {
    paddingTop: description ? 'small' : 'xsmall'
  }, void 0, /* #__PURE__*/_jsx(FieldMessage, {
    id: messageId,
    tone,
    disabled,
    message,
    reserveMessageSpace
  })) : null);
});
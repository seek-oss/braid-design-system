import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box } from '../../Box/Box';
import { FieldLabel } from '../../FieldLabel/FieldLabel';
import { FieldMessage } from '../../FieldMessage/FieldMessage';
import { Stack } from '../../Stack/Stack';
import buildDataAttributes from '../buildDataAttributes';
import { mergeIds } from '../mergeIds';
export var FieldGroup = function FieldGroup(_ref) {
  var id = _ref.id,
      disabled = _ref.disabled,
      children = _ref.children,
      label = _ref.label,
      secondaryLabel = _ref.secondaryLabel,
      tertiaryLabel = _ref.tertiaryLabel,
      description = _ref.description,
      message = _ref.message,
      _ref$reserveMessageSp = _ref.reserveMessageSpace,
      reserveMessageSpace = _ref$reserveMessageSp === void 0 ? false : _ref$reserveMessageSp,
      tone = _ref.tone,
      required = _ref.required,
      role = _ref.role,
      _ref$space = _ref.space,
      space = _ref$space === void 0 ? 'xsmall' : _ref$space,
      data = _ref.data;
  var labelId = "".concat(id, "-label");
  var messageId = "".concat(id, "-message");
  var descriptionId = description ? "".concat(id, "-description") : undefined;
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: "fieldset",
    disabled: disabled,
    id: id,
    role: role,
    "aria-labelledby": label ? labelId : undefined,
    "aria-required": required
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(Stack, {
    space: space
  }, void 0, label ? /*#__PURE__*/_jsx(Box, {
    component: "legend",
    id: labelId
  }, void 0, /*#__PURE__*/_jsx(FieldLabel, {
    htmlFor: false,
    label: label,
    secondaryLabel: secondaryLabel,
    tertiaryLabel: tertiaryLabel,
    description: description,
    descriptionId: descriptionId
  })) : null, children({
    disabled: disabled,
    'aria-describedby': mergeIds(message ? messageId : undefined, descriptionId)
  }), message || reserveMessageSpace ? /*#__PURE__*/_jsx(FieldMessage, {
    id: messageId,
    tone: tone,
    disabled: disabled,
    message: message,
    reserveMessageSpace: reserveMessageSpace
  }) : null));
};
FieldGroup.displayName = "FieldGroup";
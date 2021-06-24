import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Box } from '../Box/Box';
import { Secondary } from '../Secondary/Secondary';
import { Strong } from '../Strong/Strong';
import { Text } from '../Text/Text';
import { Stack } from '../Stack/Stack';
export var FieldLabel = function FieldLabel(_ref) {
  var id = _ref.id,
      htmlFor = _ref.htmlFor,
      label = _ref.label,
      secondaryLabel = _ref.secondaryLabel,
      tertiaryLabel = _ref.tertiaryLabel,
      description = _ref.description,
      descriptionId = _ref.descriptionId,
      data = _ref.data;

  if (!label) {
    return null;
  }

  var labelEl = /*#__PURE__*/_jsx(Text, {}, void 0, /*#__PURE__*/_jsx(Strong, {}, void 0, label), secondaryLabel ? /*#__PURE__*/_jsx(Secondary, {}, void 0, "\xA0(", secondaryLabel, ")") : null);

  return /*#__PURE__*/_jsx(Stack, {
    space: "xsmall",
    data: data
  }, void 0, /*#__PURE__*/_jsx(Box, {
    component: "span",
    display: "flex",
    justifyContent: "spaceBetween"
  }, void 0, htmlFor === false ? labelEl : /*#__PURE__*/_jsx("label", {
    id: id,
    htmlFor: htmlFor
  }, void 0, labelEl), tertiaryLabel ? /*#__PURE__*/_jsx(Text, {}, void 0, "\xA0", tertiaryLabel) : null), description ? /*#__PURE__*/_jsx(Box, {
    paddingY: "xxsmall"
  }, void 0, /*#__PURE__*/_jsx(Text, {
    tone: "secondary",
    id: descriptionId
  }, void 0, description)) : null);
};
FieldLabel.displayName = "FieldLabel";
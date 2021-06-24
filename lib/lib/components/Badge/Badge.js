import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _typeof from "@babel/runtime/helpers/typeof";
import React, { forwardRef, Children } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { lineHeightContainer } from '../../atoms/lineHeightContainer.css';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Badge.css';
var validTones = ['promote', 'info', 'neutral', 'positive', 'caution', 'critical'];

var backgroundForTone = function backgroundForTone(tone, weight) {
  if (weight === 'strong') {
    return tone;
  }

  if (tone === 'positive') {
    return 'positiveLight';
  }

  if (tone === 'critical') {
    return 'criticalLight';
  }

  if (tone === 'info') {
    return 'infoLight';
  }

  if (tone === 'promote') {
    return 'promoteLight';
  }

  if (tone === 'neutral') {
    return 'neutralLight';
  }

  if (tone === 'caution') {
    return 'cautionLight';
  }
};

export var Badge = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref$tone = _ref.tone,
      tone = _ref$tone === void 0 ? 'info' : _ref$tone,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'regular' : _ref$weight,
      _ref$bleedY = _ref.bleedY,
      bleedY = _ref$bleedY === void 0 ? false : _ref$bleedY,
      title = _ref.title,
      children = _ref.children,
      id = _ref.id,
      data = _ref.data,
      tabIndex = _ref.tabIndex,
      ariaDescribedBy = _ref['aria-describedby'];
  assert(validTones.indexOf(tone) >= 0, "Badge tone of \"".concat(tone, "\" is not valid."));
  assert(Children.toArray(children).every(function (child) {
    return ['string', 'number'].includes(_typeof(child));
  }), 'Badge may only contain strings or numbers');
  return /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    cursor: "default",
    className: [lineHeightContainer[styles.constants.textSize], bleedY ? styles.bleedY : null]
  }, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/React.createElement(Box, {
    id: id,
    ref: ref,
    tabIndex: tabIndex,
    "aria-describedby": ariaDescribedBy,
    title: title !== null && title !== void 0 ? title : !ariaDescribedBy ? children : undefined,
    background: backgroundForTone(tone, weight),
    paddingX: "xsmall",
    borderRadius: "standard",
    overflow: "hidden"
  }, /*#__PURE__*/_jsx(Text, {
    component: "span",
    weight: "medium",
    size: styles.constants.textSize,
    tone: weight === 'regular' ? tone : undefined,
    truncate: true,
    baseline: false
  }, void 0, children)));
});
Badge.displayName = 'Badge';
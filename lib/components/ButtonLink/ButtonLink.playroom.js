import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["variant", "weight"];
import React, { forwardRef } from 'react';
import { buttonVariants, buttonWeights } from '../ButtonRenderer/ButtonRenderer';
import { ButtonLink as BraidButtonLink } from './ButtonLink';
export var ButtonLink = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var variant = _ref.variant,
      weight = _ref.weight,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
  var isValidVariant = variant && buttonVariants.indexOf(variant) > -1;
  return /*#__PURE__*/React.createElement(BraidButtonLink, _extends({
    ref: ref,
    variant: isValidVariant ? variant : undefined,
    weight: isValidWeight ? weight : undefined
  }, restProps));
});
ButtonLink.displayName = 'ButtonLink';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['variant', 'weight'];
import React, { forwardRef } from 'react';
import {
  buttonVariants,
  buttonWeights,
} from '../ButtonRenderer/ButtonRenderer';
import { Button as BraidButton } from './Button';
export var Button = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const variant = _ref.variant,
    weight = _ref.weight,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const isValidWeight = weight && buttonWeights.indexOf(weight) > -1;
  const isValidVariant = variant && buttonVariants.indexOf(variant) > -1;
  return /* #__PURE__*/ React.createElement(
    BraidButton,
    _extends(
      {
        ref,
        variant: isValidVariant ? variant : undefined,
        weight: isValidWeight ? weight : undefined,
      },
      restProps,
    ),
  );
});
Button.displayName = 'Button';

import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["children", "size", "tone", "weight", "variant", "bleedY", "loading", "data"];
import React, { forwardRef } from 'react';
import { PrivateButtonRenderer } from '../ButtonRenderer/ButtonRenderer';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import buildDataAttributes from '../private/buildDataAttributes';
export var ButtonLink = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var children = _ref.children,
      size = _ref.size,
      tone = _ref.tone,
      weight = _ref.weight,
      variant = _ref.variant,
      bleedY = _ref.bleedY,
      loading = _ref.loading,
      data = _ref.data,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var LinkComponent = useLinkComponent(ref);
  return /*#__PURE__*/_jsx(PrivateButtonRenderer, {
    size: size,
    tone: tone,
    weight: weight,
    variant: variant,
    loading: loading,
    bleedY: bleedY
  }, void 0, function (ButtonChildren, buttonProps) {
    return /*#__PURE__*/React.createElement(LinkComponent, _extends({
      ref: ref
    }, restProps, buttonProps, data ? buildDataAttributes(data) : undefined), /*#__PURE__*/_jsx(ButtonChildren, {}, void 0, children));
  });
});
ButtonLink.displayName = 'ButtonLink';
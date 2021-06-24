import _jsx from "@babel/runtime/helpers/jsx";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["weight", "showVisited", "hitArea", "data"];
import React, { forwardRef } from 'react';
import { PrivateTextLinkRenderer } from '../TextLinkRenderer/TextLinkRenderer';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
import buildDataAttributes from '../private/buildDataAttributes';
export var TextLink = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var weight = _ref.weight,
      showVisited = _ref.showVisited,
      hitArea = _ref.hitArea,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var LinkComponent = useLinkComponent(ref);
  return /*#__PURE__*/_jsx(PrivateTextLinkRenderer, {
    weight: weight,
    showVisited: showVisited,
    hitArea: hitArea
  }, void 0, function (styleProps) {
    return /*#__PURE__*/React.createElement(LinkComponent, _extends({
      ref: ref
    }, props, styleProps, data ? buildDataAttributes(data) : undefined));
  });
});
TextLink.displayName = 'TextLink';
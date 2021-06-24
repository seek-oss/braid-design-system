import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["id", "htmlFor"];
import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import { FieldLabel as BraidFieldLabel } from './FieldLabel';
export var FieldLabel = function FieldLabel(_ref) {
  var id = _ref.id,
      htmlFor = _ref.htmlFor,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var fallbackId = useFallbackId();
  var fallbackFor = useFallbackId();
  return /*#__PURE__*/React.createElement(BraidFieldLabel, _extends({
    id: id !== null && id !== void 0 ? id : fallbackId,
    htmlFor: htmlFor !== null && htmlFor !== void 0 ? htmlFor : fallbackFor
  }, restProps));
};
FieldLabel.displayName = "FieldLabel";
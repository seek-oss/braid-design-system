import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["hidden"];
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconVisibilitySvg } from './IconVisibilitySvg';
import { IconVisibilityHiddenSvg } from './IconVisibilityHiddenSvg';
export var IconVisibility = function IconVisibility(_ref) {
  var hidden = _ref.hidden,
      props = _objectWithoutProperties(_ref, _excluded);

  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: hidden ? IconVisibilityHiddenSvg : IconVisibilitySvg
  }, iconProps));
};
IconVisibility.displayName = "IconVisibility";
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["active"];
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconStarSvg } from './IconStarSvg';
import { IconStarActiveSvg } from './IconStarActiveSvg';
export var IconStar = function IconStar(_ref) {
  var _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      props = _objectWithoutProperties(_ref, _excluded);

  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: active ? IconStarActiveSvg : IconStarSvg
  }, iconProps));
};
IconStar.displayName = "IconStar";
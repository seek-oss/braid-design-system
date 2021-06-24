import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
const _excluded = ["active"];
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconHeartSvg } from './IconHeartSvg';
import { IconHeartActiveSvg } from './IconHeartActiveSvg';
export var IconHeart = function IconHeart(_ref) {
  const _ref$active = _ref.active,
      active = _ref$active === void 0 ? false : _ref$active,
      props = _objectWithoutProperties(_ref, _excluded);

  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: active ? IconHeartActiveSvg : IconHeartSvg
  }, iconProps));
};
IconHeart.displayName = "IconHeart";
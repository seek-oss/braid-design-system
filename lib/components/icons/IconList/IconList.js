import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconListSvg } from './IconListSvg';
export var IconList = function IconList(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconListSvg
  }, iconProps));
};
IconList.displayName = "IconList";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconGridSvg } from './IconGridSvg';
export var IconGrid = function IconGrid(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconGridSvg
  }, iconProps));
};
IconGrid.displayName = "IconGrid";
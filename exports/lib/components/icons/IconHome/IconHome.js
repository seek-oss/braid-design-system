import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconHomeSvg } from './IconHomeSvg';
export var IconHome = function IconHome(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconHomeSvg
  }, iconProps));
};
IconHome.displayName = "IconHome";
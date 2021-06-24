import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconNewWindowSvg } from './IconNewWindowSvg';
export var IconNewWindow = function IconNewWindow(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconNewWindowSvg
  }, iconProps));
};
IconNewWindow.displayName = "IconNewWindow";
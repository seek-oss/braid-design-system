import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconRefreshSvg } from './IconRefreshSvg';
export var IconRefresh = function IconRefresh(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconRefreshSvg
  }, iconProps));
};
IconRefresh.displayName = "IconRefresh";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconHistorySvg } from './IconHistorySvg';
export var IconHistory = function IconHistory(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconHistorySvg
  }, iconProps));
};
IconHistory.displayName = "IconHistory";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconStatisticsSvg } from './IconStatisticsSvg';
export var IconStatistics = function IconStatistics(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconStatisticsSvg
  }, iconProps));
};
IconStatistics.displayName = "IconStatistics";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconTimeSvg } from './IconTimeSvg';
export var IconTime = function IconTime(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconTimeSvg
  }, iconProps));
};
IconTime.displayName = "IconTime";
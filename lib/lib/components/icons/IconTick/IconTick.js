import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconTickSvg } from './IconTickSvg';
export var IconTick = function IconTick(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconTickSvg
  }, iconProps));
};
IconTick.displayName = "IconTick";
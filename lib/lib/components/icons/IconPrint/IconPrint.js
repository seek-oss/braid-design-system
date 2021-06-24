import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconPrintSvg } from './IconPrintSvg';
export var IconPrint = function IconPrint(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconPrintSvg
  }, iconProps));
};
IconPrint.displayName = "IconPrint";
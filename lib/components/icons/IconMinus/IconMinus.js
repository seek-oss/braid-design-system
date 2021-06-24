import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconMinusSvg } from './IconMinusSvg';
export var IconMinus = function IconMinus(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconMinusSvg
  }, iconProps));
};
IconMinus.displayName = "IconMinus";
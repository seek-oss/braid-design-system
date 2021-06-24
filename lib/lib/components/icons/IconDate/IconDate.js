import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDateSvg } from './IconDateSvg';
export var IconDate = function IconDate(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconDateSvg
  }, iconProps));
};
IconDate.displayName = "IconDate";
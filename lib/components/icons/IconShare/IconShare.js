import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconShareSvg } from './IconShareSvg';
export var IconShare = function IconShare(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconShareSvg
  }, iconProps));
};
IconShare.displayName = "IconShare";
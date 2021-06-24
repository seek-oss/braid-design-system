import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconImageSvg } from './IconImageSvg';
export var IconImage = function IconImage(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconImageSvg
  }, iconProps));
};
IconImage.displayName = "IconImage";
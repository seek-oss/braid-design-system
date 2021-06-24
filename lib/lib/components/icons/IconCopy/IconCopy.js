import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconCopySvg } from './IconCopySvg';
export var IconCopy = function IconCopy(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconCopySvg
  }, iconProps));
};
IconCopy.displayName = "IconCopy";
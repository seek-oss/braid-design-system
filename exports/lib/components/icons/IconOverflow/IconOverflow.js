import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconOverflowSvg } from './IconOverflowSvg';
export var IconOverflow = function IconOverflow(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconOverflowSvg
  }, iconProps));
};
IconOverflow.displayName = "IconOverflow";
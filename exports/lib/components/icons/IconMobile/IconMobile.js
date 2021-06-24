import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconMobileSvg } from './IconMobileSvg';
export var IconMobile = function IconMobile(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconMobileSvg
  }, iconProps));
};
IconMobile.displayName = "IconMobile";
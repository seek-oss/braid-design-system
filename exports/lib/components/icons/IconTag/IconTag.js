import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconTagSvg } from './IconTagSvg';
export var IconTag = function IconTag(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconTagSvg
  }, iconProps));
};
IconTag.displayName = "IconTag";
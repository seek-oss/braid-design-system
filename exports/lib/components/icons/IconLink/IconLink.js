import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconLinkSvg } from './IconLinkSvg';
export var IconLink = function IconLink(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconLinkSvg
  }, iconProps));
};
IconLink.displayName = "IconLink";
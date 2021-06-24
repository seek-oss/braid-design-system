import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconLinkBrokenSvg } from './IconLinkBrokenSvg';
export var IconLinkBroken = function IconLinkBroken(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconLinkBrokenSvg
  }, iconProps));
};
IconLinkBroken.displayName = "IconLinkBroken";
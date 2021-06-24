import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSecuritySvg } from './IconSecuritySvg';
export var IconSecurity = function IconSecurity(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSecuritySvg
  }, iconProps));
};
IconSecurity.displayName = "IconSecurity";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconPersonVerifiedSvg } from './IconPersonVerifiedSvg';
export var IconPersonVerified = function IconPersonVerified(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconPersonVerifiedSvg
  }, iconProps));
};
IconPersonVerified.displayName = "IconPersonVerified";
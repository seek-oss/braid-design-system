import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconComposeSvg } from './IconComposeSvg';
export var IconCompose = function IconCompose(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconComposeSvg
  }, iconProps));
};
IconCompose.displayName = "IconCompose";
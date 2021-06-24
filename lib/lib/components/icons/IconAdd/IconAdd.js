import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconAddSvg } from './IconAddSvg';
export var IconAdd = function IconAdd(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconAddSvg
  }, iconProps));
};
IconAdd.displayName = "IconAdd";
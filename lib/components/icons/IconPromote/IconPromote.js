import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconPromoteSvg } from './IconPromoteSvg';
export var IconPromote = function IconPromote(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconPromoteSvg
  }, iconProps));
};
IconPromote.displayName = "IconPromote";
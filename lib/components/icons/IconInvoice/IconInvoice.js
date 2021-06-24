import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconInvoiceSvg } from './IconInvoiceSvg';
export var IconInvoice = function IconInvoice(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconInvoiceSvg
  }, iconProps));
};
IconInvoice.displayName = "IconInvoice";
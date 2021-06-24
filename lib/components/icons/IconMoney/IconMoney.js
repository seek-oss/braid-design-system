import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconMoneySvg } from './IconMoneySvg';
export var IconMoney = function IconMoney(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconMoneySvg
  }, iconProps));
};
IconMoney.displayName = "IconMoney";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSendSvg } from './IconSendSvg';
export var IconSend = function IconSend(props) {
  var iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up'
    }
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconSendSvg
  }, iconProps));
};
IconSend.displayName = "IconSend";
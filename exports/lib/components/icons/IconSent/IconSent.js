import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSentSvg } from './IconSentSvg';
export var IconSent = function IconSent(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSentSvg
  }, iconProps));
};
IconSent.displayName = "IconSent";
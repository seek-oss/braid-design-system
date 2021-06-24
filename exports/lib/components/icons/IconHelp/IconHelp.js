import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconHelpSvg } from './IconHelpSvg';
export var IconHelp = function IconHelp(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconHelpSvg
  }, iconProps));
};
IconHelp.displayName = "IconHelp";
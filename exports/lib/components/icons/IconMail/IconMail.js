import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconMailSvg } from './IconMailSvg';
export var IconMail = function IconMail(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconMailSvg
  }, iconProps));
};
IconMail.displayName = "IconMail";
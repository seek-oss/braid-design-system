import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconEducationSvg } from './IconEducationSvg';
export var IconEducation = function IconEducation(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconEducationSvg
  }, iconProps));
};
IconEducation.displayName = "IconEducation";
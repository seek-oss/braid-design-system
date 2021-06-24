import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconResumeSvg } from './IconResumeSvg';
export var IconResume = function IconResume(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconResumeSvg
  }, iconProps));
};
IconResume.displayName = "IconResume";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconVideoSvg } from './IconVideoSvg';
export var IconVideo = function IconVideo(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconVideoSvg
  }, iconProps));
};
IconVideo.displayName = "IconVideo";
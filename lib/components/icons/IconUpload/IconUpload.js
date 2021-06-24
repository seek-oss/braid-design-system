import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconUploadSvg } from './IconUploadSvg';
export var IconUpload = function IconUpload(props) {
  var iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up'
    }
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconUploadSvg
  }, iconProps));
};
IconUpload.displayName = "IconUpload";
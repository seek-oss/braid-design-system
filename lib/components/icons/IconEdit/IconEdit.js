import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconEditSvg } from './IconEditSvg';
export var IconEdit = function IconEdit(props) {
  var iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up'
    }
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconEditSvg
  }, iconProps));
};
IconEdit.displayName = "IconEdit";
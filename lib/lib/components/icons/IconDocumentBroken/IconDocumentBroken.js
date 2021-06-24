import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDocumentBrokenSvg } from './IconDocumentBrokenSvg';
export var IconDocumentBroken = function IconDocumentBroken(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconDocumentBrokenSvg
  }, iconProps));
};
IconDocumentBroken.displayName = "IconDocumentBroken";
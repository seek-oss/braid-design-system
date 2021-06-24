import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconLanguageSvg } from './IconLanguageSvg';
export var IconLanguage = function IconLanguage(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconLanguageSvg
  }, iconProps));
};
IconLanguage.displayName = "IconLanguage";
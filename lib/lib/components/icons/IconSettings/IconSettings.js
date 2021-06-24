import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSettingsSvg } from './IconSettingsSvg';
export var IconSettings = function IconSettings(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconSettingsSvg
  }, iconProps));
};
IconSettings.displayName = "IconSettings";
import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconProfileSvg } from './IconProfileSvg';
export var IconProfile = function IconProfile(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconProfileSvg
  }, iconProps));
};
IconProfile.displayName = "IconProfile";
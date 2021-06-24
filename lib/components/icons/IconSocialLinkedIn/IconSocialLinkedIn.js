import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSocialLinkedInSvg } from './IconSocialLinkedInSvg';
export var IconSocialLinkedIn = function IconSocialLinkedIn(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconSocialLinkedInSvg
  }, iconProps));
};
IconSocialLinkedIn.displayName = "IconSocialLinkedIn";
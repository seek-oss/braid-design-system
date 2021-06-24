import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSocialFacebookSvg } from './IconSocialFacebookSvg';
export var IconSocialFacebook = function IconSocialFacebook(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconSocialFacebookSvg
  }, iconProps));
};
IconSocialFacebook.displayName = "IconSocialFacebook";
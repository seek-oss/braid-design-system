import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSocialInstagramSvg } from './IconSocialInstagramSvg';
export var IconSocialInstagram = function IconSocialInstagram(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSocialInstagramSvg
  }, iconProps));
};
IconSocialInstagram.displayName = "IconSocialInstagram";
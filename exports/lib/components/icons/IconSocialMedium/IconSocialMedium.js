import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSocialMediumSvg } from './IconSocialMediumSvg';
export var IconSocialMedium = function IconSocialMedium(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSocialMediumSvg
  }, iconProps));
};
IconSocialMedium.displayName = "IconSocialMedium";
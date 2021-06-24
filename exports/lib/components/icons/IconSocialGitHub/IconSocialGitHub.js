import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSocialGitHubSvg } from './IconSocialGitHubSvg';
export var IconSocialGitHub = function IconSocialGitHub(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSocialGitHubSvg
  }, iconProps));
};
IconSocialGitHub.displayName = "IconSocialGitHub";
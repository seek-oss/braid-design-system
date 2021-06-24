import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconRecommendedSvg } from './IconRecommendedSvg';
export var IconRecommended = function IconRecommended(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconRecommendedSvg
  }, iconProps));
};
IconRecommended.displayName = "IconRecommended";
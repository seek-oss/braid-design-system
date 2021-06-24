import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSearchSvg } from './IconSearchSvg';
export var IconSearch = function IconSearch(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSearchSvg
  }, iconProps));
};
IconSearch.displayName = "IconSearch";
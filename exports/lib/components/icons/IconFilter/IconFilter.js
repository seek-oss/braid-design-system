import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconFilterSvg } from './IconFilterSvg';
export var IconFilter = function IconFilter(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconFilterSvg
  }, iconProps));
};
IconFilter.displayName = "IconFilter";
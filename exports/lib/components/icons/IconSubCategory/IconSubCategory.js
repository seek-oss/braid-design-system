import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconSubCategorySvg } from './IconSubCategorySvg';
export var IconSubCategory = function IconSubCategory(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconSubCategorySvg
  }, iconProps));
};
IconSubCategory.displayName = "IconSubCategory";
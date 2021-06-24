import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconPersonAddSvg } from './IconPersonAddSvg';
export var IconPersonAdd = function IconPersonAdd(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconPersonAddSvg
  }, iconProps));
};
IconPersonAdd.displayName = "IconPersonAdd";
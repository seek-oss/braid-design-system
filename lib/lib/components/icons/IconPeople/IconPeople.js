import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconPeopleSvg } from './IconPeopleSvg';
export var IconPeople = function IconPeople(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconPeopleSvg
  }, iconProps));
};
IconPeople.displayName = "IconPeople";
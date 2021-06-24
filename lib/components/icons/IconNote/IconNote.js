import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconNoteSvg } from './IconNoteSvg';
export var IconNote = function IconNote(props) {
  var iconProps = useIcon(props);
  return /*#__PURE__*/React.createElement(Box, _extends({
    component: IconNoteSvg
  }, iconProps));
};
IconNote.displayName = "IconNote";
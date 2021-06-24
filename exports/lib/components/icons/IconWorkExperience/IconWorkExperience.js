import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconWorkExperienceSvg } from './IconWorkExperienceSvg';
export var IconWorkExperience = function IconWorkExperience(props) {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'up',
      lowercase: 'up'
    }
  });
  return /* #__PURE__*/React.createElement(Box, _extends({
    component: IconWorkExperienceSvg
  }, iconProps));
};
IconWorkExperience.displayName = "IconWorkExperience";
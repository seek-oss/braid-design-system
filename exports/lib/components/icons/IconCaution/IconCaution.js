import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconCautionSvg } from './IconCautionSvg';
export var IconCaution = function IconCaution(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconCautionSvg,
      },
      iconProps,
    ),
  );
};
IconCaution.displayName = 'IconCaution';

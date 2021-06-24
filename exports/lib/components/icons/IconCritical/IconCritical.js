import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconCriticalSvg } from './IconCriticalSvg';
export var IconCritical = function IconCritical(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconCriticalSvg,
      },
      iconProps,
    ),
  );
};
IconCritical.displayName = 'IconCritical';

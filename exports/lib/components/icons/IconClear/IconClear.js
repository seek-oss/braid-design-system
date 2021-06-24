import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconClearSvg } from './IconClearSvg';
export var IconClear = function IconClear(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconClearSvg,
      },
      iconProps,
    ),
  );
};
IconClear.displayName = 'IconClear';

import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDeleteSvg } from './IconDeleteSvg';
export var IconDelete = function IconDelete(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconDeleteSvg,
      },
      iconProps,
    ),
  );
};
IconDelete.displayName = 'IconDelete';

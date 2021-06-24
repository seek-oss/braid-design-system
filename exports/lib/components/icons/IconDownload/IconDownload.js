import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDownloadSvg } from './IconDownloadSvg';
export var IconDownload = function IconDownload(props) {
  const iconProps = useIcon(props, {
    verticalCorrection: {
      uppercase: 'none',
      lowercase: 'up',
    },
  });
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconDownloadSvg,
      },
      iconProps,
    ),
  );
};
IconDownload.displayName = 'IconDownload';

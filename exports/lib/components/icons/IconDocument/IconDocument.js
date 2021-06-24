import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconDocumentSvg } from './IconDocumentSvg';
export var IconDocument = function IconDocument(props) {
  const iconProps = useIcon(props);
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconDocumentSvg,
      },
      iconProps,
    ),
  );
};
IconDocument.displayName = 'IconDocument';

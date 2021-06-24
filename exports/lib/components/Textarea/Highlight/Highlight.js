import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box } from '../../Box/Box';
import * as styles from './Highlight.css';
export var Highlight = function Highlight(_ref) {
  const children = _ref.children;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      component: 'mark',
      borderRadius: 'standard',
      background: 'critical',
      className: styles.root,
    },
    void 0,
    children,
  );
};
Highlight.displayName = 'Highlight';

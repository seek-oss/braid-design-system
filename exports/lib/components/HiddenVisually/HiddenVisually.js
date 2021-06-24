import _extends from '@babel/runtime/helpers/extends';
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './HiddenVisually.css';
export var HiddenVisually = function HiddenVisually(_ref) {
  const id = _ref.id,
    data = _ref.data,
    children = _ref.children;
  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));
  const component = inText || inHeading ? 'span' : 'div';
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component,
        id,
        position: 'absolute',
        overflow: 'hidden',
        className: styles.root,
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    children,
  );
};
HiddenVisually.displayName = 'HiddenVisually';

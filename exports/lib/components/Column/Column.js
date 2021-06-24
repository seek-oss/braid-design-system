import _extends from '@babel/runtime/helpers/extends';
import React, { useContext } from 'react';
import { optimizeResponsiveArray } from '../../utils/optimizeResponsiveArray';
import { Box } from '../Box/Box';
import { ColumnsContext } from '../Columns/Columns';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Column.css';
export var Column = function Column(_ref) {
  const children = _ref.children,
    data = _ref.data,
    width = _ref.width;

  const _useContext = useContext(ColumnsContext),
    collapseMobile = _useContext.collapseMobile,
    collapseTablet = _useContext.collapseTablet,
    mobileSpace = _useContext.mobileSpace,
    tabletSpace = _useContext.tabletSpace,
    desktopSpace = _useContext.desktopSpace,
    collapsibleAlignmentChildProps = _useContext.collapsibleAlignmentChildProps;

  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        minWidth: 0,
        width: width !== 'content' ? 'full' : undefined,
        flexShrink: width === 'content' ? 0 : undefined,
        className: [
          styles.column,
          width !== 'content' ? styles.width[width] : null,
        ],
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          paddingLeft: optimizeResponsiveArray([
            collapseMobile ? 'none' : mobileSpace,
            collapseTablet ? 'none' : tabletSpace,
            desktopSpace,
          ]),
          paddingTop:
            collapseMobile || collapseTablet
              ? optimizeResponsiveArray([
                  collapseMobile ? mobileSpace : 'none',
                  collapseTablet ? tabletSpace : 'none',
                  'none',
                ])
              : undefined,
          height: 'full',
        },
        collapsibleAlignmentChildProps,
        {
          className: styles.columnContent,
        },
      ),
      children,
    ),
  );
};
Column.displayName = 'Column';

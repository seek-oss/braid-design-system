import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _Divider2;

import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import { Divider } from '../Divider/Divider';
import {
  negativeMarginTop,
  negativeMarginLeft,
} from '../../atoms/negativeMargin/negativeMargin';
import { resolveResponsiveProp } from '../../utils/resolveResponsiveProp';
import * as styles from './Tiles.css';
import { mapResponsiveValue } from '../../atoms/sprinkles.css';
import buildDataAttributes from '../private/buildDataAttributes';
export var Tiles = function Tiles(_ref) {
  let _Divider;

  const children = _ref.children,
    _ref$space = _ref.space,
    space = _ref$space === void 0 ? 'none' : _ref$space,
    _ref$columns = _ref.columns,
    columns = _ref$columns === void 0 ? 1 : _ref$columns,
    _ref$dividers = _ref.dividers,
    dividers = _ref$dividers === void 0 ? false : _ref$dividers,
    data = _ref.data;
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        className: negativeMarginTop(space),
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ _jsx(
      Box,
      {
        display: 'flex',
        flexWrap: 'wrap',
        className: negativeMarginLeft(space),
      },
      void 0,
      Children.map(flattenChildren(children), function (child, i) {
        return /* #__PURE__*/ _jsx(
          Box,
          {
            minWidth: 0,
            className: resolveResponsiveProp(
              columns,
              styles.columnsMobile,
              styles.columnsTablet,
              styles.columnsDesktop,
            ),
          },
          void 0,
          /* #__PURE__*/ _jsx(
            Box,
            {
              height: 'full', // This needs to be a separate element to support IE11.
              paddingTop: space,
              paddingLeft: space,
            },
            void 0,
            dividers && i > 0
              ? /* #__PURE__*/ _jsx(
                  Box,
                  {
                    paddingBottom: space,
                    display: mapResponsiveValue(columns, function (column) {
                      return column === 1 ? 'block' : 'none';
                    }),
                  },
                  void 0,
                  typeof dividers === 'string'
                    ? _Divider ||
                        (_Divider = /* #__PURE__*/ _jsx(Divider, {
                          weight: dividers,
                        }))
                    : _Divider2 ||
                        (_Divider2 = /* #__PURE__*/ _jsx(Divider, {})),
                )
              : null,
            child,
          ),
        );
      }),
    ),
  );
};
Tiles.displayName = 'Tiles';

import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box } from '../Box/Box';
import * as styles from './Divider.css';
const defaultWeight = 'regular';
export var Divider = function Divider(_ref) {
  const _ref$weight = _ref.weight,
    weight = _ref$weight === void 0 ? defaultWeight : _ref$weight;
  return /* #__PURE__*/ _jsx(
    Box,
    {
      position: 'relative',
    },
    void 0,
    /* #__PURE__*/ _jsx(Box, {
      position: 'absolute',
      width: 'full',
      className: [
        styles.base,
        styles.weight[weight] || styles.weight[defaultWeight],
      ],
    }),
  );
};
Divider.displayName = 'Divider';

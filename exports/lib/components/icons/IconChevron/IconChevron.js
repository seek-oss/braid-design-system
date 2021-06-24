import _extends from '@babel/runtime/helpers/extends';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['direction'],
  _excluded2 = ['className'];
import React from 'react';
import { Box } from '../../Box/Box';
import useIcon from '../../../hooks/useIcon';
import { IconChevronSvg } from './IconChevronSvg';
import * as styles from './IconChevron.css';
export var IconChevron = function IconChevron(_ref) {
  let _ref2;

  const _ref$direction = _ref.direction,
    direction = _ref$direction === void 0 ? 'down' : _ref$direction,
    props = _objectWithoutProperties(_ref, _excluded);

  const _useIcon = useIcon(props),
    className = _useIcon.className,
    iconProps = _objectWithoutProperties(_useIcon, _excluded2);

  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component: IconChevronSvg,
        className: [
          styles.root,
          className,
          ((_ref2 = {}),
          _defineProperty(_ref2, styles.up, direction === 'up'),
          _defineProperty(_ref2, styles.left, direction === 'left'),
          _defineProperty(_ref2, styles.right, direction === 'right'),
          _ref2),
        ],
      },
      iconProps,
    ),
  );
};
IconChevron.displayName = 'IconChevron';

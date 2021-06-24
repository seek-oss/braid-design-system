import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['width'],
  _excluded2 = ['width'];
import assert from 'assert';
import React from 'react';
import { Modal } from '../private/Modal/Modal';
import { ModalContent } from '../private/Modal/ModalContent';
export { AllowCloseContext } from '../private/Modal/Modal';
const validWidths = ['small', 'medium', 'large'];
const defaultWidth = 'medium';
const modalStyle = {
  position: 'right',
  headingLevel: '2',
  illustration: undefined,
};
export var Drawer = function Drawer(_ref) {
  const _ref$width = _ref.width,
    width = _ref$width === void 0 ? defaultWidth : _ref$width,
    restProps = _objectWithoutProperties(_ref, _excluded);

  assert(validWidths.indexOf(width) >= 0, 'Invalid width: '.concat(width));
  return /* #__PURE__*/ React.createElement(
    Modal,
    _extends(
      {
        width,
      },
      restProps,
      modalStyle,
    ),
  );
};
Drawer.displayName = 'Drawer';
export var DrawerContent = function DrawerContent(_ref2) {
  const _ref2$width = _ref2.width,
    width = _ref2$width === void 0 ? defaultWidth : _ref2$width,
    restProps = _objectWithoutProperties(_ref2, _excluded2);

  assert(validWidths.indexOf(width) >= 0, 'Invalid width: '.concat(width));
  return /* #__PURE__*/ React.createElement(
    ModalContent,
    _extends(
      {
        width,
      },
      restProps,
      modalStyle,
    ),
  );
};
DrawerContent.displayName = 'DrawerContent';

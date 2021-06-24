import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['tone'];
import React from 'react';
import { Alert as BraidAlert } from './Alert';
export var Alert = function Alert(_ref) {
  const tone = _ref.tone,
    restProps = _objectWithoutProperties(_ref, _excluded);

  return /* #__PURE__*/ React.createElement(
    BraidAlert,
    _extends(
      {
        tone: typeof tone !== 'boolean' ? tone : undefined,
      },
      restProps,
    ),
  );
};
Alert.displayName = 'Alert';

import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['tone'];
import React from 'react';
import { Notice as BraidNotice } from './Notice';
export var Notice = function Notice(_ref) {
  const tone = _ref.tone,
    restProps = _objectWithoutProperties(_ref, _excluded);

  return /* #__PURE__*/ React.createElement(
    BraidNotice,
    _extends(
      {
        tone: typeof tone !== 'boolean' ? tone : undefined,
      },
      restProps,
    ),
  );
};
Notice.displayName = 'Notice';

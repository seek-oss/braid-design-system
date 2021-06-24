import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['space', 'align', 'alignY'];
import React from 'react';
import { Columns as BraidColumns } from './Columns';
export var Columns = function Columns(_ref) {
  const space = _ref.space,
    align = _ref.align,
    alignY = _ref.alignY,
    restProps = _objectWithoutProperties(_ref, _excluded);

  return /* #__PURE__*/ React.createElement(
    BraidColumns,
    _extends(
      {
        space: typeof space !== 'boolean' ? space : 'none',
        align: typeof align !== 'boolean' ? align : undefined,
        alignY: typeof alignY !== 'boolean' ? alignY : undefined,
      },
      restProps,
    ),
  );
};
Columns.displayName = 'Columns';

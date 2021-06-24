import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['space', 'align', 'alignY', 'component'];
import React from 'react';
import { Inline as BraidInline, validInlineComponents } from './Inline';
export var Inline = function Inline(_ref) {
  const space = _ref.space,
    align = _ref.align,
    alignY = _ref.alignY,
    component = _ref.component,
    restProps = _objectWithoutProperties(_ref, _excluded);

  return /* #__PURE__*/ React.createElement(
    BraidInline,
    _extends(
      {
        space: typeof space !== 'boolean' ? space : 'none',
        align: typeof align !== 'boolean' ? align : undefined,
        alignY: typeof alignY !== 'boolean' ? alignY : undefined,
        component:
          component && validInlineComponents.indexOf(component) > -1
            ? component
            : undefined,
      },
      restProps,
    ),
  );
};
Inline.displayName = 'Inline';

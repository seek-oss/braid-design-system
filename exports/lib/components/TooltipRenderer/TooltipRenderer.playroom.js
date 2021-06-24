import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['id'];
import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import { TooltipRenderer as BraidTooltipRenderer } from './TooltipRenderer';
export var TooltipRenderer = function TooltipRenderer(_ref) {
  const id = _ref.id,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackId = useFallbackId();
  return /* #__PURE__*/ React.createElement(
    BraidTooltipRenderer,
    _extends(
      {
        id: id !== null && id !== void 0 ? id : fallbackId,
      },
      restProps,
    ),
  );
};
TooltipRenderer.displayName = 'TooltipRenderer';

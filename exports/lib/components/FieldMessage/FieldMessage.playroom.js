import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['id', 'tone'];
import React from 'react';
import { useFallbackId } from '../../playroom/utils';
import { FieldMessage as BraidFieldMessage, tones } from './FieldMessage';
export var FieldMessage = function FieldMessage(_ref) {
  const id = _ref.id,
    tone = _ref.tone,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const fallbackId = useFallbackId();
  return /* #__PURE__*/ React.createElement(
    BraidFieldMessage,
    _extends(
      {
        id: id !== null && id !== void 0 ? id : fallbackId,
        tone: tone && tones.indexOf(tone) > -1 ? tone : undefined,
      },
      restProps,
    ),
  );
};
FieldMessage.displayName = 'FieldMessage';

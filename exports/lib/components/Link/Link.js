import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['href', 'className'];
import clsx from 'clsx';
import React, { forwardRef } from 'react';
import { atoms } from '../../atoms/atoms';
import { useLinkComponent } from '../BraidProvider/BraidProvider';
export var Link = /* #__PURE__*/ forwardRef(function (_ref, ref) {
  const href = _ref.href,
    className = _ref.className,
    restProps = _objectWithoutProperties(_ref, _excluded);

  const LinkComponent = useLinkComponent(ref);
  return /* #__PURE__*/ React.createElement(
    LinkComponent,
    _extends(
      {
        ref,
        href,
        className: clsx(
          atoms({
            reset: 'a',
          }),
          className,
        ),
      },
      restProps,
    ),
  );
});
Link.displayName = 'Link';

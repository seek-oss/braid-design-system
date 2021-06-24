import _extends from '@babel/runtime/helpers/extends';
import React from 'react';
import { useWeight } from '../../hooks/typography';
import buildDataAttributes from '../private/buildDataAttributes';
export var Strong = function Strong(_ref) {
  const children = _ref.children,
    data = _ref.data,
    id = _ref.id;
  return /* #__PURE__*/ React.createElement(
    'strong',
    _extends(
      {
        className: useWeight('strong'),
        id,
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    children,
  );
};
Strong.displayName = 'Strong';

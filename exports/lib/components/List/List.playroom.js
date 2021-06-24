import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';

let _IconClear;

import React from 'react';
import { IconClear } from '../icons';
import { List as BraidList } from './List';
export var List = function List(props) {
  if (props.type === 'icon' && (!('icon' in props) || !props.icon)) {
    return /* #__PURE__*/ React.createElement(
      BraidList,
      _extends({}, props, {
        icon: _IconClear || (_IconClear = /* #__PURE__*/ _jsx(IconClear, {})),
      }),
    );
  }

  return /* #__PURE__*/ React.createElement(BraidList, props);
};
List.displayName = 'List';

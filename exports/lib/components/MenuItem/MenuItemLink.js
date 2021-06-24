import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Link } from '../Link/Link';
import { useMenuItem } from './useMenuItem';
export var MenuItemLink = function MenuItemLink(_ref) {
  const href = _ref.href,
    target = _ref.target,
    rel = _ref.rel,
    onClick = _ref.onClick,
    tone = _ref.tone,
    data = _ref.data,
    children = _ref.children;

  const _useMenuItem = useMenuItem({
      displayName: 'MenuItemLink',
      onClick,
      tone,
      data,
    }),
    menuItemProps = _useMenuItem.menuItemProps,
    MenuItemChildren = _useMenuItem.MenuItemChildren;

  return /* #__PURE__*/ React.createElement(
    Link,
    _extends({}, menuItemProps, {
      href,
      target,
      rel,
    }),
    /* #__PURE__*/ _jsx(
      MenuItemChildren,
      {
        tone,
      },
      void 0,
      children,
    ),
  );
};
MenuItemLink.displayName = 'MenuItemLink';

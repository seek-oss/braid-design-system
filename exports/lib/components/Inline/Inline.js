import _extends from '@babel/runtime/helpers/extends';
import assert from 'assert';
import React, { Children } from 'react';
import flattenChildren from 'react-keyed-flatten-children';
import { Box } from '../Box/Box';
import {
  negativeMarginLeft,
  negativeMarginTop,
} from '../../atoms/negativeMargin/negativeMargin';
import { resolveCollapsibleAlignmentProps } from '../../utils/collapsibleAlignmentProps';
import buildDataAttributes from '../private/buildDataAttributes';
export var validInlineComponents = ['div', 'ol', 'ul'];
export var Inline = function Inline(_ref) {
  const _ref$space = _ref.space,
    space = _ref$space === void 0 ? 'none' : _ref$space,
    align = _ref.align,
    alignY = _ref.alignY,
    collapseBelow = _ref.collapseBelow,
    reverse = _ref.reverse,
    _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'div' : _ref$component,
    data = _ref.data,
    children = _ref.children;
  assert(
    validInlineComponents.includes(component),
    "Invalid Inline component: '"
      .concat(component, "'. Should be one of [")
      .concat(
        validInlineComponents
          .map(function (c) {
            return "'".concat(c, "'");
          })
          .join(', '),
        ']',
      ),
  );
  const isList = component === 'ol' || component === 'ul';
  const inlineItemComponent = isList ? 'li' : 'div';

  const _resolveCollapsibleAl = resolveCollapsibleAlignmentProps({
      align,
      alignY,
      collapseBelow,
      reverse,
    }),
    collapsibleAlignmentProps = _resolveCollapsibleAl.collapsibleAlignmentProps,
    collapsibleAlignmentChildProps =
      _resolveCollapsibleAl.collapsibleAlignmentChildProps,
    orderChildren = _resolveCollapsibleAl.orderChildren;

  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        className: negativeMarginTop(space),
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          component,
          className: negativeMarginLeft(space),
          flexWrap: 'wrap',
        },
        collapsibleAlignmentProps,
      ),
      Children.map(orderChildren(flattenChildren(children)), function (child) {
        return child !== null && child !== undefined
          ? /* #__PURE__*/ React.createElement(
              Box,
              _extends(
                {
                  component: inlineItemComponent,
                  minWidth: 0,
                  marginLeft: space,
                  marginTop: space,
                },
                collapsibleAlignmentChildProps,
              ),
              child,
            )
          : null;
      }),
    ),
  );
};
Inline.displayName = 'Inline';

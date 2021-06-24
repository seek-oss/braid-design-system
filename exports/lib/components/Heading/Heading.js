import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import HeadingContext from './HeadingContext';
import { Box } from '../Box/Box';
import { useHeading } from '../../hooks/typography';
import buildDataAttributes from '../private/buildDataAttributes';
import { Truncate } from '../private/Truncate/Truncate';
const resolveDefaultComponent = {
  1: 'h1',
  2: 'h2',
  3: 'h3',
  4: 'h4',
};
export var Heading = function Heading(_ref) {
  const level = _ref.level,
    weight = _ref.weight,
    component = _ref.component,
    children = _ref.children,
    align = _ref.align,
    id = _ref.id,
    _ref$truncate = _ref.truncate,
    truncate = _ref$truncate === void 0 ? false : _ref$truncate,
    data = _ref.data;
  return /* #__PURE__*/ _jsx(
    HeadingContext.Provider,
    {
      value: true,
    },
    void 0,
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          id,
          component: component || resolveDefaultComponent[level],
          textAlign: align,
          className: useHeading({
            weight,
            level,
            baseline: true,
          }),
        },
        data ? buildDataAttributes(data) : undefined,
      ),
      truncate ? /* #__PURE__*/ _jsx(Truncate, {}, void 0, children) : children,
    ),
  );
};
Heading.displayName = 'Heading';

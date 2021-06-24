import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['children', 'component', 'tone', 'data'];
import assert from 'assert';
import React from 'react';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import { Box } from '../Box/Box';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Card.css';
export var validCardComponents = [
  'div',
  'article',
  'aside',
  'details',
  'main',
  'section',
];
export var Card = function Card(_ref) {
  const children = _ref.children,
    _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'div' : _ref$component,
    tone = _ref.tone,
    data = _ref.data,
    restProps = _objectWithoutProperties(_ref, _excluded);

  assert(
    validCardComponents.includes(component),
    "Invalid Card component: '"
      .concat(component, "'. Should be one of [")
      .concat(
        validCardComponents
          .map(function (c) {
            return "'".concat(c, "'");
          })
          .join(', '),
        ']',
      ),
  );
  let resolvedRounding;

  if ('rounded' in restProps) {
    resolvedRounding = 'standard';
  } else if ('roundedAbove' in restProps) {
    const _resolveResponsiveRan = resolveResponsiveRangeProps({
        above: restProps.roundedAbove,
      }),
      _resolveResponsiveRan2 = _slicedToArray(_resolveResponsiveRan, 3),
      roundedOnMobile = _resolveResponsiveRan2[0],
      roundedOnTablet = _resolveResponsiveRan2[1],
      roundedOnDesktop = _resolveResponsiveRan2[2];

    resolvedRounding = [
      roundedOnMobile ? 'standard' : 'none',
      roundedOnTablet ? 'standard' : 'none',
      roundedOnDesktop ? 'standard' : 'none',
    ];
  }

  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        component,
        position: 'relative',
        background: 'card',
        padding: 'gutter',
        borderRadius: resolvedRounding,
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    tone
      ? /* #__PURE__*/ _jsx(Box, {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          paddingLeft: 'xxsmall',
          borderRadius: resolvedRounding,
          background: tone,
          className: styles.toneKeyline,
        })
      : null,
    children,
  );
};
Card.displayName = 'Card';

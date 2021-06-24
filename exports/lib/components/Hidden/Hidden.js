import _extends from '@babel/runtime/helpers/extends';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useContext } from 'react';
import { Box } from '../Box/Box';
import { TextContext } from '../Text/TextContext';
import HeadingContext from '../Heading/HeadingContext';
import { resolveResponsiveRangeProps } from '../../utils/responsiveRangeProps';
import buildDataAttributes from '../private/buildDataAttributes';
import * as styles from './Hidden.css';
export var Hidden = function Hidden(_ref) {
  const children = _ref.children,
    component = _ref.component,
    above = _ref.above,
    below = _ref.below,
    screen = _ref.screen,
    print = _ref.print,
    inlineProp = _ref.inline,
    data = _ref.data;

  if (process.env.NODE_ENV === 'development' && screen) {
    // eslint-disable-next-line no-console
    console.warn(
      'You used the "screen" prop on Hidden, but this probably doesn\'t do what you expect. If you\'re trying to provide content to screen readers without rendering it to the screen, use the <HiddenVisually> component instead. The "screen" prop is likely to be deprecated in a future release.',
    );
  }

  const inText = Boolean(useContext(TextContext));
  const inHeading = Boolean(useContext(HeadingContext));
  const hiddenOnScreen = Boolean(screen);
  const hiddenOnPrint = Boolean(print);

  const _resolveResponsiveRan = resolveResponsiveRangeProps({
      above,
      below,
    }),
    _resolveResponsiveRan2 = _slicedToArray(_resolveResponsiveRan, 3),
    hiddenOnMobile = _resolveResponsiveRan2[0],
    hiddenOnTablet = _resolveResponsiveRan2[1],
    hiddenOnDesktop = _resolveResponsiveRan2[2];

  const inline =
    inlineProp !== null && inlineProp !== void 0
      ? inlineProp
      : inText || inHeading;
  const display = inline ? 'inline' : 'block';
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        display: hiddenOnScreen
          ? 'none'
          : [
              hiddenOnMobile ? 'none' : display,
              hiddenOnTablet ? 'none' : display,
              hiddenOnDesktop ? 'none' : display,
            ],
        className: hiddenOnPrint ? styles.hiddenOnPrint : undefined,
        component: component || (inline ? 'span' : 'div'),
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    children,
  );
};
Hidden.displayName = 'Hidden';

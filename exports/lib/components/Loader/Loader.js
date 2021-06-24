import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React from 'react';
import { Box } from '../Box/Box';
import { useBackgroundLightness } from '../Box/BackgroundContext';
import buildDataAttributes from '../private/buildDataAttributes';
import { atoms } from '../../atoms/atoms';
import * as styles from './Loader.css';
export var Loader = function Loader(_ref) {
  const _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'standard' : _ref$size,
    _ref$ariaLabel = _ref['aria-label'],
    ariaLabel = _ref$ariaLabel === void 0 ? 'Loading' : _ref$ariaLabel,
    _ref$delayVisibility = _ref.delayVisibility,
    delayVisibility =
      _ref$delayVisibility === void 0 ? false : _ref$delayVisibility,
    data = _ref.data;
  const parentBackgroundColor = useBackgroundLightness();
  return /* #__PURE__*/ React.createElement(
    Box,
    _extends(
      {
        display: 'flex',
        alignItems: 'center',
        className: [
          styles.rootSize[size],
          delayVisibility ? styles.delay : undefined,
        ],
        'aria-label': ariaLabel,
      },
      data ? buildDataAttributes(data) : undefined,
    ),
    /* #__PURE__*/ _jsx(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        className: [
          atoms({
            reset: 'svg',
          }),
          styles.size[size],
          styles.color[parentBackgroundColor],
        ].join(' '),
        viewBox: '0 0 300 134',
        'aria-hidden': true,
      },
      void 0,
      /* #__PURE__*/ _jsx('circle', {
        className: styles.circle,
        cy: '67',
        cx: '40',
        r: '40',
      }),
      /* #__PURE__*/ _jsx('circle', {
        className: styles.circle,
        cy: '67',
        cx: '150',
        r: '40',
      }),
      /* #__PURE__*/ _jsx('circle', {
        className: styles.circle,
        cy: '67',
        cx: '260',
        r: '40',
      }),
    ),
  );
};
Loader.displayName = 'Loader';

import _jsx from '@babel/runtime/helpers/jsx';
import _extends from '@babel/runtime/helpers/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/objectWithoutProperties';
const _excluded = ['themeName', 'breakpoint'];
import React from 'react';
import * as themes from '../../themes';
import { BraidProvider } from '../BraidProvider/BraidProvider';
import { BraidTestProviderContext } from './BraidTestProviderContext';
import { breakpointContext } from '../useBreakpoint/BreakpointProvider';
export var BraidTestProvider = function BraidTestProvider(_ref) {
  const _ref$themeName = _ref.themeName,
    themeName = _ref$themeName === void 0 ? 'wireframe' : _ref$themeName,
    _ref$breakpoint = _ref.breakpoint,
    breakpoint = _ref$breakpoint === void 0 ? null : _ref$breakpoint,
    restProps = _objectWithoutProperties(_ref, _excluded);

  return /* #__PURE__*/ _jsx(
    BraidTestProviderContext.Provider,
    {
      value: true,
    },
    void 0,
    /* #__PURE__*/ _jsx(
      breakpointContext.Provider,
      {
        value: breakpoint,
      },
      void 0,
      /* #__PURE__*/ React.createElement(
        BraidProvider,
        _extends({}, restProps, {
          theme: themes[themeName],
          styleBody: undefined,
        }),
      ),
    ),
  );
};
BraidTestProvider.displayName = 'BraidTestProvider';

import _extends from '@babel/runtime/helpers/extends';
import _jsx from '@babel/runtime/helpers/jsx';
import React, { useContext, useMemo } from 'react';
import assert from 'assert';
import { TextContext } from './TextContext';
import { Box } from '../Box/Box';
import buildDataAttributes from '../private/buildDataAttributes';
import { useText } from '../../hooks/typography';
import { useDefaultTextProps } from '../private/defaultTextProps';
import { Truncate } from '../private/Truncate/Truncate';
export var Text = function Text(_ref) {
  const id = _ref.id,
    _ref$component = _ref.component,
    component = _ref$component === void 0 ? 'span' : _ref$component,
    sizeProp = _ref.size,
    toneProp = _ref.tone,
    align = _ref.align,
    weightProp = _ref.weight,
    _ref$baseline = _ref.baseline,
    baseline = _ref$baseline === void 0 ? true : _ref$baseline,
    _ref$truncate = _ref.truncate,
    truncate = _ref$truncate === void 0 ? false : _ref$truncate,
    data = _ref.data,
    children = _ref.children;
  assert(
    !useContext(TextContext),
    'Text components should not be nested within each other',
  );

  const _useDefaultTextProps = useDefaultTextProps({
      size: sizeProp,
      weight: weightProp,
      tone: toneProp,
    }),
    size = _useDefaultTextProps.size,
    weight = _useDefaultTextProps.weight,
    tone = _useDefaultTextProps.tone;

  const textStyles = useText({
    weight,
    size,
    baseline,
    tone,
  }); // Prevent re-renders when context values haven't changed

  const textContextValue = useMemo(
    function () {
      return {
        tone,
        size,
        weight,
        baseline,
      };
    },
    [tone, size, weight, baseline],
  );
  return /* #__PURE__*/ _jsx(
    TextContext.Provider,
    {
      value: textContextValue,
    },
    void 0,
    /* #__PURE__*/ React.createElement(
      Box,
      _extends(
        {
          id,
          display: 'block',
          component,
          textAlign: align,
          className: textStyles,
        },
        data ? buildDataAttributes(data) : undefined,
      ),
      truncate ? /* #__PURE__*/ _jsx(Truncate, {}, void 0, children) : children,
    ),
  );
};
Text.displayName = 'Text';

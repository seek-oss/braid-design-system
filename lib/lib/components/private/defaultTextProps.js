import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { createContext, useContext, useMemo } from 'react';
var DefaultTextPropsContext = /*#__PURE__*/createContext({
  tone: undefined,
  weight: undefined,
  size: undefined
});
export var DefaultTextPropsProvider = function DefaultTextPropsProvider(_ref) {
  var size = _ref.size,
      weight = _ref.weight,
      tone = _ref.tone,
      children = _ref.children;
  var defaultTextProps = useMemo(function () {
    return {
      size: size,
      weight: weight,
      tone: tone
    };
  }, [size, weight, tone]);
  return /*#__PURE__*/_jsx(DefaultTextPropsContext.Provider, {
    value: defaultTextProps
  }, void 0, children);
};
DefaultTextPropsProvider.displayName = "DefaultTextPropsProvider";
export var useDefaultTextProps = function useDefaultTextProps(_ref2) {
  var _ref3, _ref4, _ref5;

  var sizeProp = _ref2.size,
      weightProp = _ref2.weight,
      toneProp = _ref2.tone;

  var _useContext = useContext(DefaultTextPropsContext),
      size = _useContext.size,
      weight = _useContext.weight,
      tone = _useContext.tone;

  return {
    size: (_ref3 = sizeProp !== null && sizeProp !== void 0 ? sizeProp : size) !== null && _ref3 !== void 0 ? _ref3 : 'standard',
    weight: (_ref4 = weightProp !== null && weightProp !== void 0 ? weightProp : weight) !== null && _ref4 !== void 0 ? _ref4 : 'regular',
    tone: (_ref5 = toneProp !== null && toneProp !== void 0 ? toneProp : tone) !== null && _ref5 !== void 0 ? _ref5 : 'neutral'
  };
};
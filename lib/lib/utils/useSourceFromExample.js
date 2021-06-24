import _defineProperty from "@babel/runtime/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

import noop from 'lodash/noop';
import useScope from '../playroom/useScope';
import reactElementToJsxString from 'react-element-to-jsx-string';
export var useSourceFromExample = function useSourceFromExample(id, _ref) {
  var Example = _ref.Example,
      codeOverride = _ref.code;
  var returnCode, returnValue;
  var playroomScope = useScope();

  if (Example) {
    var result = Example(_objectSpread({
      id: id,
      handler: noop
    }, playroomScope)); // eslint-disable-line new-cap

    if ('value' in result) {
      returnCode = result.code.replace(/id={id}/g, '');
      returnValue = result.value;
    } else {
      returnValue = result;
      returnCode = reactElementToJsxString(returnValue, {
        useBooleanShorthandSyntax: false,
        showDefaultProps: false,
        showFunctions: false,
        filterProps: ['onChange', 'onBlur', 'onFocus']
      });
    }
  }

  return {
    code: codeOverride !== null && codeOverride !== void 0 ? codeOverride : returnCode,
    value: returnValue
  };
};
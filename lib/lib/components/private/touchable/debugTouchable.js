import _defineProperty from "@babel/runtime/helpers/defineProperty";
export var debugTouchable = function debugTouchable() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$after = _ref.after,
      after = _ref$after === void 0 ? false : _ref$after;

  return process.env.NODE_ENV === 'production' ? {} : _defineProperty({}, "[data-braid-debug] &".concat(after ? ':after' : ''), {
    background: 'red',
    opacity: 0.2
  });
};
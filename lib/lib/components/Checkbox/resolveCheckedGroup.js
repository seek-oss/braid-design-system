export var resolveCheckedGroup = function resolveCheckedGroup(values) {
  var _values$;

  return values.some(function (value) {
    return value !== values[0];
  }) ? 'mixed' : (_values$ = values[0]) !== null && _values$ !== void 0 ? _values$ : false;
};
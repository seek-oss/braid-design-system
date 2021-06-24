export var optimizeResponsiveArray = function optimizeResponsiveArray(value) {
  var _values$, _values$2, _values$3;

  var lastValue;
  var values = value.map(function (v) {
    if (v !== lastValue && v !== null) {
      lastValue = v;
      return v;
    }

    return null;
  });
  return [(_values$ = values[0]) !== null && _values$ !== void 0 ? _values$ : null, (_values$2 = values[1]) !== null && _values$2 !== void 0 ? _values$2 : null, (_values$3 = values[2]) !== null && _values$3 !== void 0 ? _values$3 : null];
};
export default (function () {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keys = Object.keys(data);
  var dataAttributes = {};

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var key = _keys[_i];
    dataAttributes["data-".concat(key)] = data[key];
  }

  return dataAttributes;
});
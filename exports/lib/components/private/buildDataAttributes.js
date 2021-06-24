export default (function () {
  const data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  const keys = Object.keys(data);
  const dataAttributes = {};

  for (let _i = 0, _keys = keys; _i < _keys.length; _i++) {
    const key = _keys[_i];
    dataAttributes["data-".concat(key)] = data[key];
  }

  return dataAttributes;
});
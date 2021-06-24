export var mergeIds = function mergeIds() {
  for (var _len = arguments.length, ids = new Array(_len), _key = 0; _key < _len; _key++) {
    ids[_key] = arguments[_key];
  }

  const validIds = ids.filter(Boolean);

  if (validIds.length === 0) {
    return undefined;
  }

  return validIds.join(' ');
};
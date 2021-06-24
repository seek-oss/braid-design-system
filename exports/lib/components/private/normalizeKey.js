// Normalizes the 'key' property of a KeyboardEvent in IE/Edge
export function normalizeKey(_ref) {
  const key = _ref.key,
      keyCode = _ref.keyCode;

  if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
    return "Arrow".concat(key);
  }

  if (keyCode === 27) {
    return 'Escape';
  }

  return key;
}
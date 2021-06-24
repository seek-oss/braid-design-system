import { useThemeName } from '../useThemeName/useThemeName';
export var ThemeNameConsumer = function ThemeNameConsumer(_ref) {
  var children = _ref.children;
  return children(useThemeName());
};
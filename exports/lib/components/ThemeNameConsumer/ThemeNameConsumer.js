import { useThemeName } from '../useThemeName/useThemeName';
export var ThemeNameConsumer = function ThemeNameConsumer(_ref) {
  const children = _ref.children;
  return children(useThemeName());
};

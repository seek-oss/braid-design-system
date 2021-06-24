import { renderBackgroundProvider } from '../Box/BackgroundContext';
export var BackgroundProvider = function BackgroundProvider(_ref) {
  var type = _ref.type,
      children = _ref.children;
  return renderBackgroundProvider(type === 'dark' ? 'UNKNOWN_DARK' : 'UNKNOWN_LIGHT', children);
};
BackgroundProvider.displayName = 'BackgroundProvider';
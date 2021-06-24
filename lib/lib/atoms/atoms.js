import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["reset"];
import * as resetStyles from '../reset/reset.css';
import { sprinkles } from './sprinkles.css';
export var atoms = function atoms(_ref) {
  var reset = _ref.reset,
      rest = _objectWithoutProperties(_ref, _excluded);

  if (!reset) {
    return sprinkles(rest);
  }

  var elementReset = resetStyles.element[reset];
  var sprinklesClasses = sprinkles(rest);
  return "".concat(resetStyles.base).concat(elementReset ? " ".concat(elementReset) : '').concat(sprinklesClasses ? " ".concat(sprinklesClasses) : '');
};
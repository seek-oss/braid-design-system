import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["space", "columns"];
import React from 'react';
import { Tiles as BraidTiles } from './Tiles';
export var Tiles = function Tiles(_ref) {
  var space = _ref.space,
      columns = _ref.columns,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidTiles, _extends({
    space: typeof space !== 'boolean' ? space : 'none',
    columns: typeof columns === 'boolean' || !columns ? 1 : columns
  }, restProps));
};
Tiles.displayName = "Tiles";
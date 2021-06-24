import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["rating"];
import React from 'react';
import { Rating as BraidRating } from './Rating';
export var Rating = function Rating(_ref) {
  var rating = _ref.rating,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidRating, _extends({
    rating: typeof rating === 'number' ? rating : 0
  }, restProps));
};
Rating.displayName = "Rating";
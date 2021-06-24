import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
var _excluded = ["space", "size", "tone"];
import React from 'react';
import { mapResponsiveValue } from '../../atoms/sprinkles.css';
import { wireframe } from '../../themes';
import { Accordion as BraidAccordion, validSpaceValues } from './Accordion';
var spaceScale = ['none'].concat(_toConsumableArray(Object.keys(wireframe.space.space)));

var filterSpace = function filterSpace(space) {
  var filteredSpace = mapResponsiveValue(space, function (value) {
    if (spaceScale.includes(value) && !validSpaceValues.includes(value)) {
      throw new Error("To ensure adequate space for touch targets, 'space' prop values must be one of the following: ".concat(validSpaceValues.map(function (x) {
        return "\"".concat(x, "\"");
      }).join(', ')));
    }

    return validSpaceValues.includes(value) ? value : 'medium';
  });
  return filteredSpace;
};

export var Accordion = function Accordion(_ref) {
  var space = _ref.space,
      size = _ref.size,
      tone = _ref.tone,
      restProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(BraidAccordion, _extends({
    size: typeof size === 'boolean' ? undefined : size,
    tone: typeof tone === 'boolean' ? undefined : tone,
    space: typeof space === 'string' || Array.isArray(space) ? filterSpace(space) : undefined
  }, restProps));
};
Accordion.displayName = "Accordion";
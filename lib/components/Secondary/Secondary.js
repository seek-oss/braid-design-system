import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { useTextTone } from '../../hooks/typography';
import buildDataAttributes from '../private/buildDataAttributes';
export var Secondary = function Secondary(_ref) {
  var children = _ref.children,
      data = _ref.data,
      id = _ref.id;
  return /*#__PURE__*/React.createElement("span", _extends({
    className: useTextTone({
      tone: 'secondary'
    }),
    id: id
  }, data ? buildDataAttributes(data) : undefined), children);
};
Secondary.displayName = "Secondary";
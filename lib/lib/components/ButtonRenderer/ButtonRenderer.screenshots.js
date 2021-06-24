import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonRenderer } from '../';

var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_jsx("div", {
    style: {
      maxWidth: '300px'
    }
  }, void 0, children);
};

Container.displayName = "Container";
export var screenshots = {
  screenshotWidths: [320],
  examples: [{
    label: 'Button with Custom Renderer',
    Container: Container,
    Example: function Example() {
      return /*#__PURE__*/_jsx(ButtonRenderer, {}, void 0, function (ButtonChildren, buttonProps) {
        return /*#__PURE__*/React.createElement(Link, _extends({
          to: "#"
        }, buttonProps), /*#__PURE__*/_jsx(ButtonChildren, {}, void 0, "Link button"));
      });
    }
  }]
};
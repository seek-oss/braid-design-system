import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { menuTestSuite } from './testHelper';
import { MenuRenderer } from './MenuRenderer';
menuTestSuite({
  name: 'Base',
  Component: function Component(props) {
    return /*#__PURE__*/React.createElement(MenuRenderer, _extends({
      trigger: function trigger(triggerProps) {
        return /*#__PURE__*/React.createElement("button", triggerProps, "Menu");
      }
    }, props));
  }
});
import _jsx from "@babel/runtime/helpers/jsx";
import React from 'react';
import { OverflowMenu, MenuItemCheckbox, Box } from '..';
import source from '../../utils/source.macro';
export var galleryItems = [{
  background: 'card',
  Example: function Example(_ref) {
    var setDefaultState = _ref.setDefaultState,
        getState = _ref.getState,
        toggleState = _ref.toggleState;
    return source( /*#__PURE__*/React.createElement(React.Fragment, null, setDefaultState('checked1', false), setDefaultState('checked2', false), setDefaultState('checked3', false), /*#__PURE__*/_jsx(Box, {
      style: {
        paddingLeft: 200
      }
    }, void 0, /*#__PURE__*/_jsx(OverflowMenu, {
      label: "Checklist"
    }, void 0, /*#__PURE__*/_jsx(MenuItemCheckbox, {
      checked: getState('checked1'),
      onChange: function onChange() {
        return toggleState('checked1');
      }
    }, void 0, "Checkbox"), /*#__PURE__*/_jsx(MenuItemCheckbox, {
      checked: getState('checked2'),
      onChange: function onChange() {
        return toggleState('checked2');
      }
    }, void 0, "Checkbox"), /*#__PURE__*/_jsx(MenuItemCheckbox, {
      checked: getState('checked3'),
      onChange: function onChange() {
        return toggleState('checked3');
      }
    }, void 0, "Checkbox")))));
  }
}];
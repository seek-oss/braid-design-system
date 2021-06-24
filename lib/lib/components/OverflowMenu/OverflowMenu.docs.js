import _jsx from "@babel/runtime/helpers/jsx";

var _Text, _IconDelete;

import React from 'react';
import source from '../../utils/source.macro';
import { OverflowMenu, MenuItem, MenuItemLink, Text, TextLink, Strong, Box, Dialog, Stack, Actions, Button, IconDelete } from '../';
var docs = {
  category: 'Content',
  Example: function Example() {
    return source( /*#__PURE__*/_jsx(Box, {
      style: {
        paddingLeft: '100px',
        maxWidth: '200px'
      }
    }, void 0, /*#__PURE__*/_jsx(OverflowMenu, {
      label: "Options"
    }, void 0, /*#__PURE__*/_jsx(MenuItem, {
      onClick: function onClick() {}
    }, void 0, "Button"), /*#__PURE__*/_jsx(MenuItemLink, {
      href: "#",
      onClick: function onClick() {}
    }, void 0, "Link"))));
  },
  accessibility: /*#__PURE__*/_jsx(Text, {}, void 0, "Follows the", ' ', /*#__PURE__*/_jsx(TextLink, {
    href: "https://www.w3.org/TR/wai-aria-practices-1.1/#menu"
  }, void 0, "WAI-ARIA Menu Pattern.")),
  alternatives: [{
    name: 'MenuRenderer',
    description: 'For custom menu components.'
  }],
  additional: [{
    label: 'Destructive actions',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "For destructive actions like \u201CDelete\u201D you can set the menu item\u2019s", ' ', /*#__PURE__*/_jsx(Strong, {}, void 0, "tone"), " to ", /*#__PURE__*/_jsx(Strong, {}, void 0, "critical."), " When using this feature, you may want to consider providing a confirmation via a", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/Dialog"
    }, void 0, "Dialog.")),
    Example: function Example(_ref) {
      var id = _ref.id,
          getState = _ref.getState,
          toggleState = _ref.toggleState,
          showToast = _ref.showToast;
      return source( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/_jsx(Box, {
        paddingLeft: "xxlarge"
      }, void 0, /*#__PURE__*/_jsx(OverflowMenu, {
        label: "Options"
      }, void 0, /*#__PURE__*/_jsx(MenuItem, {
        onClick: function onClick() {
          return toggleState('confirm');
        },
        tone: "critical"
      }, void 0, "Delete"))), /*#__PURE__*/_jsx(Dialog, {
        id: id,
        width: "content",
        title: "Delete item?",
        open: getState('confirm'),
        onClose: function onClose() {
          return toggleState('confirm');
        }
      }, void 0, /*#__PURE__*/_jsx(Stack, {
        space: "large"
      }, void 0, _Text || (_Text = /*#__PURE__*/_jsx(Text, {
        tone: "secondary"
      }, void 0, "Are you sure you want to delete this item?")), /*#__PURE__*/_jsx(Actions, {}, void 0, /*#__PURE__*/_jsx(Button, {
        tone: "critical",
        onClick: function onClick() {
          toggleState('confirm');
          showToast({
            tone: 'positive',
            message: 'Item successfully deleted',
            key: 'itemDeleted'
          });
        }
      }, void 0, _IconDelete || (_IconDelete = /*#__PURE__*/_jsx(IconDelete, {})), " Delete"), /*#__PURE__*/_jsx(Button, {
        variant: "transparent",
        onClick: function onClick() {
          return toggleState('confirm');
        }
      }, void 0, "Cancel"))))));
    }
  }, {
    label: 'Development considerations',
    description: /*#__PURE__*/_jsx(Text, {}, void 0, "Child nodes must be", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/MenuItem"
    }, void 0, "MenuItem"), ",", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/MenuItemCheckbox"
    }, void 0, "MenuItemCheckbox"), ' ', "or", ' ', /*#__PURE__*/_jsx(TextLink, {
      href: "/components/MenuItemDivider"
    }, void 0, "MenuItemDivider"), ' ', "elements.")
  }]
};
export default docs;
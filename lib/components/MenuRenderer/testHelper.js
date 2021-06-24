import _jsx from "@babel/runtime/helpers/jsx";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

var _MenuItemDivider, _MenuItemDivider2;

import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import genericUserEvent from '@testing-library/user-event';
import { BraidTestProvider, MenuItem, MenuItemLink, MenuItemCheckbox, MenuItemDivider } from '..';
// The generic `user-event` library currently doesn't have knowledge
// of the react lifecycle, e.g. it's methods are not wrapped with
// the `act` function. See issue for details:
// https://github.com/testing-library/user-event/issues/128
var userEvent = {
  click: function click(el) {
    return act(function () {
      return genericUserEvent.click(el);
    });
  }
};
var TAB = 9;
var ENTER = 13;
var ESCAPE = 27;
var SPACE = 32;
var ARROW_UP = 38;
var ARROW_DOWN = 40;
export var menuTestSuite = function menuTestSuite(_ref) {
  var name = _ref.name,
      Component = _ref.Component;

  function renderMenu() {
    var openHandler = jest.fn();
    var closeHandler = jest.fn();
    var menuItemHandler = jest.fn();
    var parentHandler = jest.fn();

    var TestCase = function TestCase() {
      var _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          checked = _useState2[0],
          setChecked = _useState2[1];

      return /*#__PURE__*/_jsx(BraidTestProvider, {}, void 0, /*#__PURE__*/_jsx("div", {
        onClick: parentHandler
      }, void 0, /*#__PURE__*/_jsx(Component, {
        onOpen: openHandler,
        onClose: closeHandler
      }, void 0, /*#__PURE__*/_jsx(MenuItem, {
        onClick: function onClick() {
          return menuItemHandler('MenuItem');
        }
      }, void 0, "MenuItem"), _MenuItemDivider || (_MenuItemDivider = /*#__PURE__*/_jsx(MenuItemDivider, {})), /*#__PURE__*/_jsx(MenuItemLink, {
        href: "#",
        onClick: function onClick() {
          return menuItemHandler('MenuItemLink');
        }
      }, void 0, "MenuItemLink"), _MenuItemDivider2 || (_MenuItemDivider2 = /*#__PURE__*/_jsx(MenuItemDivider, {})), /*#__PURE__*/_jsx(MenuItemCheckbox, {
        checked: checked,
        onChange: function onChange(value) {
          setChecked(value);
          menuItemHandler('MenuItemCheckbox');
        }
      }, void 0, "MenuItemCheckbox"))));
    };

    var _render = render( /*#__PURE__*/_jsx(TestCase, {})),
        getAllByRole = _render.getAllByRole;

    return {
      getAllByRole: getAllByRole,
      openHandler: openHandler,
      closeHandler: closeHandler,
      menuItemHandler: menuItemHandler,
      parentHandler: parentHandler
    };
  }

  function getElements(_ref2) {
    var getAllByRole = _ref2.getAllByRole;
    return {
      menuButton: getAllByRole(function (_, el) {
        return Boolean(el === null || el === void 0 ? void 0 : el.getAttribute('aria-haspopup'));
      })[0],
      menu: getAllByRole('menu', {
        hidden: true
      })[0],
      menuItems: getAllByRole(/menuitem|menuitemcheckbox/, {
        hidden: true
      })
    };
  }

  describe("Menu: ".concat(name), function () {
    describe('Mouse interactions', function () {
      afterEach(cleanup);
      it('should open menu when clicked', function () {
        var _renderMenu = renderMenu(),
            getAllByRole = _renderMenu.getAllByRole,
            openHandler = _renderMenu.openHandler,
            closeHandler = _renderMenu.closeHandler;

        var _getElements = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements.menu,
            menuButton = _getElements.menuButton;

        expect(menu).not.toBeVisible();
        userEvent.click(menuButton);
        expect(menu).toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });
      it('should toggle the menu when clicked again', function () {
        var _renderMenu2 = renderMenu(),
            getAllByRole = _renderMenu2.getAllByRole,
            closeHandler = _renderMenu2.closeHandler;

        var _getElements2 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements2.menu,
            menuButton = _getElements2.menuButton;

        userEvent.click(menuButton);
        userEvent.click(menuButton);
        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });
      it('should set the focused menu item on mouse over', function () {
        var _renderMenu3 = renderMenu(),
            getAllByRole = _renderMenu3.getAllByRole;

        var _getElements3 = getElements({
          getAllByRole: getAllByRole
        }),
            menuButton = _getElements3.menuButton,
            initialMenuItems = _getElements3.menuItems;

        userEvent.click(menuButton);
        fireEvent.mouseOver(initialMenuItems[2]);

        var _getElements4 = getElements({
          getAllByRole: getAllByRole
        }),
            mouseOverMenuItems = _getElements4.menuItems;

        expect(mouseOverMenuItems[2]).toHaveFocus();
      });
      it('should unfocus all menu items on mouse out', function () {
        var _renderMenu4 = renderMenu(),
            getAllByRole = _renderMenu4.getAllByRole;

        var _getElements5 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements5.menu,
            menuButton = _getElements5.menuButton,
            menuItems = _getElements5.menuItems;

        userEvent.click(menuButton);
        fireEvent.mouseOver(menuItems[1]);
        fireEvent.mouseOut(menu);

        var _getElements6 = getElements({
          getAllByRole: getAllByRole
        }),
            mouseOutMenuItems = _getElements6.menuItems;

        expect(mouseOutMenuItems[0]).not.toHaveFocus();
        expect(mouseOutMenuItems[1]).not.toHaveFocus();
        expect(mouseOutMenuItems[2]).not.toHaveFocus();
      });
      it('should trigger the click handler on a MenuItem', function () {
        var _renderMenu5 = renderMenu(),
            getAllByRole = _renderMenu5.getAllByRole,
            openHandler = _renderMenu5.openHandler,
            closeHandler = _renderMenu5.closeHandler,
            menuItemHandler = _renderMenu5.menuItemHandler,
            parentHandler = _renderMenu5.parentHandler;

        var _getElements7 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements7.menu,
            menuButton = _getElements7.menuButton,
            menuItems = _getElements7.menuItems;

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible(); // `userEvent` is clashing with state update from the `onMouseEnter` handler
        // on menu item. Need to use `fireEvent`.

        fireEvent.click(menuItems[0]);
        expect(menu).not.toBeVisible();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus(); // Should not bubble

        expect(parentHandler).not.toHaveBeenCalled();
      });
      it('should toggle the state on a MenuItemCheckbox', function () {
        var _renderMenu6 = renderMenu(),
            getAllByRole = _renderMenu6.getAllByRole,
            openHandler = _renderMenu6.openHandler,
            closeHandler = _renderMenu6.closeHandler,
            menuItemHandler = _renderMenu6.menuItemHandler;

        var _getElements8 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements8.menu,
            menuButton = _getElements8.menuButton,
            menuItems = _getElements8.menuItems;

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        var menuItemCheckbox = menuItems[2];
        expect(menuItemCheckbox.getAttribute('aria-checked')).toBe('false');
        userEvent.click(menuItemCheckbox);
        expect(menuItemCheckbox.getAttribute('aria-checked')).toBe('true');
        expect(menu).toBeVisible();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).not.toHaveBeenCalled();
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
        expect(menuItemCheckbox).toHaveFocus();
      });
    });
    describe('Keyboard interactions', function () {
      afterEach(cleanup);
      it('should open the menu with enter key', function () {
        var _renderMenu7 = renderMenu(),
            getAllByRole = _renderMenu7.getAllByRole,
            openHandler = _renderMenu7.openHandler,
            closeHandler = _renderMenu7.closeHandler;

        var _getElements9 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements9.menu,
            menuButton = _getElements9.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });

        var _getElements10 = getElements({
          getAllByRole: getAllByRole
        }),
            menuItems = _getElements10.menuItems;

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });
      it('should open the menu with space key', function () {
        var _renderMenu8 = renderMenu(),
            getAllByRole = _renderMenu8.getAllByRole,
            openHandler = _renderMenu8.openHandler,
            closeHandler = _renderMenu8.closeHandler;

        var _getElements11 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements11.menu,
            menuButton = _getElements11.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: SPACE
        });

        var _getElements12 = getElements({
          getAllByRole: getAllByRole
        }),
            menuItems = _getElements12.menuItems;

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });
      it('should open the menu with down arrow key', function () {
        var _renderMenu9 = renderMenu(),
            getAllByRole = _renderMenu9.getAllByRole,
            openHandler = _renderMenu9.openHandler,
            closeHandler = _renderMenu9.closeHandler;

        var _getElements13 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements13.menu,
            menuButton = _getElements13.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: ARROW_DOWN
        });

        var _getElements14 = getElements({
          getAllByRole: getAllByRole
        }),
            menuItems = _getElements14.menuItems;

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });
      it('should open the menu with up arrow key', function () {
        var _renderMenu10 = renderMenu(),
            getAllByRole = _renderMenu10.getAllByRole,
            openHandler = _renderMenu10.openHandler,
            closeHandler = _renderMenu10.closeHandler;

        var _getElements15 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements15.menu,
            menuButton = _getElements15.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: ARROW_UP
        });

        var _getElements16 = getElements({
          getAllByRole: getAllByRole
        }),
            menuItems = _getElements16.menuItems;

        expect(menu).toBeVisible();
        expect(menuItems[2]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });
      it('should close the menu with escape key', function () {
        var _renderMenu11 = renderMenu(),
            getAllByRole = _renderMenu11.getAllByRole,
            openHandler = _renderMenu11.openHandler,
            closeHandler = _renderMenu11.closeHandler;

        var _getElements17 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements17.menu,
            menuButton = _getElements17.menuButton,
            menuItems = _getElements17.menuItems;

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        fireEvent.keyUp(menuItems[0], {
          keyCode: ESCAPE
        });
        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });
      it('should close the menu with tab key', function () {
        var _renderMenu12 = renderMenu(),
            getAllByRole = _renderMenu12.getAllByRole,
            openHandler = _renderMenu12.openHandler,
            closeHandler = _renderMenu12.closeHandler;

        var _getElements18 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements18.menu,
            menuButton = _getElements18.menuButton,
            menuItems = _getElements18.menuItems;

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        fireEvent.keyDown(menuItems[0], {
          keyCode: TAB
        });
        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });
      it('should be able to navigate down the list and back to the start', function () {
        var _renderMenu13 = renderMenu(),
            getAllByRole = _renderMenu13.getAllByRole;

        var _getElements19 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements19.menu,
            menuButton = _getElements19.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: ARROW_DOWN
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0];
        expect(firstMenuItem).toHaveFocus();
        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        var secondDown = getElements({
          getAllByRole: getAllByRole
        });
        var secondMenuItem = secondDown.menuItems[1];
        expect(secondMenuItem).toHaveFocus();
        fireEvent.keyUp(secondMenuItem, {
          keyCode: ARROW_DOWN
        });
        var thirdDown = getElements({
          getAllByRole: getAllByRole
        });
        var thirdMenuItem = thirdDown.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();
        fireEvent.keyUp(thirdMenuItem, {
          keyCode: ARROW_DOWN
        });
        var forthDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItemAgain = forthDown.menuItems[0];
        expect(firstMenuItemAgain).toHaveFocus();
      });
      it('should be able to navigate up the list and back to the end', function () {
        var _renderMenu14 = renderMenu(),
            getAllByRole = _renderMenu14.getAllByRole;

        var _getElements20 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements20.menu,
            menuButton = _getElements20.menuButton;

        expect(menu).not.toBeVisible();
        fireEvent.keyUp(menuButton, {
          keyCode: ARROW_UP
        });
        var firstUp = getElements({
          getAllByRole: getAllByRole
        });
        var thirdMenuItem = firstUp.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();
        fireEvent.keyUp(thirdMenuItem, {
          keyCode: ARROW_UP
        });
        var secondUp = getElements({
          getAllByRole: getAllByRole
        });
        var secondMenuItem = secondUp.menuItems[1];
        expect(secondMenuItem).toHaveFocus();
        fireEvent.keyUp(secondMenuItem, {
          keyCode: ARROW_UP
        });
        var thirdUp = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = thirdUp.menuItems[0];
        expect(firstMenuItem).toHaveFocus();
        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_UP
        });
        var forthUp = getElements({
          getAllByRole: getAllByRole
        });
        var lastMenuItemAgain = forthUp.menuItems[2];
        expect(lastMenuItemAgain).toHaveFocus();
      });
      it('should trigger the click handler on MenuItem when selecting it with enter', function () {
        var _renderMenu15 = renderMenu(),
            getAllByRole = _renderMenu15.getAllByRole,
            closeHandler = _renderMenu15.closeHandler,
            menuItemHandler = _renderMenu15.menuItemHandler;

        var _getElements21 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements21.menu,
            menuButton = _getElements21.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Action the item

        fireEvent.keyUp(firstMenuItem, {
          keyCode: ENTER
        });
        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });
      it('should trigger the click handler on MenuItem when selecting it with space', function () {
        var _renderMenu16 = renderMenu(),
            getAllByRole = _renderMenu16.getAllByRole,
            closeHandler = _renderMenu16.closeHandler,
            menuItemHandler = _renderMenu16.menuItemHandler;

        var _getElements22 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements22.menu,
            menuButton = _getElements22.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Action the item

        fireEvent.keyUp(firstMenuItem, {
          keyCode: SPACE
        });
        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });
      it('should trigger the click handler on MenuItemLink when selecting it with enter', function () {
        var _renderMenu17 = renderMenu(),
            getAllByRole = _renderMenu17.getAllByRole,
            closeHandler = _renderMenu17.closeHandler,
            menuItemHandler = _renderMenu17.menuItemHandler;

        var _getElements23 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements23.menu,
            menuButton = _getElements23.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Navigate down

        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        var secondDown = getElements({
          getAllByRole: getAllByRole
        });
        var secondMenuItem = secondDown.menuItems[1]; // Action the item

        fireEvent.keyUp(secondMenuItem, {
          keyCode: ENTER
        });
        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });
      it('should trigger the click handler on MenuItemLink when selecting it with space', function () {
        var _renderMenu18 = renderMenu(),
            getAllByRole = _renderMenu18.getAllByRole,
            closeHandler = _renderMenu18.closeHandler,
            menuItemHandler = _renderMenu18.menuItemHandler;

        var _getElements24 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements24.menu,
            menuButton = _getElements24.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Navigate down

        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        var secondDown = getElements({
          getAllByRole: getAllByRole
        });
        var secondMenuItem = secondDown.menuItems[1]; // Action the item

        fireEvent.keyUp(secondMenuItem, {
          keyCode: SPACE
        });
        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });
      it('should toggle the state on MenuItemCheckbox when selecting it with enter', function () {
        var _renderMenu19 = renderMenu(),
            getAllByRole = _renderMenu19.getAllByRole,
            closeHandler = _renderMenu19.closeHandler,
            menuItemHandler = _renderMenu19.menuItemHandler;

        var _getElements25 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements25.menu,
            menuButton = _getElements25.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Navigate down

        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        var thirdDown = getElements({
          getAllByRole: getAllByRole
        });
        var thirdMenuItem = thirdDown.menuItems[2];
        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false'); // Action the item

        fireEvent.keyUp(thirdMenuItem, {
          keyCode: ENTER
        });
        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');
        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });
      it('should toggle the state on MenuItemCheckbox when selecting it with space', function () {
        var _renderMenu20 = renderMenu(),
            getAllByRole = _renderMenu20.getAllByRole,
            closeHandler = _renderMenu20.closeHandler,
            menuItemHandler = _renderMenu20.menuItemHandler;

        var _getElements26 = getElements({
          getAllByRole: getAllByRole
        }),
            menu = _getElements26.menu,
            menuButton = _getElements26.menuButton; // Open menu


        fireEvent.keyUp(menuButton, {
          keyCode: ENTER
        });
        var firstDown = getElements({
          getAllByRole: getAllByRole
        });
        var firstMenuItem = firstDown.menuItems[0]; // Navigate down

        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        fireEvent.keyUp(firstMenuItem, {
          keyCode: ARROW_DOWN
        });
        var thirdDown = getElements({
          getAllByRole: getAllByRole
        });
        var thirdMenuItem = thirdDown.menuItems[2];
        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false'); // Action the item

        fireEvent.keyUp(thirdMenuItem, {
          keyCode: SPACE
        });
        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');
        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });
    });
  });
};
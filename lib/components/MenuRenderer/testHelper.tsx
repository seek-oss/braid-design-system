import '@testing-library/jest-dom/extend-expect';
import React, { useState } from 'react';
import {
  render,
  cleanup,
  fireEvent,
  RenderResult,
  act,
} from '@testing-library/react';
import genericUserEvent from '@testing-library/user-event';
import {
  BraidTestProvider,
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  MenuItemDivider,
} from '..';
import { MenuRendererProps } from './MenuRenderer';

// The generic `user-event` library currently doesn't have knowledge
// of the react lifecycle, e.g. it's methods are not wrapped with
// the `act` function. See issue for details:
// https://github.com/testing-library/user-event/issues/128
const userEvent = {
  click: (el: HTMLElement) => act(() => genericUserEvent.click(el)),
};

const TAB = 9;
const ENTER = 13;
const ESCAPE = 27;
const SPACE = 32;
const ARROW_UP = 38;
const ARROW_DOWN = 40;

interface MenuTestSuiteParams {
  name: string;
  Component: React.FunctionComponent<
    Pick<MenuRendererProps, 'onOpen' | 'onClose' | 'children'>
  >;
}

export const menuTestSuite = ({ name, Component }: MenuTestSuiteParams) => {
  function renderMenu() {
    const openHandler = jest.fn();
    const closeHandler = jest.fn();
    const menuItemHandler = jest.fn();
    const parentHandler = jest.fn();

    const TestCase = () => {
      const [checked, setChecked] = useState(false);

      return (
        <BraidTestProvider>
          <div onClick={parentHandler}>
            <Component onOpen={openHandler} onClose={closeHandler}>
              <MenuItem onClick={() => menuItemHandler('MenuItem')}>
                MenuItem
              </MenuItem>
              <MenuItemDivider />
              <MenuItemLink
                href="#"
                onClick={() => menuItemHandler('MenuItemLink')}
              >
                MenuItemLink
              </MenuItemLink>
              <MenuItemDivider />
              <MenuItemCheckbox
                checked={checked}
                onChange={(value) => {
                  setChecked(value);
                  menuItemHandler('MenuItemCheckbox');
                }}
              >
                MenuItemCheckbox
              </MenuItemCheckbox>
            </Component>
          </div>
        </BraidTestProvider>
      );
    };

    const { getAllByRole } = render(<TestCase />);

    return {
      getAllByRole,
      openHandler,
      closeHandler,
      menuItemHandler,
      parentHandler,
    };
  }

  function getElements({
    getAllByRole,
  }: {
    getAllByRole: RenderResult['getAllByRole'];
  }) {
    return {
      menuButton: getAllByRole((_, el) =>
        Boolean(el?.getAttribute('aria-haspopup')),
      )[0],
      menu: getAllByRole('menu', { hidden: true })[0],
      menuItems: getAllByRole(/menuitem|menuitemcheckbox/, { hidden: true }),
    };
  }

  describe(`Menu: ${name}`, () => {
    describe('Mouse interactions', () => {
      afterEach(cleanup);

      it('should open menu when clicked', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        expect(menu).not.toBeVisible();

        userEvent.click(menuButton);

        expect(menu).toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should toggle the menu when clicked again', () => {
        const { getAllByRole, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        userEvent.click(menuButton);
        userEvent.click(menuButton);

        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });

      it('should set the focused menu item on mouse over', () => {
        const { getAllByRole } = renderMenu();

        const { menuButton, menuItems: initialMenuItems } = getElements({
          getAllByRole,
        });

        userEvent.click(menuButton);
        fireEvent.mouseOver(initialMenuItems[2]);

        const { menuItems: mouseOverMenuItems } = getElements({
          getAllByRole,
        });

        expect(mouseOverMenuItems[2]).toHaveFocus();
      });

      it('should unfocus all menu items on mouse out', () => {
        const { getAllByRole } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({
          getAllByRole,
        });

        userEvent.click(menuButton);
        fireEvent.mouseOver(menuItems[1]);
        fireEvent.mouseOut(menu);

        const { menuItems: mouseOutMenuItems } = getElements({
          getAllByRole,
        });

        expect(mouseOutMenuItems[0]).not.toHaveFocus();
        expect(mouseOutMenuItems[1]).not.toHaveFocus();
        expect(mouseOutMenuItems[2]).not.toHaveFocus();
      });

      it('should trigger the click handler on a MenuItem', () => {
        const {
          getAllByRole,
          openHandler,
          closeHandler,
          menuItemHandler,
          parentHandler,
        } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({ getAllByRole });

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        // `userEvent` is clashing with state update from the `onMouseEnter` handler
        // on menu item. Need to use `fireEvent`.
        fireEvent.click(menuItems[0]);

        expect(menu).not.toBeVisible();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();

        // Should not bubble
        expect(parentHandler).not.toHaveBeenCalled();
      });

      it('should toggle the state on a MenuItemCheckbox', () => {
        const { getAllByRole, openHandler, closeHandler, menuItemHandler } =
          renderMenu();

        const { menu, menuButton, menuItems } = getElements({ getAllByRole });

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        const menuItemCheckbox = menuItems[2];

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

    describe('Keyboard interactions', () => {
      afterEach(cleanup);

      it('should open the menu with enter key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with space key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: SPACE });
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with down arrow key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: ARROW_DOWN });
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with up arrow key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: ARROW_UP });
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[2]).toHaveFocus();
        expect(openHandler).toHaveBeenCalledTimes(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should close the menu with escape key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({
          getAllByRole,
        });

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        fireEvent.keyUp(menuItems[0], { keyCode: ESCAPE });

        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });

      it('should close the menu with tab key', () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({
          getAllByRole,
        });

        userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        fireEvent.keyDown(menuItems[0], { keyCode: TAB });

        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenCalledTimes(1);
      });

      it('should be able to navigate down the list and back to the start', () => {
        const { getAllByRole } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: ARROW_DOWN });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];
        expect(firstMenuItem).toHaveFocus();

        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        const secondDown = getElements({ getAllByRole });
        const secondMenuItem = secondDown.menuItems[1];
        expect(secondMenuItem).toHaveFocus();

        fireEvent.keyUp(secondMenuItem, { keyCode: ARROW_DOWN });
        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        fireEvent.keyUp(thirdMenuItem, { keyCode: ARROW_DOWN });
        const forthDown = getElements({ getAllByRole });
        const firstMenuItemAgain = forthDown.menuItems[0];
        expect(firstMenuItemAgain).toHaveFocus();
      });

      it('should be able to navigate up the list and back to the end', () => {
        const { getAllByRole } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        fireEvent.keyUp(menuButton, { keyCode: ARROW_UP });
        const firstUp = getElements({ getAllByRole });
        const thirdMenuItem = firstUp.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        fireEvent.keyUp(thirdMenuItem, { keyCode: ARROW_UP });
        const secondUp = getElements({ getAllByRole });
        const secondMenuItem = secondUp.menuItems[1];
        expect(secondMenuItem).toHaveFocus();

        fireEvent.keyUp(secondMenuItem, { keyCode: ARROW_UP });
        const thirdUp = getElements({ getAllByRole });
        const firstMenuItem = thirdUp.menuItems[0];
        expect(firstMenuItem).toHaveFocus();

        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_UP });
        const forthUp = getElements({ getAllByRole });
        const lastMenuItemAgain = forthUp.menuItems[2];
        expect(lastMenuItemAgain).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with enter', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Action the item
        fireEvent.keyUp(firstMenuItem, { keyCode: ENTER });

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with space', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Action the item
        fireEvent.keyUp(firstMenuItem, { keyCode: SPACE });

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with enter', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Navigate down
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        const secondDown = getElements({ getAllByRole });
        const secondMenuItem = secondDown.menuItems[1];

        // Action the item
        fireEvent.keyUp(secondMenuItem, { keyCode: ENTER });

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with space', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Navigate down
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        const secondDown = getElements({ getAllByRole });
        const secondMenuItem = secondDown.menuItems[1];

        // Action the item
        fireEvent.keyUp(secondMenuItem, { keyCode: SPACE });

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(1);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with enter', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Navigate down
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        fireEvent.keyUp(thirdMenuItem, { keyCode: ENTER });

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with space', () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        fireEvent.keyUp(menuButton, { keyCode: ENTER });
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];

        // Navigate down
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        fireEvent.keyUp(firstMenuItem, { keyCode: ARROW_DOWN });
        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        fireEvent.keyUp(thirdMenuItem, { keyCode: SPACE });

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });
    });
  });
};

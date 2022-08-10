import '@testing-library/jest-dom';
import React, { useState } from 'react';
import {
  render,
  cleanup,
  fireEvent,
  RenderResult,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import { MenuItem, MenuItemLink, MenuItemCheckbox, MenuItemDivider } from '..';
import { MenuRendererProps } from './MenuRenderer';

interface MenuTestSuiteParams {
  name: string;
  Component: React.FunctionComponent<
    Pick<MenuRendererProps, 'onOpen' | 'onClose' | 'children'>
  >;
}

export const menuTestSuite = ({ name, Component }: MenuTestSuiteParams) => {
  function renderMenu() {
    const menuItemHandler = jest.fn();
    const parentHandler = jest.fn();

    const TestCase = ({
      openHandler,
      closeHandler,
    }: {
      openHandler: () => void;
      closeHandler: () => void;
    }) => {
      const [checked, setChecked] = useState(false);

      return (
        <BraidTestProvider>
          <div onClick={parentHandler}>
            <Component onOpen={openHandler} onClose={closeHandler}>
              <MenuItem id="first" onClick={() => menuItemHandler('MenuItem')}>
                MenuItem
              </MenuItem>
              <MenuItemDivider />
              <MenuItemLink
                id="second"
                href="#"
                onClick={() => menuItemHandler('MenuItemLink')}
              >
                MenuItemLink
              </MenuItemLink>
              <MenuItemDivider />
              <MenuItemCheckbox
                id="third"
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

    const defaultOpen = jest.fn();
    const defaultClose = jest.fn();
    const { getAllByRole, rerender } = render(
      <TestCase openHandler={defaultOpen} closeHandler={defaultClose} />,
    );

    return {
      getAllByRole,
      openHandler: defaultOpen,
      closeHandler: defaultClose,
      menuItemHandler,
      parentHandler,
      rerender: ({
        openHandler,
        closeHandler,
      }: { openHandler?: () => void; closeHandler?: () => void } = {}) =>
        rerender(
          <TestCase
            openHandler={openHandler || defaultOpen}
            closeHandler={closeHandler || defaultClose}
          />,
        ),
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

      it('should open menu when clicked', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        expect(menu).not.toBeVisible();

        await userEvent.click(menuButton);

        expect(menu).toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should toggle the menu when clicked again', async () => {
        const { getAllByRole, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        await userEvent.click(menuButton);
        await userEvent.click(menuButton);

        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should set the focused menu item on mouse over', async () => {
        const { getAllByRole } = renderMenu();

        const { menuButton, menuItems: initialMenuItems } = getElements({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        fireEvent.mouseOver(initialMenuItems[2]);

        const { menuItems: mouseOverMenuItems } = getElements({
          getAllByRole,
        });

        expect(mouseOverMenuItems[2]).toHaveFocus();
      });

      it('should not affect the focus on mouse out', async () => {
        const { getAllByRole } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        fireEvent.mouseOver(menuItems[1]);
        fireEvent.mouseOut(menu);

        const { menuItems: mouseOutMenuItems } = getElements({
          getAllByRole,
        });

        expect(mouseOutMenuItems[1]).toHaveFocus();
      });

      it('should trigger the click handler on a MenuItem', async () => {
        const {
          getAllByRole,
          openHandler,
          closeHandler,
          menuItemHandler,
          parentHandler,
        } = renderMenu();

        const { menu, menuButton, menuItems } = getElements({ getAllByRole });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        // `userEvent` is clashing with state update from the `onMouseEnter` handler
        // on menu item. Need to use `fireEvent`.
        fireEvent.click(menuItems[0]);

        expect(menu).not.toBeVisible();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();

        // Should not bubble
        expect(parentHandler).not.toHaveBeenCalled();
      });

      // Skipping for now due to not behaving correctly in test environment
      it.skip('should toggle the state on a MenuItemCheckbox', async () => {
        const { getAllByRole, openHandler, closeHandler, menuItemHandler } =
          renderMenu();

        const { menu, menuButton, menuItems } = getElements({ getAllByRole });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        const menuItemCheckbox = menuItems[2];

        expect(menuItemCheckbox.getAttribute('aria-checked')).toBe('false');

        await userEvent.click(menuItemCheckbox);

        const updatedElements = getElements({ getAllByRole });
        const updatedMenuItem = updatedElements.menuItems[2];

        expect(updatedMenuItem.getAttribute('aria-checked')).toBe('true');

        expect(menu).toBeVisible();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).not.toHaveBeenCalled();
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
        expect(updatedMenuItem).toHaveFocus();
      });
    });

    describe('Keyboard interactions', () => {
      afterEach(cleanup);

      it('should open the menu with enter key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with space key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard(' ');
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with down arrow key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with up arrow key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const { menuItems } = getElements({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuItems[2]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should close the menu with escape key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.keyboard('{Escape}');

        expect(menu).not.toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should close the menu with tab key', async () => {
        const { getAllByRole, openHandler, closeHandler } = renderMenu();

        const { menu, menuButton } = getElements({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.tab();

        expect(menu).not.toBeVisible();
        expect(document.body).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should be able to navigate down the list and back to the start', async () => {
        const { getAllByRole } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const firstDown = getElements({ getAllByRole });
        const firstMenuItem = firstDown.menuItems[0];
        expect(firstMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const secondDown = getElements({ getAllByRole });
        const secondMenuItem = secondDown.menuItems[1];
        expect(secondMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const forthDown = getElements({ getAllByRole });
        const firstMenuItemAgain = forthDown.menuItems[0];
        expect(firstMenuItemAgain).toHaveFocus();
      });

      it('should be able to navigate up the list and back to the end', async () => {
        const { getAllByRole } = renderMenu();

        const { menu } = getElements({ getAllByRole });
        expect(menu).not.toBeVisible();

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const firstUp = getElements({ getAllByRole });
        const thirdMenuItem = firstUp.menuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const secondUp = getElements({ getAllByRole });
        const secondMenuItem = secondUp.menuItems[1];
        expect(secondMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const thirdUp = getElements({ getAllByRole });
        const firstMenuItem = thirdUp.menuItems[0];
        expect(firstMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const forthUp = getElements({ getAllByRole });
        const lastMenuItemAgain = forthUp.menuItems[2];
        expect(lastMenuItemAgain).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with enter', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        // Action the item
        await userEvent.keyboard('{enter}');

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with space', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        // Action the item
        await userEvent.keyboard(' ');

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with enter', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{enter}');

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 1,
          id: 'second',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with space', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu, menuButton } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard(' ');

        expect(menu).not.toBeVisible();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 1,
          id: 'second',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with enter', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        await userEvent.keyboard('{enter}');

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with space', async () => {
        const { getAllByRole, closeHandler, menuItemHandler } = renderMenu();

        const { menu } = getElements({ getAllByRole });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const thirdDown = getElements({ getAllByRole });
        const thirdMenuItem = thirdDown.menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        await userEvent.keyboard(' ');

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });
    });

    describe('Open/Close handlers', () => {
      it('should not fire the open handler when its changed', async () => {
        const { getAllByRole, openHandler, rerender } = renderMenu();

        const { menuButton } = getElements({ getAllByRole });

        const newOpen = jest.fn();
        await userEvent.click(menuButton);
        expect(openHandler).toHaveBeenNthCalledWith(1);
        rerender({ openHandler: newOpen });
        expect(newOpen).not.toHaveBeenCalled();
      });

      it('should not fire the close handler when its changed', async () => {
        const { getAllByRole, closeHandler, rerender } = renderMenu();

        const { menuButton } = getElements({ getAllByRole });

        const newClose = jest.fn();
        await userEvent.click(menuButton);
        await userEvent.keyboard('{Escape}');
        expect(closeHandler).toHaveBeenCalledTimes(1);
        rerender({ closeHandler: newClose });
        expect(newClose).not.toHaveBeenCalled();
      });
    });
  });
};

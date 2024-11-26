import '@testing-library/jest-dom';
import { useState } from 'react';
import {
  type RenderResult,
  render,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../entries/test';
import { MenuItem, MenuItemLink, MenuItemCheckbox, MenuItemDivider } from '..';
import type { MenuRendererProps } from './MenuRenderer';

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
    const { queryAllByRole, getAllByRole, rerender } = render(
      <TestCase openHandler={defaultOpen} closeHandler={defaultClose} />,
    );

    return {
      queryAllByRole,
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

  function getTrigger({
    getAllByRole,
  }: {
    getAllByRole: RenderResult['getAllByRole'];
  }) {
    return {
      menuButton: getAllByRole('button')[0],
    };
  }

  function getMenu({
    getAllByRole,
  }: {
    getAllByRole: RenderResult['getAllByRole'];
  }) {
    return {
      menu: getAllByRole('menu', { hidden: true })[0],
      menuItems: [
        ...getAllByRole('menuitem', { hidden: true }),
        ...getAllByRole('menuitemcheckbox', { hidden: true }),
      ],
    };
  }

  describe(`Menu: ${name}`, () => {
    describe('Mouse interactions', () => {
      afterEach(cleanup);

      it('should open menu when clicked', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        const { menuButton } = getTrigger({ getAllByRole });
        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.click(menuButton);
        const { menu } = getMenu({ getAllByRole });

        expect(menu).toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should toggle the menu when clicked again', async () => {
        const { queryAllByRole, getAllByRole, closeHandler } = renderMenu();

        const { menuButton } = getTrigger({ getAllByRole });

        await userEvent.click(menuButton);
        await userEvent.click(menuButton);

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(menuButton).toHaveFocus();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should set the focused menu item on mouse over', async () => {
        const { getAllByRole } = renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);

        const { menuItems: initialMenuItems } = getMenu({ getAllByRole });

        fireEvent.mouseOver(initialMenuItems[2]);

        const { menuItems: mouseOverMenuItems } = getMenu({
          getAllByRole,
        });

        expect(mouseOverMenuItems[2]).toHaveFocus();
      });

      it('should not affect the focus on mouse out', async () => {
        const { getAllByRole } = renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        fireEvent.mouseOver(menuItems[1]);
        fireEvent.mouseOut(menu);

        const { menuItems: mouseOutMenuItems } = getMenu({
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

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

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

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        const menuItemCheckbox = menuItems[2];

        expect(menuItemCheckbox.getAttribute('aria-checked')).toBe('false');

        await userEvent.click(menuItemCheckbox);

        const { menuItems: updatedMenuItems } = getMenu({
          getAllByRole,
        });

        const updatedMenuItem = updatedMenuItems[2];

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
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with space key', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard(' ');

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with down arrow key', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        expect(menu).toBeVisible();
        expect(menuItems[0]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with up arrow key', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        expect(menu).toBeVisible();
        expect(menuItems[2]).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should close the menu with escape key', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.keyboard('{Escape}');

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should close the menu with tab key', async () => {
        const { queryAllByRole, getAllByRole, openHandler, closeHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.tab();

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(document.body).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should be able to navigate down the list and back to the start', async () => {
        const { queryAllByRole, getAllByRole } = renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const { menuItems: firstDownMenuItems } = getMenu({
          getAllByRole,
        });

        const firstMenuItem = firstDownMenuItems[0];
        expect(firstMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const { menuItems: secondDownMenuItems } = getMenu({
          getAllByRole,
        });
        const secondMenuItem = secondDownMenuItems[1];
        expect(secondMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const { menuItems: thirdDownMenuItems } = getMenu({
          getAllByRole,
        });
        const thirdMenuItem = thirdDownMenuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowdown}');
        const { menuItems: forthDownMenuItems } = getMenu({
          getAllByRole,
        });
        const firstMenuItemAgain = forthDownMenuItems[0];
        expect(firstMenuItemAgain).toHaveFocus();
      });

      it('should be able to navigate up the list and back to the end', async () => {
        const { queryAllByRole, getAllByRole } = renderMenu();

        expect(queryAllByRole('menu')).toHaveLength(0);

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const { menuItems: firstUpMenuItems } = getMenu({
          getAllByRole,
        });
        const thirdMenuItem = firstUpMenuItems[2];
        expect(thirdMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const { menuItems: secondUpMenuItems } = getMenu({
          getAllByRole,
        });
        const secondMenuItem = secondUpMenuItems[1];
        expect(secondMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const { menuItems: thirdUpMenuItems } = getMenu({
          getAllByRole,
        });
        const firstMenuItem = thirdUpMenuItems[0];
        expect(firstMenuItem).toHaveFocus();

        await userEvent.keyboard('{arrowup}');
        const { menuItems: forthUpMenuItems } = getMenu({
          getAllByRole,
        });
        const lastMenuItemAgain = forthUpMenuItems[2];
        expect(lastMenuItemAgain).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with enter', async () => {
        const { queryAllByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        // Action the item
        await userEvent.keyboard('{enter}');

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with space', async () => {
        const { queryAllByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        // Action the item
        await userEvent.keyboard(' ');

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with enter', async () => {
        const { queryAllByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{enter}');

        expect(queryAllByRole('menu')).toHaveLength(0);
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 1,
          id: 'second',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with space', async () => {
        const { queryAllByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard(' ');

        expect(queryAllByRole('menu')).toHaveLength(0);
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

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });
        const thirdMenuItem = menuItems[2];

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

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const { menu, menuItems } = getMenu({
          getAllByRole,
        });

        const thirdMenuItem = menuItems[2];

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

        const { menuButton } = getTrigger({
          getAllByRole,
        });

        const newOpen = jest.fn();
        await userEvent.click(menuButton);
        expect(openHandler).toHaveBeenNthCalledWith(1);
        rerender({ openHandler: newOpen });
        expect(newOpen).not.toHaveBeenCalled();
      });

      it('should not fire the close handler when its changed', async () => {
        const { getAllByRole, closeHandler, rerender } = renderMenu();

        const { menuButton } = getTrigger({
          getAllByRole,
        });

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

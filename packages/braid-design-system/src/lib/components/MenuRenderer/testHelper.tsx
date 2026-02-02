import {
  type RenderResult,
  render,
  cleanup,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { type FunctionComponent, useState } from 'react';

import {
  MenuItem,
  MenuItemLink,
  MenuItemCheckbox,
  MenuItemDivider,
  Text,
  TextLink,
} from '..';
import { BraidTestProvider } from '../../../test';

import type { MenuRendererProps } from './MenuRenderer';

interface MenuTestSuiteParams {
  name: string;
  Component: FunctionComponent<
    Pick<MenuRendererProps, 'onOpen' | 'onClose' | 'children'>
  >;
}

export const menuTestSuite = ({ name, Component }: MenuTestSuiteParams) => {
  function renderMenu() {
    const menuItemHandler = vi.fn();
    const parentHandler = vi.fn();

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
            <Text>
              <TextLink href="#">Link after Menu</TextLink>
            </Text>
          </div>
        </BraidTestProvider>
      );
    };

    const defaultOpen = vi.fn();
    const defaultClose = vi.fn();
    const { queryByRole, getByRole, getAllByRole, rerender } = render(
      <TestCase openHandler={defaultOpen} closeHandler={defaultClose} />,
    );

    return {
      queryByRole,
      getByRole,
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

  function getMenuItems({
    getAllByRole,
  }: {
    getAllByRole: RenderResult['getAllByRole'];
  }) {
    return [...getAllByRole('menuitem'), ...getAllByRole('menuitemcheckbox')];
  }

  describe(`Menu: ${name}`, () => {
    describe('Mouse interactions', () => {
      afterEach(cleanup);

      it('should open menu when clicked', async () => {
        const { queryByRole, getByRole, openHandler, closeHandler } =
          renderMenu();

        const menuButton = getByRole('button');
        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.click(menuButton);
        const menu = getByRole('menu');

        expect(menu).toBeVisible();
        expect(menuButton).toHaveFocus();
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should toggle the menu when clicked again', async () => {
        const { queryByRole, getByRole, closeHandler } = renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);
        await userEvent.click(menuButton);

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(menuButton).toHaveFocus();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should set the focused menu item on mouse over', async () => {
        const { getByRole, getAllByRole } = renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);

        const initialMenuItems = getMenuItems({ getAllByRole });

        fireEvent.mouseOver(initialMenuItems[2]);

        const mouseOverMenuItems = getMenuItems({
          getAllByRole,
        });

        await waitFor(() => {
          expect(mouseOverMenuItems[2]).toHaveFocus();
        });
      });

      it('should not affect the focus on mouse out', async () => {
        const { getByRole, getAllByRole } = renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);

        const menu = getByRole('menu');

        const menuItems = getMenuItems({ getAllByRole });

        fireEvent.mouseOver(menuItems[1]);
        fireEvent.mouseOut(menu);

        const mouseOutMenuItems = getMenuItems({ getAllByRole });

        await waitFor(() => {
          expect(mouseOutMenuItems[1]).toHaveFocus();
        });
      });

      it('should trigger the click handler on a MenuItem', async () => {
        const {
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
          menuItemHandler,
          parentHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);

        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

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
        const {
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
          menuItemHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);

        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        expect(menu).toBeVisible();
        const menuItemCheckbox = menuItems[2];

        expect(menuItemCheckbox.getAttribute('aria-checked')).toBe('false');

        await userEvent.click(menuItemCheckbox);

        const updatedMenuItems = getMenuItems({ getAllByRole });

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
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
        } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        expect(menu).toBeVisible();
        await waitFor(() => {
          expect(menuItems[0]).toHaveFocus();
        });
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with space key', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
        } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard(' ');

        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        expect(menu).toBeVisible();
        await waitFor(() => {
          expect(menuItems[0]).toHaveFocus();
        });
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with down arrow key', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
        } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        expect(menu).toBeVisible();
        await waitFor(() => {
          expect(menuItems[0]).toHaveFocus();
        });
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should open the menu with up arrow key', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          openHandler,
          closeHandler,
        } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        expect(menu).toBeVisible();
        await waitFor(() => {
          expect(menuItems[2]).toHaveFocus();
        });
        expect(openHandler).toHaveBeenNthCalledWith(1);
        expect(closeHandler).not.toHaveBeenCalled();
      });

      it('should close the menu with escape key', async () => {
        const { queryByRole, getByRole, openHandler, closeHandler } =
          renderMenu();

        const menuButton = getByRole('button');

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.keyboard('{Escape}');

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(menuButton).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should close the menu with tab key, and focus the next element', async () => {
        const { queryByRole, getByRole, openHandler, closeHandler } =
          renderMenu();

        const menuButton = getByRole('button');
        const link = getByRole('link');

        await userEvent.click(menuButton);
        openHandler.mockClear(); // Clear initial open invocation, to allow later negative assertion

        await userEvent.tab();

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(link).toHaveFocus();
        expect(openHandler).not.toHaveBeenCalled();
        expect(closeHandler).toHaveBeenNthCalledWith(1, { reason: 'exit' });
      });

      it('should be able to navigate down the list and back to the start', async () => {
        const { queryByRole, getAllByRole } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard('{arrowdown}');
        const firstDownMenuItems = getMenuItems({ getAllByRole });

        const firstMenuItem = firstDownMenuItems[0];
        await waitFor(() => {
          expect(firstMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');
        const secondDownMenuItems = getMenuItems({ getAllByRole });

        const secondMenuItem = secondDownMenuItems[1];
        await waitFor(() => {
          expect(secondMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');
        const thirdDownMenuItems = getMenuItems({ getAllByRole });

        const thirdMenuItem = thirdDownMenuItems[2];
        await waitFor(() => {
          expect(thirdMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowdown}');
        const forthDownMenuItems = getMenuItems({ getAllByRole });
        const firstMenuItemAgain = forthDownMenuItems[0];
        await waitFor(() => {
          expect(firstMenuItemAgain).toHaveFocus();
        });
      });

      it('should be able to navigate up the list and back to the end', async () => {
        const { queryByRole, getAllByRole } = renderMenu();

        expect(queryByRole('menu')).not.toBeInTheDocument();

        await userEvent.tab();
        await userEvent.keyboard('{arrowup}');
        const firstUpMenuItems = getMenuItems({ getAllByRole });

        const thirdMenuItem = firstUpMenuItems[2];
        await waitFor(() => {
          expect(thirdMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');
        const secondUpMenuItems = getMenuItems({ getAllByRole });
        const secondMenuItem = secondUpMenuItems[1];
        await waitFor(() => {
          expect(secondMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');
        const thirdUpMenuItems = getMenuItems({ getAllByRole });
        const firstMenuItem = thirdUpMenuItems[0];
        await waitFor(() => {
          expect(firstMenuItem).toHaveFocus();
        });

        await userEvent.keyboard('{arrowup}');
        const forthUpMenuItems = getMenuItems({ getAllByRole });
        const lastMenuItemAgain = forthUpMenuItems[2];
        await waitFor(() => {
          expect(lastMenuItemAgain).toHaveFocus();
        });
      });

      it('should trigger the click handler on MenuItem when selecting it with enter', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          closeHandler,
          menuItemHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        const menuItems = getMenuItems({ getAllByRole });

        // Action the item
        fireEvent.keyDown(menuItems[0], { key: 'Enter' });

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItem when selecting it with space', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          closeHandler,
          menuItemHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');

        const menuItems = getMenuItems({ getAllByRole });

        // Action the item
        fireEvent.keyDown(menuItems[0], { key: ' ' });

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 0,
          id: 'first',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItem');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with enter', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          closeHandler,
          menuItemHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');

        const menuItems = getMenuItems({ getAllByRole });
        fireEvent.keyDown(menuItems[1], { key: 'Enter' });

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 1,
          id: 'second',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should trigger the click handler on MenuItemLink when selecting it with space', async () => {
        const {
          queryByRole,
          getByRole,
          getAllByRole,
          closeHandler,
          menuItemHandler,
        } = renderMenu();

        const menuButton = getByRole('button');

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');

        const menuItems = getMenuItems({ getAllByRole });
        fireEvent.keyDown(menuItems[1], { key: ' ' });

        expect(queryByRole('menu')).not.toBeInTheDocument();
        expect(closeHandler).toHaveBeenNthCalledWith(1, {
          reason: 'selection',
          index: 1,
          id: 'second',
        });
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemLink');
        expect(menuButton).toHaveFocus();
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with enter', async () => {
        const { getByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });
        const thirdMenuItem = menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        fireEvent.keyDown(thirdMenuItem, { key: 'Enter' });

        await waitFor(() => {
          expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');
        });

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });

      it('should toggle the state on MenuItemCheckbox when selecting it with space', async () => {
        const { getByRole, getAllByRole, closeHandler, menuItemHandler } =
          renderMenu();

        // Open menu
        await userEvent.tab();
        await userEvent.keyboard('{enter}');
        await userEvent.keyboard('{arrowdown}');
        await userEvent.keyboard('{arrowdown}');

        const menu = getByRole('menu');
        const menuItems = getMenuItems({ getAllByRole });

        const thirdMenuItem = menuItems[2];

        expect(thirdMenuItem.getAttribute('aria-checked')).toBe('false');

        // Action the item
        fireEvent.keyDown(thirdMenuItem, { key: ' ' });

        await waitFor(() => {
          expect(thirdMenuItem.getAttribute('aria-checked')).toBe('true');
        });

        expect(menu).toBeVisible();
        expect(closeHandler).toHaveBeenCalledTimes(0);
        expect(menuItemHandler).toHaveBeenNthCalledWith(1, 'MenuItemCheckbox');
      });
    });

    describe('Open/Close handlers', () => {
      it('should not fire the open handler when its changed', async () => {
        const { getByRole, openHandler, rerender } = renderMenu();

        const menuButton = getByRole('button');

        const newOpen = vi.fn();
        await userEvent.click(menuButton);
        expect(openHandler).toHaveBeenNthCalledWith(1);
        rerender({ openHandler: newOpen });
        expect(newOpen).not.toHaveBeenCalled();
      });

      it('should not fire the close handler when its changed', async () => {
        const { getByRole, closeHandler, rerender } = renderMenu();

        const menuButton = getByRole('button');

        const newClose = vi.fn();
        await userEvent.click(menuButton);
        await userEvent.keyboard('{Escape}');
        expect(closeHandler).toHaveBeenCalledTimes(1);
        rerender({ closeHandler: newClose });
        expect(newClose).not.toHaveBeenCalled();
      });
    });
  });
};

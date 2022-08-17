import '@testing-library/jest-dom';
import 'html-validate/jest';
import React, { useState, Fragment } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BraidTestProvider } from '../../../test';
import {
  Tabs,
  Tab,
  TabPanel,
  TabsProvider,
  TabPanels,
  Badge,
  IconHome,
} from '..';

const TestPanel = ({ children }: { children: string }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Fragment>
      <input
        type="checkbox"
        data-testid={`${children}-checkbox`}
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {children}
    </Fragment>
  );
};

function renderTabs({
  selectedItem,
  renderInactivePanels,
}: { selectedItem?: string; renderInactivePanels?: boolean } = {}) {
  const changeHandler = jest.fn();

  const TestCase = ({ value }: { value?: string }) => (
    // Note: This test case also ensures that null/undefined
    // and fragments are handled correctly.
    <BraidTestProvider>
      <TabsProvider id="tabs" selectedItem={value} onChange={changeHandler}>
        <Tabs label="Test tabs">
          <Tab item="first">First</Tab>
          {null}
          {undefined}
          <>
            <Tab item="second">Second</Tab>
            <Tab item="third">Third</Tab>
          </>
        </Tabs>
        <TabPanels renderInactivePanels={renderInactivePanels}>
          <TabPanel>
            <TestPanel>panel-1</TestPanel>
          </TabPanel>
          {null}
          {undefined}
          <>
            <TabPanel>
              <TestPanel>panel-2</TestPanel>
            </TabPanel>
            <TabPanel>
              <TestPanel>panel-3</TestPanel>
            </TabPanel>
          </>
        </TabPanels>
      </TabsProvider>
    </BraidTestProvider>
  );
  const { getAllByRole, getByRole, getByLabelText, rerender, getByTestId } =
    render(<TestCase value={selectedItem} />);

  return {
    getAllByRole,
    getByRole,
    getByLabelText,
    updateSelectedItem: (item: string) => {
      rerender(<TestCase value={item} />);
    },
    changeHandler,
    getByTestId,
  };
}

describe('Tabs', () => {
  it('should render valid html structure', () => {
    expect(
      renderToStaticMarkup(
        <BraidTestProvider>
          <TabsProvider id="tabs">
            <Tabs label="Test tabs">
              <Tab>First</Tab>
              <Tab badge={<Badge>Badge</Badge>}>Second</Tab>
              <Tab icon={<IconHome />}>Second</Tab>
            </Tabs>
          </TabsProvider>
        </BraidTestProvider>,
      ),
    ).toHTMLValidate({
      extends: ['html-validate:recommended'],
    });
  });

  describe('Uncontrolled state', () => {
    it('should select the first tab by default', () => {
      const { getAllByRole } = renderTabs();
      const [firstTab] = getAllByRole('tab');

      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(firstTab.getAttribute('aria-controls')).toBe('tabs_1_panel');
    });

    it('should select second tab when clicked and show second panel', async () => {
      const { getAllByRole } = renderTabs();
      const [, secondTab] = getAllByRole('tab');

      await userEvent.click(secondTab);

      const visiblePanels = getAllByRole('tabpanel');

      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels[0].id).toBe('tabs_2_panel');
    });

    it('should select first tab and show first panel when toggling back from another tab', async () => {
      const { getAllByRole } = renderTabs();
      const [firstTab, secondTab] = getAllByRole('tab');

      await userEvent.click(secondTab);
      await userEvent.click(firstTab);

      const visiblePanels = getAllByRole('tabpanel');

      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels[0].id).toBe('tabs_1_panel');
    });

    it('should persist state between tab changes when renderInactivePanels is set', async () => {
      const { getAllByRole, getByTestId } = renderTabs({
        renderInactivePanels: true,
      });
      const [firstTab, secondTab] = getAllByRole('tab');

      let checkbox = getByTestId('panel-1-checkbox');

      await userEvent.click(checkbox);

      expect(checkbox).toBeChecked();

      await userEvent.click(secondTab);
      await userEvent.click(firstTab);

      checkbox = getByTestId('panel-1-checkbox');

      expect(checkbox).toBeChecked();
    });
  });

  describe('Controlled state', () => {
    it('should select second tab, show second panel and fire the onChange with correct value, when clicked', async () => {
      const { getAllByRole, changeHandler } = renderTabs({
        selectedItem: 'third',
      });
      const [, secondTab] = getAllByRole('tab');

      expect(changeHandler).not.toHaveBeenCalled();

      await userEvent.click(secondTab);

      expect(changeHandler).toHaveBeenNthCalledWith(1, 1, 'second');
    });

    it('should select second tab and show second panel, when controlled value changes', () => {
      const { getAllByRole, changeHandler, updateSelectedItem } = renderTabs({
        selectedItem: 'third',
      });
      const [firstTab, , thirdTab] = getAllByRole('tab');
      const initialVisiblePanels = getAllByRole('tabpanel');

      expect(changeHandler).not.toHaveBeenCalled();
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
      expect(initialVisiblePanels[0].id).toBe('tabs_3_panel');

      updateSelectedItem('first');

      expect(changeHandler).not.toHaveBeenCalled();

      const visiblePanels = getAllByRole('tabpanel');

      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels[0].id).toBe('tabs_1_panel');
    });
  });

  describe('Aria', () => {
    it('should provide a label for tablist', () => {
      const { getByRole } = renderTabs();
      const tablist = getByRole('tablist');

      expect(tablist.getAttribute('aria-label')).toBe('Test tabs');
    });

    it('should associate the tabpanel label with the tab itself', () => {
      const { getAllByRole, getByLabelText } = renderTabs({
        selectedItem: 'third',
      });
      const visiblePanels = getAllByRole('tabpanel');

      expect(visiblePanels.length).toBe(1);
      expect(getByLabelText('Third')).toBe(visiblePanels[0]);
    });

    it('should mark the selectedItem tab as selected and show the associated panel', () => {
      const { getAllByRole } = renderTabs({ selectedItem: 'second' });
      const [, secondTab] = getAllByRole('tab');
      const visiblePanels = getAllByRole('tabpanel');

      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels.length).toBe(1);
      expect(visiblePanels[0].id).toBe('tabs_2_panel');
    });

    it('should focus selected tab and then the selected panel when tabbing through the component', async () => {
      const { getAllByRole } = renderTabs({ selectedItem: 'second' });
      const secondTab = getAllByRole('tab')[1];
      const visiblePanels = getAllByRole('tabpanel');

      expect(document.body).toHaveFocus();
      await userEvent.tab();
      expect(secondTab).toHaveFocus();
      await userEvent.tab();
      expect(visiblePanels[0]).toHaveFocus();
    });

    it('should navigate through horizontal tablist with horizontal arrows only', async () => {
      const { getAllByRole } = renderTabs({ selectedItem: 'second' });
      const [firstTab, secondTab, thirdTab] = getAllByRole('tab');

      // Focus selected tab
      await userEvent.tab();

      // Test horizontal navigation works
      expect(secondTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(thirdTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(firstTab).toHaveFocus();
      await userEvent.keyboard('{arrowright}');
      expect(secondTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(firstTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(thirdTab).toHaveFocus();
      await userEvent.keyboard('{arrowleft}');
      expect(secondTab).toHaveFocus();
    });

    it('should navigate to last tab with the end key', async () => {
      const { getAllByRole } = renderTabs();
      const [, , thirdTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the last tab
      await userEvent.tab();
      await userEvent.keyboard('{end}');

      expect(thirdTab).toHaveFocus();
    });

    it('should navigate to first tab with the home key', async () => {
      const { getAllByRole } = renderTabs({ selectedItem: 'third' });
      const [firstTab] = getAllByRole('tab');

      // Focus selected tab and mmove focus to the first tab
      await userEvent.tab();
      await userEvent.keyboard('{home}');

      expect(firstTab).toHaveFocus();
    });

    it('should select the focused tab with the space key', async () => {
      const { getAllByRole } = renderTabs();
      const [, , thirdTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the left
      await userEvent.tab();
      await userEvent.keyboard('{arrowleft}');

      // Test commit tab selection with space
      await userEvent.keyboard(' ');

      expect(thirdTab).toHaveFocus();
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
    });

    it('should select the focused tab with the enter key', async () => {
      const { getAllByRole } = renderTabs();
      const [, secondTab] = getAllByRole('tab');

      // Focus selected tab and move focus to the right
      await userEvent.tab();
      await userEvent.keyboard('{arrowright}');

      // Test commit tab selection with enter
      await userEvent.keyboard('{enter}');

      expect(secondTab).toHaveFocus();
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });
  });
});

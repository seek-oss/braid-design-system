import _asyncToGenerator from '@babel/runtime/helpers/asyncToGenerator';
import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

let _Tabs, _TabPanel, _TabPanel2, _TabPanel3;

import _regeneratorRuntime from '@babel/runtime/regenerator';
import '@testing-library/jest-dom/extend-expect';
import React, { useState, Fragment } from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  BraidTestProvider,
  Tabs,
  Tab,
  TabPanel,
  TabsProvider,
  TabPanels,
} from '..';
const ENTER = 13;
const SPACE = 32;
const END = 35;
const HOME = 36;
const ARROW_LEFT = 37;
const ARROW_RIGHT = 39;

const TestPanel = function TestPanel(_ref) {
  const children = _ref.children;

  const _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];

  return /* #__PURE__*/ _jsx(
    Fragment,
    {},
    void 0,
    /* #__PURE__*/ _jsx('input', {
      type: 'checkbox',
      'data-testid': ''.concat(children, '-checkbox'),
      checked,
      onChange: function onChange() {
        return setChecked(!checked);
      },
    }),
    children,
  );
};

TestPanel.displayName = 'TestPanel';

function renderTabs() {
  let _TabPanels;

  const _ref2 =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    selectedItem = _ref2.selectedItem,
    renderInactivePanels = _ref2.renderInactivePanels;

  const changeHandler = jest.fn();

  const TestCase = function TestCase(_ref3) {
    const value = _ref3.value;
    return (
      /* #__PURE__*/
      // Note: This test case also ensures that null/undefined
      // and fragments are handled correctly.
      _jsx(
        BraidTestProvider,
        {},
        void 0,
        /* #__PURE__*/ _jsx(
          TabsProvider,
          {
            id: 'tabs',
            selectedItem: value,
            onChange: changeHandler,
          },
          void 0,
          _Tabs ||
            (_Tabs = /* #__PURE__*/ _jsx(
              Tabs,
              {
                label: 'Test tabs',
              },
              void 0,
              /* #__PURE__*/ _jsx(
                Tab,
                {
                  item: 'first',
                },
                void 0,
                'First',
              ),
              null,
              undefined,
              /* #__PURE__*/ React.createElement(
                React.Fragment,
                null,
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: 'second',
                  },
                  void 0,
                  'Second',
                ),
                /* #__PURE__*/ _jsx(
                  Tab,
                  {
                    item: 'third',
                  },
                  void 0,
                  'Third',
                ),
              ),
            )),
          _TabPanels ||
            (_TabPanels = /* #__PURE__*/ _jsx(
              TabPanels,
              {
                renderInactivePanels,
              },
              void 0,
              _TabPanel ||
                (_TabPanel = /* #__PURE__*/ _jsx(
                  TabPanel,
                  {},
                  void 0,
                  /* #__PURE__*/ _jsx(TestPanel, {}, void 0, 'panel-1'),
                )),
              null,
              undefined,
              /* #__PURE__*/ React.createElement(
                React.Fragment,
                null,
                _TabPanel2 ||
                  (_TabPanel2 = /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(TestPanel, {}, void 0, 'panel-2'),
                  )),
                _TabPanel3 ||
                  (_TabPanel3 = /* #__PURE__*/ _jsx(
                    TabPanel,
                    {},
                    void 0,
                    /* #__PURE__*/ _jsx(TestPanel, {}, void 0, 'panel-3'),
                  )),
              ),
            )),
        ),
      )
    );
  };

  const _render = render(
      /* #__PURE__*/ _jsx(TestCase, {
        value: selectedItem,
      }),
    ),
    getAllByRole = _render.getAllByRole,
    getByRole = _render.getByRole,
    getByLabelText = _render.getByLabelText,
    rerender = _render.rerender,
    getByTestId = _render.getByTestId;

  return {
    getAllByRole,
    getByRole,
    getByLabelText,
    updateSelectedItem: function updateSelectedItem(item) {
      rerender(
        /* #__PURE__*/ _jsx(TestCase, {
          value: item,
        }),
      );
    },
    changeHandler,
    getByTestId,
  };
}

describe('Tabs', function () {
  describe('Uncontrolled state', function () {
    it('should select the first tab by default', function () {
      const _renderTabs = renderTabs(),
        getAllByRole = _renderTabs.getAllByRole;

      const _getAllByRole = getAllByRole('tab'),
        _getAllByRole2 = _slicedToArray(_getAllByRole, 1),
        firstTab = _getAllByRole2[0];

      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(firstTab.getAttribute('aria-controls')).toBe('tabs_1_panel');
    });
    it('should select second tab when clicked and show second panel', function () {
      const _renderTabs2 = renderTabs(),
        getAllByRole = _renderTabs2.getAllByRole;

      const _getAllByRole3 = getAllByRole('tab'),
        _getAllByRole4 = _slicedToArray(_getAllByRole3, 2),
        secondTab = _getAllByRole4[1];

      userEvent.click(secondTab);
      const visiblePanels = getAllByRole('tabpanel');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels[0].id).toBe('tabs_2_panel');
    });
    it('should select first tab and show first panel when toggling back from another tab', function () {
      const _renderTabs3 = renderTabs(),
        getAllByRole = _renderTabs3.getAllByRole;

      const _getAllByRole5 = getAllByRole('tab'),
        _getAllByRole6 = _slicedToArray(_getAllByRole5, 2),
        firstTab = _getAllByRole6[0],
        secondTab = _getAllByRole6[1];

      userEvent.click(secondTab);
      userEvent.click(firstTab);
      const visiblePanels = getAllByRole('tabpanel');
      expect(firstTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels[0].id).toBe('tabs_1_panel');
    });
    it('should persist state between tab changes when renderInactivePanels is set', function () {
      const _renderTabs4 = renderTabs({
          renderInactivePanels: true,
        }),
        getAllByRole = _renderTabs4.getAllByRole,
        getByTestId = _renderTabs4.getByTestId;

      const _getAllByRole7 = getAllByRole('tab'),
        _getAllByRole8 = _slicedToArray(_getAllByRole7, 2),
        firstTab = _getAllByRole8[0],
        secondTab = _getAllByRole8[1];

      let checkbox = getByTestId('panel-1-checkbox');
      userEvent.click(checkbox);
      expect(checkbox).toBeChecked();
      userEvent.click(secondTab);
      userEvent.click(firstTab);
      checkbox = getByTestId('panel-1-checkbox');
      expect(checkbox).toBeChecked();
    });
  });
  describe('Controlled state', function () {
    it('should select second tab, show second panel and fire the onChange with correct value, when clicked', function () {
      const _renderTabs5 = renderTabs({
          selectedItem: 'third',
        }),
        getAllByRole = _renderTabs5.getAllByRole,
        changeHandler = _renderTabs5.changeHandler;

      const _getAllByRole9 = getAllByRole('tab'),
        _getAllByRole10 = _slicedToArray(_getAllByRole9, 2),
        secondTab = _getAllByRole10[1];

      expect(changeHandler).not.toHaveBeenCalled();
      userEvent.click(secondTab);
      expect(changeHandler).toHaveBeenNthCalledWith(1, 1, 'second');
    });
    it('should select second tab and show second panel, when controlled value changes', function () {
      const _renderTabs6 = renderTabs({
          selectedItem: 'third',
        }),
        getAllByRole = _renderTabs6.getAllByRole,
        changeHandler = _renderTabs6.changeHandler,
        updateSelectedItem = _renderTabs6.updateSelectedItem;

      const _getAllByRole11 = getAllByRole('tab'),
        _getAllByRole12 = _slicedToArray(_getAllByRole11, 3),
        firstTab = _getAllByRole12[0],
        thirdTab = _getAllByRole12[2];

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
  describe('Aria', function () {
    it('should provide a label for tablist', function () {
      const _renderTabs7 = renderTabs(),
        getByRole = _renderTabs7.getByRole;

      const tablist = getByRole('tablist');
      expect(tablist.getAttribute('aria-label')).toBe('Test tabs');
    });
    it('should associate the tabpanel label with the tab itself', function () {
      const _renderTabs8 = renderTabs({
          selectedItem: 'third',
        }),
        getAllByRole = _renderTabs8.getAllByRole,
        getByLabelText = _renderTabs8.getByLabelText;

      const visiblePanels = getAllByRole('tabpanel');
      expect(visiblePanels.length).toBe(1);
      expect(getByLabelText('Third')).toBe(visiblePanels[0]);
    });
    it('should mark the selectedItem tab as selected and show the associated panel', function () {
      const _renderTabs9 = renderTabs({
          selectedItem: 'second',
        }),
        getAllByRole = _renderTabs9.getAllByRole;

      const _getAllByRole13 = getAllByRole('tab'),
        _getAllByRole14 = _slicedToArray(_getAllByRole13, 2),
        secondTab = _getAllByRole14[1];

      const visiblePanels = getAllByRole('tabpanel');
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
      expect(visiblePanels.length).toBe(1);
      expect(visiblePanels[0].id).toBe('tabs_2_panel');
    });
    it(
      'should focus selected tab and then the selected panel when tabbing through the component',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee() {
          let _renderTabs10, getAllByRole, secondTab, visiblePanels;

          return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (_renderTabs10 = renderTabs({
                    selectedItem: 'second',
                  })),
                    (getAllByRole = _renderTabs10.getAllByRole);
                  secondTab = getAllByRole('tab')[1];
                  visiblePanels = getAllByRole('tabpanel');
                  expect(document.body).toHaveFocus();
                  userEvent.tab();
                  expect(secondTab).toHaveFocus();
                  userEvent.tab();
                  expect(visiblePanels[0]).toHaveFocus();

                case 8:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee);
        }),
      ),
    );
    it(
      'should navigate through horizontal tablist with horizontal arrows only',
      /* #__PURE__*/ _asyncToGenerator(
        /* #__PURE__*/ _regeneratorRuntime.mark(function _callee2() {
          let _renderTabs11,
            getAllByRole,
            _getAllByRole15,
            _getAllByRole16,
            firstTab,
            secondTab,
            thirdTab;

          return _regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  (_renderTabs11 = renderTabs({
                    selectedItem: 'second',
                  })),
                    (getAllByRole = _renderTabs11.getAllByRole);
                  (_getAllByRole15 = getAllByRole('tab')),
                    (_getAllByRole16 = _slicedToArray(_getAllByRole15, 3)),
                    (firstTab = _getAllByRole16[0]),
                    (secondTab = _getAllByRole16[1]),
                    (thirdTab = _getAllByRole16[2]); // Focus selected tab

                  userEvent.tab(); // Test horiztonal navigation works

                  expect(secondTab).toHaveFocus();
                  fireEvent.keyUp(secondTab, {
                    keyCode: ARROW_RIGHT,
                  });
                  expect(thirdTab).toHaveFocus();
                  fireEvent.keyUp(thirdTab, {
                    keyCode: ARROW_RIGHT,
                  });
                  expect(firstTab).toHaveFocus();
                  fireEvent.keyUp(firstTab, {
                    keyCode: ARROW_RIGHT,
                  });
                  expect(secondTab).toHaveFocus();
                  fireEvent.keyUp(secondTab, {
                    keyCode: ARROW_LEFT,
                  });
                  expect(firstTab).toHaveFocus();
                  fireEvent.keyUp(firstTab, {
                    keyCode: ARROW_LEFT,
                  });
                  expect(thirdTab).toHaveFocus();
                  fireEvent.keyUp(thirdTab, {
                    keyCode: ARROW_LEFT,
                  });
                  expect(secondTab).toHaveFocus();

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          }, _callee2);
        }),
      ),
    );
    it('should navigate to last tab with the end key', function () {
      const _renderTabs12 = renderTabs(),
        getAllByRole = _renderTabs12.getAllByRole;

      const _getAllByRole17 = getAllByRole('tab'),
        _getAllByRole18 = _slicedToArray(_getAllByRole17, 3),
        firstTab = _getAllByRole18[0],
        thirdTab = _getAllByRole18[2]; // Focus selected tab and move focus to the last tab

      userEvent.tab();
      fireEvent.keyUp(firstTab, {
        keyCode: END,
      });
      expect(thirdTab).toHaveFocus();
    });
    it('should navigate to first tab with the home key', function () {
      const _renderTabs13 = renderTabs({
          selectedItem: 'third',
        }),
        getAllByRole = _renderTabs13.getAllByRole;

      const _getAllByRole19 = getAllByRole('tab'),
        _getAllByRole20 = _slicedToArray(_getAllByRole19, 3),
        firstTab = _getAllByRole20[0],
        thirdTab = _getAllByRole20[2]; // Focus selected tab and mmove focus to the first tab

      userEvent.tab();
      fireEvent.keyUp(thirdTab, {
        keyCode: HOME,
      });
      expect(firstTab).toHaveFocus();
    });
    it('should select the focused tab with the space key', function () {
      const _renderTabs14 = renderTabs(),
        getAllByRole = _renderTabs14.getAllByRole;

      const _getAllByRole21 = getAllByRole('tab'),
        _getAllByRole22 = _slicedToArray(_getAllByRole21, 3),
        firstTab = _getAllByRole22[0],
        thirdTab = _getAllByRole22[2]; // Focus selected tab and move focus to the left

      userEvent.tab();
      fireEvent.keyUp(firstTab, {
        keyCode: ARROW_LEFT,
      }); // Test commit tab selection with space

      fireEvent.keyUp(thirdTab, {
        keyCode: SPACE,
      });
      expect(thirdTab).toHaveFocus();
      expect(thirdTab.getAttribute('aria-selected')).toBe('true');
    });
    it('should select the focused tab with the enter key', function () {
      const _renderTabs15 = renderTabs(),
        getAllByRole = _renderTabs15.getAllByRole;

      const _getAllByRole23 = getAllByRole('tab'),
        _getAllByRole24 = _slicedToArray(_getAllByRole23, 2),
        firstTab = _getAllByRole24[0],
        secondTab = _getAllByRole24[1]; // Focus selected tab and move focus to the right

      userEvent.tab();
      fireEvent.keyUp(firstTab, {
        keyCode: ARROW_RIGHT,
      }); // Test commit tab selection with enter

      fireEvent.keyUp(secondTab, {
        keyCode: ENTER,
      });
      expect(secondTab).toHaveFocus();
      expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });
  });
});

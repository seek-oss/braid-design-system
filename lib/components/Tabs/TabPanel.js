import _extends from "@babel/runtime/helpers/extends";
import _jsx from "@babel/runtime/helpers/jsx";
import React, { useContext } from 'react';
import assert from 'assert';
import { Box } from '../Box/Box';
import buildDataAttributes from '../private/buildDataAttributes';
import { Overlay } from '../private/Overlay/Overlay';
import { TabsContext } from './TabsProvider';
import { TabPanelsContext } from './TabPanelsContext';
import * as styles from './Tabs.css';
export var TabPanel = function TabPanel(_ref) {
  var children = _ref.children,
      data = _ref.data,
      item = _ref.item;
  var tabsContext = useContext(TabsContext);
  var tabPanelsContext = useContext(TabPanelsContext);
  assert(tabsContext !== null, 'A TabPanel must be rendered as a child of TabsProvider. See the documentation for correct usage: https://seek-oss.github.io/braid-design-system/components/Tabs');

  if (!tabPanelsContext) {
    throw new Error('TabPanel rendered outside TabPanels');
  }

  if (!tabsContext) {
    throw new Error('TabPanel rendered outside TabsProvider');
  }

  var a11y = tabsContext.a11y,
      selectedIndex = tabsContext.selectedIndex,
      selectedItem = tabsContext.selectedItem;
  var panelIndex = tabPanelsContext.panelIndex,
      renderInactive = tabPanelsContext.renderInactive;
  var isSelected = selectedIndex > -1 ? panelIndex === selectedIndex : selectedItem === item;
  return /*#__PURE__*/React.createElement(Box, _extends({}, a11y.tabPanelProps({
    panelIndex: panelIndex,
    isSelected: isSelected
  }), {
    display: isSelected ? undefined : 'none',
    position: "relative",
    outline: "none",
    className: styles.tabPanel
  }, data ? buildDataAttributes(data) : undefined), isSelected || renderInactive ? children : undefined, /*#__PURE__*/_jsx(Overlay, {
    zIndex: 1,
    boxShadow: "outlineFocus",
    borderRadius: "standard",
    className: styles.tabPanelFocusRing,
    onlyVisibleForKeyboardNavigation: true
  }));
};
TabPanel.displayName = "TabPanel";